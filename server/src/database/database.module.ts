import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';
import * as readlineSync from 'readline-sync';

const {
	type,
	host,
	port,
	username,
	password,
	database,
	synchronize,
} = config.get('db');

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type,
			host: process.env.RDS_HOSTNAME || host,
			port: process.env.RDS_HOSTNAME || port,
			username: process.env.RDS_HOSTNAME || username,
			password:
				process.env.RDS_PASSWORD ||
				password ||
				readlineSync.question('Password for database: ', {
					hideEchoBack: true,
				}),
			database: process.env.RDS_DATABASE || database,
			entities: [__dirname + '/../**/*.entity.{js,ts}'],
			synchronize,
		}),
	],
})
export class DatabaseModule {}
