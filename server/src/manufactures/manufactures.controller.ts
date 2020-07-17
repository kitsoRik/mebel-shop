import {
	Body,
	Controller,
	Get,
	Post,
	Put,
	Query,
	ValidationPipe,
} from '@nestjs/common';
import { AddManufactureDto } from './dto/add-manufacture.dto';
import { GetManufacturesDto } from './dto/get-manufactures.dto';
import { Manufacture } from './manufacture/manufacture.entity';
import { ManufacturesService } from './manufactures.service';

@Controller('manufactures')
export class ManufacturesController {
	constructor(private manufacturesService: ManufacturesService) {}

	@Post('/')
	addManufacture(
		@Body(ValidationPipe) addManufactureDto: AddManufactureDto,
	): Promise<Manufacture> {
		return this.manufacturesService.addManufacture(addManufactureDto);
	}

	@Get('/')
	getManufactures(
		@Query(ValidationPipe) getManufacturesDto: GetManufacturesDto,
	): Promise<{ manufactures: Manufacture[]; count: number }> {
		return this.manufacturesService.getManufactures(getManufacturesDto);
	}
}
