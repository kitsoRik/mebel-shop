import { Module } from '@nestjs/common';
import { ManufactureController } from './manufacture.controller';
import { ManufactureService } from './manufacture.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ManufactureRepository } from './manufacture.repository';
import { SofaRepository } from 'src/products/sofas/sofa.repository';

@Module({
	imports: [
		TypeOrmModule.forFeature([ManufactureRepository, SofaRepository]),
		AuthModule,
	],
	controllers: [ManufactureController],
	providers: [ManufactureService],
})
export class ManufactureModule {}
