import 'reflect-metadata';
import { DataSource, type DataSourceOptions } from 'typeorm';
import { Group } from './entity/Group.entity';
import { Student } from './entity/Student.entity';
import { User } from './entity/User.entity';
import { Course } from './entity/Course.entity';

const timeout = 30000;

const sqliteConfig: DataSourceOptions = {
  type: 'sqlite',
  database: process.env.DB ?? './db/vki-web.db',
  synchronize: process.env.NODE_ENV !== 'production',
  migrationsRun: process.env.NODE_ENV === 'production',
  logging: false,
  entities: [Student, Group, User, Course],
};

const postgresUrl = process.env.POSTGRES?.trim();
const isValidPostgresUrl = !!postgresUrl && /^postgres(?:ql)?:\/\//i.test(postgresUrl);

const config: DataSourceOptions = isValidPostgresUrl
  ? {
    type: 'postgres',
    url: postgresUrl,
    ssl: true,
    connectTimeoutMS: timeout,
    extra: {
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: timeout,
      query_timeout: timeout,
      idle_in_transaction_session_timeout: timeout,
    },
    synchronize: process.env.NODE_ENV !== 'production',
    migrationsRun: process.env.NODE_ENV === 'production',
    logging: false,
    entities: [Student, Group, User, Course],
  }
  : sqliteConfig;

let AppDataSource = new DataSource(config);

export const dbInit = async (): Promise<void> => {
  if (AppDataSource.isInitialized) {
    return;
  }

  try {
    await AppDataSource.initialize();
    console.log('AppDataSource.initialize');
  }
  catch (error) {
    console.error('AppDataSource initialization failed', error);

    if (isValidPostgresUrl) {
      console.log('Falling back to sqlite configuration');
      AppDataSource = new DataSource(sqliteConfig);

      await AppDataSource.initialize();
      console.log('AppDataSource fallback sqlite initialize');
      return;
    }

    throw error;
  }
};

// await dbInit();

export default AppDataSource;
export { AppDataSource };
