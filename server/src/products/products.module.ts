import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { SofasModule } from './sofas/sofas.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [SofasModule, DatabaseModule]
})
export class ProductsModule {}
