import * as migration_20260324_123448 from './20260324_123448';
import * as migration_20260324_161245 from './20260324_161245';
import * as migration_20260324_170500_add_event_builder_partners_team from './20260324_170500_add_event_builder_partners_team';
import * as migration_20260324_172133 from './20260324_172133';
import * as migration_20260324_191500_add_localization from './20260324_191500_add_localization';
import * as migration_20260325_053632 from './20260325_053632';

export const migrations = [
  {
    up: migration_20260324_123448.up,
    down: migration_20260324_123448.down,
    name: '20260324_123448',
  },
  {
    up: migration_20260324_161245.up,
    down: migration_20260324_161245.down,
    name: '20260324_161245',
  },
  {
    up: migration_20260324_170500_add_event_builder_partners_team.up,
    down: migration_20260324_170500_add_event_builder_partners_team.down,
    name: '20260324_170500_add_event_builder_partners_team',
  },
  {
    up: migration_20260324_172133.up,
    down: migration_20260324_172133.down,
    name: '20260324_172133',
  },
  {
    up: migration_20260324_191500_add_localization.up,
    down: migration_20260324_191500_add_localization.down,
    name: '20260324_191500_add_localization',
  },
  {
    up: migration_20260325_053632.up,
    down: migration_20260325_053632.down,
    name: '20260325_053632'
  },
];
