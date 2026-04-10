import { getPayload } from 'payload'
import payloadConfig from '../payload.config'
import { translations, type Language } from '../i18n/translations'

type ServiceKey = 'catering' | 'music' | 'design' | 'decor' | 'consulting'

function buildServiceSectionBlocks(lang: Language) {
  const svc = translations[lang].services
  const mk = (
    key: ServiceKey,
    imagePosition: 'left' | 'right',
    panelStyle: 'dark' | 'charcoal',
    icon: string,
    fallbackImage: string,
  ) => {
    const x = svc[key] as Record<string, string>
    const bullets = ['list1', 'list2', 'list3', 'list4', 'list5']
      .map((k) => (x[k] ? { text: x[k] } : null))
      .filter(Boolean) as { text: string }[]
    return {
      blockType: 'serviceSection' as const,
      adminLabel: key,
      imagePosition,
      panelStyle,
      icon,
      fallbackImage,
      title: x.title,
      description: x.desc,
      bullets,
      howTitle: x.howTitle,
      howItems: [x.how1, x.how2, x.how3].map((text) => ({ text })),
      advTitle: x.advTitle,
      advItems: [x.adv1, x.adv2, x.adv3, x.adv4].map((text) => ({ text })),
      moreLabel: x.more,
      closeLabel: x.close,
      addLabel: x.add,
    }
  }
  return [
    mk('catering', 'right', 'charcoal', 'wine', '/assets/gallery/buffet.jpg'),
    mk('music', 'left', 'dark', 'disc', '/assets/gallery/dj-turntable.jpg'),
    mk('design', 'right', 'charcoal', 'penTool', '/assets/design.png'),
    mk('decor', 'left', 'dark', 'lightbulb', '/assets/gallery/decor-red.jpg'),
    mk('consulting', 'right', 'charcoal', 'users', '/assets/consulting-team.jpg'),
  ]
}

