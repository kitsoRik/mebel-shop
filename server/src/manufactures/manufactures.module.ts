import { Module } from '@nestjs/common';
import { ManufacturesService } from './manufactures.service';
import { ManufacturesController } from './manufactures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManufactureRepository } from './manufacture/manufacture.repository';
import { AuthModule } from '../auth/auth.module';
import { ManufactureModule } from './manufacture/manufacture.module';

@Module({
	imports: [
		TypeOrmModule.forFeature([ManufactureRepository]),
		AuthModule,
		ManufactureModule,
	],
	providers: [ManufacturesService],
	controllers: [ManufacturesController],
})
export class ManufacturesModule {}
