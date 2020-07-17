import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { SofasModule } from './sofas/sofas.module';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SofaRepository } from './sofas/sofa.repository';

@Module({
	controllers: [ProductsController],
	providers: [ProductsService],
	imports: [
		SofasModule,
		DatabaseModule,
		TypeOrmModule.forFeature([SofaRepository]),
	],
})
export class ProductsModule {}
