import type { ServiceSectionResolved } from '@/components/ServiceSections'

const LIST_KEYS = ['list1', 'list2', 'list3', 'list4', 'list5'] as const
const HOW_KEYS = ['how1', 'how2', 'how3'] as const
const ADV_KEYS = ['adv1', 'adv2', 'adv3', 'adv4'] as const

type FallbackDef = {
  imagePosition: 'left' | 'right'
  panelStyle: 'dark' | 'charcoal'
  icon: string
  image: string
  i18nPrefix: string
}

export const SERVICE_SECTION_FALLBACKS: FallbackDef[] = [
  {
    imagePosition: 'right',
    panelStyle: 'charcoal',
    icon: 'wine',
    image: '/assets/gallery/buffet.jpg',
    i18nPrefix: 'services.catering',
  },
  {
    imagePosition: 'left',
    panelStyle: 'dark',
    icon: 'disc',
    image: '/assets/gallery/dj-turntable.jpg',
    i18nPrefix: 'services.music',
  },
  {
    imagePosition: 'right',
    panelStyle: 'charcoal',
    icon: 'penTool',
    image: '/assets/design.png',
    i18nPrefix: 'services.design',
  },
  {
    imagePosition: 'left',
    panelStyle: 'dark',
    icon: 'lightbulb',
    image: '/assets/gallery/decor-red.jpg',
    i18nPrefix: 'services.decor',
  },
  {
    imagePosition: 'right',
    panelStyle: 'charcoal',
    icon: 'users',
    image: '/assets/consulting-team.jpg',
    i18nPrefix: 'services.consulting',
  },
]

function panelClass(style: 'dark' | 'charcoal' | undefined): string {
  return style === 'charcoal' ? 'bg-[#151515]' : 'bg-[#1a1a1a]'
}

function tLine(prefix: string, key: string, t: (path: string) => string): string | null {
  const path = `${prefix}.${key}`
  const s = t(path)
  return s === path ? null : s
}

function linesFromTranslations(
  prefix: string,
  keys: readonly string[],
  t: (k: string) => string,
): string[] {
  return keys.map((k) => tLine(prefix, k, t)).filter((x): x is string => !!x)
}

export function resolveServiceSections(
  layout: unknown[] | null | undefined,
  t: (key: string) => string,
): ServiceSectionResolved[] {
  const blocks = (layout ?? []).filter((b: any) => b && b.blockType === 'serviceSection')

  const fromI18n = (): ServiceSectionResolved[] =>
    SERVICE_SECTION_FALLBACKS.map((fb) => {
      const p = fb.i18nPrefix
      const listLines = linesFromTranslations(p, LIST_KEYS, t)
      return {
        imagePosition: fb.imagePosition,
        panelClass: panelClass(fb.panelStyle),
        icon: fb.icon,
        title: t(`${p}.title`),
        description: t(`${p}.desc`),
        bullets: listLines,
        imageUrl: fb.image,
        howTitle: t(`${p}.howTitle`),
        howItems: linesFromTranslations(p, HOW_KEYS, t),
        advTitle: t(`${p}.advTitle`),
        advItems: linesFromTranslations(p, ADV_KEYS, t),
        moreLabel: t(`${p}.more`),
        closeLabel: t(`${p}.close`),
        addLabel: t(`${p}.add`),
      }
    })

  if (!blocks.length) return fromI18n()

  return blocks.map((raw: any, idx: number) => {
    const fb = SERVICE_SECTION_FALLBACKS[idx] ?? SERVICE_SECTION_FALLBACKS[0]
    const p = fb.i18nPrefix

    const bulletRows = Array.isArray(raw.bullets)
      ? raw.bullets.map((b: { text?: string }) => b?.text).filter((x: string | undefined) => !!x)
      : null
    const bullets =
      bulletRows !== null ? bulletRows : linesFromTranslations(p, LIST_KEYS, t)

    const howRows = Array.isArray(raw.howItems)
      ? raw.howItems.map((b: { text?: string }) => b?.text).filter((x: string | undefined) => !!x)
      : null
    const howItems = howRows !== null ? howRows : linesFromTranslations(p, HOW_KEYS, t)

    const advRows = Array.isArray(raw.advItems)
      ? raw.advItems.map((b: { text?: string }) => b?.text).filter((x: string | undefined) => !!x)
      : null
    const advItems = advRows !== null ? advRows : linesFromTranslations(p, ADV_KEYS, t)

    const img =
      typeof raw.image === 'object' && raw.image !== null && 'url' in raw.image
        ? String((raw.image as { url?: string }).url ?? '')
        : ''

    return {
      imagePosition: raw.imagePosition === 'left' ? 'left' : 'right',
      panelClass: panelClass(raw.panelStyle === 'charcoal' ? 'charcoal' : 'dark'),
      icon: typeof raw.icon === 'string' ? raw.icon : fb.icon,
      title: (raw.title as string)?.trim() || t(`${p}.title`),
      description: (raw.description as string)?.trim() || t(`${p}.desc`),
      bullets,
      imageUrl: img || (typeof raw.fallbackImage === 'string' ? raw.fallbackImage : '') || fb.image,
      howTitle: (raw.howTitle as string)?.trim() || t(`${p}.howTitle`),
      howItems,
      advTitle: (raw.advTitle as string)?.trim() || t(`${p}.advTitle`),
      advItems,
      moreLabel: (raw.moreLabel as string)?.trim() || t(`${p}.more`),
      closeLabel: (raw.closeLabel as string)?.trim() || t(`${p}.close`),
      addLabel: (raw.addLabel as string)?.trim() || t(`${p}.add`),
    }
  })
}
