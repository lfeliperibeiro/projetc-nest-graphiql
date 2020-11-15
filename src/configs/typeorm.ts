import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.NODE_ENV ===  'test' ? 'mongodb://localhost:27017/project-graphql-test' : 'mongodb://localhost:27017/project-graphql',
  synchronize: true,
  autoLoadEntities: true,
  useUnifiedTopology: true,
}