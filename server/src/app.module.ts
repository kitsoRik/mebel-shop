import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
@Module({
	imports: [ProductsModule, DatabaseModule, AuthModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
