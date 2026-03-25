import pg from 'pg'

const { Client } = pg

async function fixMigrations() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  })

  await client.connect()

  console.log('Checking payload_migrations table...')
  const existing = await client.query(`SELECT name FROM payload_migrations`)
  console.log('Existing migrations:', existing.rows.map((r: any) => r.name))

  const migrationsToMark = [
    '20260324_123448',
    '20260324_161245',
    '20260324_170500_add_event_builder_partners_team',
  ]

  for (const name of migrationsToMark) {
    const alreadyRecorded = existing.rows.some((r: any) => r.name === name)
    if (!alreadyRecorded) {
      console.log(`Marking ${name} as applied...`)
      await client.query(`INSERT INTO payload_migrations (name, batch) VALUES ($1, 1)`, [name])
      console.log(`Done: ${name}`)
    } else {
      console.log(`Already recorded: ${name}`)
    }
  }

  await client.end()
  process.exit(0)
}

fixMigrations().catch((err) => {
  console.error(err)
  process.exit(1)
})
