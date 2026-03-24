import { getPayload } from 'payload'
import payloadConfig from '../payload.config'

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
    ],
  }

  if (existing.docs.length > 0) {
    await payload.update({
      collection: 'pages',
      id: existing.docs[0].id,
      data: homeData,
    })
    console.log('Homepage updated.')
  } else {
    await payload.create({
      collection: 'pages',
      data: homeData,
    })
    console.log('Homepage created.')
  }

  console.log('Seed complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
