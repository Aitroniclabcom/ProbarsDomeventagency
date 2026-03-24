import * as migration_20260324_123448 from './20260324_123448'
import * as migration_20260324_170500_add_event_builder_partners_team from './20260324_170500_add_event_builder_partners_team'

export const migrations = [
  {
    up: migration_20260324_123448.up,
    down: migration_20260324_123448.down,
    name: '20260324_123448',
  },
  {
    up: migration_20260324_170500_add_event_builder_partners_team.up,
    down: migration_20260324_170500_add_event_builder_partners_team.down,
    name: '20260324_170500_add_event_builder_partners_team',
  },
]
