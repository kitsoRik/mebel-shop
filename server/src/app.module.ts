import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { ManufacturesModule } from './manufactures/manufactures.module';
@Module({
	imports: [DatabaseModule, AuthModule, ProductsModule, ManufacturesModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
