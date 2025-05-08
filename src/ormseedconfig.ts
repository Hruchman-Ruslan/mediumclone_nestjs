import ormconfig from '@app/ormconfig';

const ormSeedConfig = {
  ...ormconfig,
  migrations: ['src/seeds/*.ts'],
  // cli: { migrationsDir: 'src/seeds' },
};

export default ormSeedConfig;
