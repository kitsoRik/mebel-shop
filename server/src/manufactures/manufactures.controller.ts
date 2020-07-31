import {
	BadRequestException,
	Body,
	Controller,
	Get,
	Param,
	Post,
	Put,
	Query,
	Req,
	UseGuards,
	ValidationPipe,
} from '@nestjs/common';
import { Transform } from 'class-transformer';
import { AccessAdmin } from '../auth/user/users.decorator';
import { AddManufactureDto } from './dto/add-manufacture.dto';
import { GetManufacturesDto } from './dto/get-manufactures.dto';
import { GetMinManufacturesDto } from './dto/get-min-manufactores.dto';
import { SaveManufacturesDto } from './dto/save-manufactures.dto';
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

	@Get('/popular')
	getPopularManufactures(
		@Query(ValidationPipe) getManufacturesDto: GetManufacturesDto,
	): Promise<{ manufactures: Manufacture[]; count: number }> {
		return this.manufacturesService.getManufactures(getManufacturesDto);
	}

	@Get('/min/')
	@AccessAdmin()
	async getMinManufactures(
		@Query(ValidationPipe) getMinManufacturesDto: GetMinManufacturesDto,
	): Promise<{ manufactures: Manufacture[] }> {
		const manufactures = await this.manufacturesService.getMinManufactures(
			getMinManufacturesDto,
		);

		return { manufactures };
	}

	@Get('/:id')
	async getManufacture(
		@Param('id') id: string,
	): Promise<{ manufacture: Manufacture }> {
		if (isNaN(+id))
			throw new BadRequestException(
				`id must be number, but got "${id}""`,
			);
		const manufacture = await this.manufacturesService.getManufacture(+id);
		return { manufacture };
	}

	@Put('/:id')
	@AccessAdmin()
	async saveManufacture(
		@Param('id') id: string,
		@Body(ValidationPipe) saveManufacturesDto: SaveManufacturesDto,
	): Promise<{ manufacture: Manufacture }> {
		if (isNaN(+id))
			throw new BadRequestException(
				`id must be number, but got "${id}""`,
			);
		const manufacture = await this.manufacturesService.saveManufacture(
			+id,
			saveManufacturesDto,
		);
		return { manufacture };
	}
}
