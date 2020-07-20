import {
	BadRequestException,
	Body,
	Controller,
	Get,
	Param,
	Post,
	Put,
	Query,
	ValidationPipe,
} from '@nestjs/common';
import { Sofa } from './sofa.entity';
import { SofasService } from './sofas.service';
import { AddSofaDto } from './dto/add-sofa.dto';
import { AccessAdmin } from '../../auth/user/users.decorator';
import { GetSofasDto } from './dto/get-sofas.dto';
import { SaveManufacturesDto } from '../../manufactures/dto/save-manufactures.dto';
import { SaveSofaDto } from './dto/save-sofa.dto';

@Controller('sofas')
export class SofasController {
	constructor(private sofasService: SofasService) {}

	@Post('/')
	@AccessAdmin()
	async addSofa(@Body() addSofaDto: AddSofaDto): Promise<{ sofa: Sofa }> {
		const sofa = await this.sofasService.addSofa(addSofaDto);

		return { sofa };
	}

	@Get('/')
	@AccessAdmin()
	getManufactures(
		@Query(ValidationPipe) getSofas: GetSofasDto,
	): Promise<{ sofas: Sofa[]; count: number }> {
		return this.sofasService.getSofas(getSofas);
	}

	@Put('/:id')
	@AccessAdmin()
	async saveManufacture(
		@Param('id') id: string,
		@Body(ValidationPipe) saveSofaDto: SaveSofaDto,
	): Promise<{ sofa: Sofa }> {
		if (isNaN(+id)) {
			throw new BadRequestException(
				`id must be number, but got "${id}""`,
			);
		}
		const sofa = await this.sofasService.saveSofa(+id, saveSofaDto);
		return { sofa };
	}
}
