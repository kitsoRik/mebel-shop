import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
