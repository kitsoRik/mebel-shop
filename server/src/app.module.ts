import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { ManufacturesModule } from './manufactures/manufactures.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
	imports: [
		DatabaseModule,
		AuthModule,
		ProductsModule,
		ManufacturesModule,
		ServeStaticModule.forRoot({
			serveRoot: '/static',
			rootPath: join(__dirname, '..', 'static'),
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
