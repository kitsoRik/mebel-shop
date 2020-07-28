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
	UseInterceptors,
	UploadedFiles,
	UsePipes,
} from '@nestjs/common';
import { Sofa } from './sofa.entity';
import { SofasService } from './sofas.service';
import { AddSofaDto } from './dto/add-sofa.dto';
import { AccessAdmin } from '../../auth/user/users.decorator';
import { GetSofasDto } from './dto/get-sofas.dto';
import { SaveManufacturesDto } from '../../manufactures/dto/save-manufactures.dto';
import { SaveSofaDto } from './dto/save-sofa.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';

@Controller('sofas')
export class SofasController {
	constructor(private sofasService: SofasService) {}

	@Post('/')
	@AccessAdmin()
	@UseInterceptors(
		FilesInterceptor('photos', 5, {
			storage: diskStorage({
				destination: './static/sofas/photos',
				filename: (req, file, cb) => {
					const randomName = Array(32)
						.fill(null)
						.map(() => Math.round(Math.random() * 64).toString(16))
						.join('');
					cb(null, `${randomName}${extname(file.originalname)}`);
				},
			}),
		}),
	)
	async addSofa(
		@Body() addSofaDto: AddSofaDto,
		@UploadedFiles() photos,
	): Promise<{ sofa: Sofa }> {
		const sofa = await this.sofasService.addSofa(addSofaDto, photos);

		return { sofa };
	}

	@Get('/')
	@AccessAdmin()
	getManufactures(
		@Query(new ValidationPipe({ transform: true })) getSofas: GetSofasDto,
	): Promise<{ sofas: Sofa[]; count: number }> {
		return this.sofasService.getSofas(getSofas);
	}

	@Put('/:id')
	@AccessAdmin()
	@UseInterceptors(
		FilesInterceptor('photos', 5, {
			storage: diskStorage({
				destination: './static/sofas/photos',
				filename: (req, file, cb) => {
					const randomName = Array(32)
						.fill(null)
						.map(() => Math.round(Math.random() * 64).toString(16))
						.join('');

					cb(null, `${randomName}${extname(file.originalname)}`);
				},
			}),
		}),
	)
	@UsePipes(ValidationPipe)
	async saveManufacture(
		@Param('id') id: string,
		@Body() saveSofaDto: SaveSofaDto,
		@UploadedFiles() photos,
	): Promise<{ sofa: Sofa }> {
		if (isNaN(+id)) {
			throw new BadRequestException(
				`id must be number, but got "${id}""`,
			);
		}
		const sofa = await this.sofasService.saveSofa(+id, saveSofaDto, photos);
		return { sofa };
	}
}