function getLayoutForLocale(lang: 'ru' | 'en') {
  const t = translations[lang]
  return [
    {
      blockType: 'hero',
      heading: 'D.O.M. EVENT AGENCY',
      subheading: (t as any).hero?.subtitle ?? 'WE ARE NOT FOR EVERYONE, WE ARE FOR YOU',
      buttonText: (t as any).hero?.cta ?? 'LEVEL UP MY EVENT',
      buttonLink: '#builder',
    },
    {
      blockType: 'richText',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [{ type: 'text', text: (t as any).about?.description ?? '' }],
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    {
      blockType: 'team',
      heading: (t as any).team?.title ?? 'TEAM',
      members: [
        { name: 'Deniss Smirnovs', role: (t as any).team?.members?.deniss?.role ?? '', bio: (t as any).team?.members?.deniss?.bio ?? '', fullBio: (t as any).team?.members?.deniss?.fullBio ?? '' },
        { name: 'Anastasija Kazarina', role: (t as any).team?.members?.anastasija?.role ?? '', bio: (t as any).team?.members?.anastasija?.bio ?? '', fullBio: (t as any).team?.members?.anastasija?.fullBio ?? '' },
        { name: 'O?egs Porietis', role: (t as any).team?.members?.olegs?.role ?? '', bio: (t as any).team?.members?.olegs?.bio ?? '', fullBio: (t as any).team?.members?.olegs?.fullBio ?? '' },
        { name: 'Andris Konopackis', role: (t as any).team?.members?.andris?.role ?? '', bio: (t as any).team?.members?.andris?.bio ?? '', fullBio: (t as any).team?.members?.andris?.fullBio ?? '' },
        { name: 'Laura Rudko', role: (t as any).team?.members?.laura?.role ?? '', bio: (t as any).team?.members?.laura?.bio ?? '', fullBio: (t as any).team?.members?.laura?.fullBio ?? '' },
        { name: 'Vladislavs Saveljevs', role: (t as any).team?.members?.vladislavs?.role ?? '', bio: (t as any).team?.members?.vladislavs?.bio ?? '', fullBio: (t as any).team?.members?.vladislavs?.fullBio ?? '' },
      ],
    },
    {
      blockType: 'gallery',
      heading: (t as any).gallery?.title ?? 'GALLERY',
      images: [],
    },
    {
      blockType: 'partners',
      heading: (t as any).partners?.title ?? 'PARTNERS',
      partners: [
        { name: 'MV Group' },
        { name: 'M Collections' },
        { name: 'Latgalian Bartenders Club' },
        { name: 'Park Hotel Latgola' },
        { name: 'Gemoss' },
        { name: '1st Boogie Garden' },
        { name: 'Par Ziediem' },
        { name: 'Sound Light Serviss' },
      ],
    },
    {
      blockType: 'cta',
      heading: (t as any).about?.contactUs ?? 'CONTACT US',
      text: '',
      buttonText: (t as any).about?.contactUs ?? 'CONTACT US',
      buttonLink: '#contacts',
    },
    {
      blockType: 'eventBuilder',
      heading: (t as any).builder?.title ?? 'BUILD YOUR EVENT',
      subheading: (t as any).builder?.yourEvent ?? '',
      submitButtonText: (t as any).builder?.submit ?? 'SUBMIT',
      emptyStateText: (t as any).builder?.emptyState ?? '',
      services: [
        { key: 'drinks', title: (t as any).builder?.services?.drinks?.title ?? 'Drinks', description: (t as any).builder?.services?.drinks?.desc ?? '', price: 0 },
        { key: 'food', title: (t as any).builder?.services?.food?.title ?? 'Food', description: (t as any).builder?.services?.food?.desc ?? '', price: 0 },
        { key: 'decor', title: (t as any).builder?.services?.decor?.title ?? 'Decor', description: (t as any).builder?.services?.decor?.desc ?? '', price: 0 },
        { key: 'music', title: (t as any).builder?.services?.music?.title ?? 'Music', description: (t as any).builder?.services?.music?.desc ?? '', price: 0 },
        { key: 'logistics', title: (t as any).builder?.services?.logistics?.title ?? 'Logistics', description: (t as any).builder?.services?.logistics?.desc ?? '', price: 0 },
      ],
    },
    ...buildServiceSectionBlocks(lang),
  ]
}

async function seed() {
  const payload = await getPayload({ config: payloadConfig })

  console.log('Seeding site settings...')
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      general: {
        siteName: 'D.O.M. Event Agency',
        contactEmail: 'info@domeventagency.com',
        phone: '',
        address: '',
      },
      header: {
        navLinks: [],
      },
      footer: {
        tagline: '',
        copyrightText: '',
        socialLinks: [],
        footerLinks: [],
      },
    },
  })

  console.log('Seeding homepage...')

  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
  })

  const homeData = {
    title: 'M\u0101jaslapa',
    slug: 'home',
    layout: [
      {
        blockType: 'hero',
        heading: 'D.O.M. EVENT AGENCY',
        subheading: 'WE ARE NOT FOR EVERYONE, WE ARE FOR YOU',
        buttonText: 'LEVEL UP MY EVENT',
        buttonLink: '#builder',
      },
      {
        blockType: 'richText',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'A\u0123ent\u016bra, kas piepilda laiku, pas\u0101kumus un vietas ar dz\u012bv\u012bbu, stilu un j\u0113gu.' }],
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
      {
        blockType: 'team',
        heading: 'M\u016aS\u016a KOMANDA',
        members: [
          { name: 'Deniss Smirnovs', role: 'Vad\u012bt\u0101js', bio: '' },
          { name: 'Anastasija Kazarina', role: 'Koordinatore', bio: '' },
          { name: 'O\u013cegs Porietis', role: 'Tehnikas vad\u012bt\u0101js', bio: '' },
          { name: 'Andris Konopackis', role: 'DJ', bio: '' },
          { name: 'Laura Rudko', role: 'Dizainere', bio: '' },
          { name: 'Vladislavs Saveljevs', role: 'B\u0101rme\u0146u meistars', bio: '' },
        ],
      },
      {
        blockType: 'gallery',
        heading: 'GALERIJA',
        images: [],
      },
      {
        blockType: 'cta',
        heading: 'SAZINIES AR MUMS',
        text: 'Sazinies un uzzini vair\u0101k par m\u016bsu pakalpojumiem.',
        buttonText: 'KONTAKTI',
        buttonLink: '#contacts',
      },
      {
        blockType: 'partners',
        heading: 'PARTNERI',
        partners: [
          { name: 'MV Group' },
          { name: 'M Collections' },
          { name: 'Latgalian Bartenders Club' },
          { name: 'Park Hotel Latgola' },
          { name: 'Gemoss' },
          { name: '1st Boogie Garden' },
          { name: 'Par Ziediem' },
          { name: 'Sound Light Serviss' },
        ],
      },
      {
        blockType: 'eventBuilder',
        heading: 'SALIEC SAVU PAS\u0100KUMU PATS',
        subheading: 'Izv\u0113lieties pakalpojumus',
        submitButtonText: 'PIETEIKT PAS\u0100KUMU',
        emptyStateText: 'Izv\u0113lieties pakalpojumus no saraksta, lai s\u0101ktu pl\u0101no\u0161anu.',
        services: [
          {
            key: 'drinks',
            title: 'Dz\u0113rieni',
            description: 'Autoru koktei\u013ci, bezalkoholis\u0137\u0101s alternat\u012bvas un pas\u0101kuma stilam piel\u0101gota b\u0101ra karte.',
            price: 0,
          },
          {
            key: 'food',
            title: 'Fur\u0161ets un \u0113din\u0101\u0161ana',
            description: 'Gar\u0161u ce\u013cvedis, premium produkti un sezon\u0101lie akcenti.',
            price: 0,
          },
          {
            key: 'decor',
            title: 'Dekor\u0101cijas un atmosf\u0113ra',
            description: 'Letes noform\u0113jums, gaisma un interjera deta\u013cas.',
            price: 0,
          },
          {
            key: 'music',
            title: 'Pas\u0101kuma m\u016bzika un skan\u0113jums',
            description: 'Plejlistes atl\u0101se, dz\u012bv\u0101s m\u016bzikas akcenti un form\u0101tam atbilsto\u0161s ska\u0146as fons.',
            price: 0,
          },
          {
            key: 'logistics',
            title: 'Lo\u0123istika un serviss',
            description: 'B\u0101rme\u0146i, pav\u0101ri, viesm\u012b\u013ci, laika pl\u0101no\u0161ana un koordin\u0101cija.',
            price: 0,
          },
        ],
      },
      ...buildServiceSectionBlocks('lv'),
    ],
  }

  let homeId: string | number

  if (existing.docs.length > 0) {
    homeId = existing.docs[0].id
    await payload.update({
      collection: 'pages',
      id: homeId,
      data: homeData,
    })
    console.log('Homepage updated.')
  } else {
    const created = await payload.create({
      collection: 'pages',
      data: homeData,
    })
    homeId = created.id
    console.log('Homepage created.')
  }

  // Always write ru/en by document id — find({ locale }) can return 0 rows on fresh DB,
  // which previously skipped localized layout entirely.
  console.log('Seeding Russian locale...')
  await payload.update({
    collection: 'pages',
    id: homeId,
    locale: 'ru',
    data: {
      title: '\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430',
      layout: getLayoutForLocale('ru'),
    },
  })
  console.log('Russian locale updated.')

  console.log('Seeding English locale...')
  await payload.update({
    collection: 'pages',
    id: homeId,
    locale: 'en',
    data: {
      title: 'Homepage',
      layout: getLayoutForLocale('en'),
    },
  })
  console.log('English locale updated.')

  console.log('Seed complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
