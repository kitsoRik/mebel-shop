import { Module } from '@nestjs/common';
import { ManufacturesService } from './manufactures.service';
import { ManufacturesController } from './manufactures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManufactureRepository } from './manufacture/manufacture.repository';

@Module({
	imports: [TypeOrmModule.forFeature([ManufactureRepository])],
	providers: [ManufacturesService],
	controllers: [ManufacturesController],
})
export class ManufacturesModule {}
