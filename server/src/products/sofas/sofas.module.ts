import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SofaRepository } from './sofa.repository';
import { SofasController } from './sofas.controller';
import { SofasService } from './sofas.service';

@Module({
	imports: [TypeOrmModule.forFeature([SofaRepository])],
	controllers: [SofasController],
	providers: [SofasService],
})
export class SofasModule {}
