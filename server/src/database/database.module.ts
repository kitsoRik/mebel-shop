import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mongodb',
			url: 'mongodb://localhost:27017/mebel-shop',
			entities: [join(__dirname, '/../**/**.entity.{ts,js}')],
			synchronize: true,
			useNewUrlParser: true,
			logging: true,
		}),
	],
})
export class DatabaseModule {}
