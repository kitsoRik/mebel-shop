import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../auth/auth.module';
import { SofaRepository } from './sofa.repository';
import { SofasController } from './sofas.controller';
import { SofasService } from './sofas.service';

@Module({
	imports: [TypeOrmModule.forFeature([SofaRepository]), AuthModule],
	controllers: [SofasController],
	providers: [SofasService],
})
export class SofasModule {}
