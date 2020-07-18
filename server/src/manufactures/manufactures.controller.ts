import {
	Body,
	Controller,
	Get,
	Post,
	Put,
	Query,
	Req,
	UseGuards,
	ValidationPipe,
} from '@nestjs/common';
import { AccessAdmin } from '../auth/user/users.decorator';
import { AddManufactureDto } from './dto/add-manufacture.dto';
import { GetManufacturesDto } from './dto/get-manufactures.dto';
import { Manufacture } from './manufacture/manufacture.entity';
import { ManufacturesService } from './manufactures.service';

@Controller('manufactures')
export class ManufacturesController {
	constructor(private manufacturesService: ManufacturesService) {}

	@Post('/')
	@AccessAdmin()
	addManufacture(
		@Body(ValidationPipe) addManufactureDto: AddManufactureDto,
	): Promise<Manufacture> {
		return this.manufacturesService.addManufacture(addManufactureDto);
	}

	@Get('/')
	@AccessAdmin()
	getManufactures(
		@Query(ValidationPipe) getManufacturesDto: GetManufacturesDto,
	): Promise<{ manufactures: Manufacture[]; count: number }> {
		return this.manufacturesService.getManufactures(getManufacturesDto);
	}
}
