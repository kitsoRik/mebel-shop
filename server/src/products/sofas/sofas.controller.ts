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
import { GetPopularSofasDto } from './dto/get-popular-sofas.dto';
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
		@Body(new ValidationPipe({ transform: true })) addSofaDto: AddSofaDto,
		@UploadedFiles() photos,
	): Promise<{ sofa: Sofa }> {
		const sofa = await this.sofasService.addSofa(addSofaDto, photos);

		return { sofa };
	}

	@Get('/')
	getSofas(
		@Query(new ValidationPipe({ transform: true })) getSofas: GetSofasDto,
	): Promise<{ sofas: Sofa[]; count: number }> {
		return this.sofasService.getSofas(getSofas);
	}

	@Get('/popular/')
	getPopularSofas(
		@Query(new ValidationPipe({ transform: true }))
		getPopularSofas: GetPopularSofasDto,
	): Promise<Sofa[]> {
		return this.sofasService.getPopularSofas(getPopularSofas);
	}

	@Get('/:id')
	getSofa(@Param('id') id: string): Promise<Sofa> {
		if (isNaN(+id)) {
			throw new BadRequestException(
				`id must be number, but got "${id}""`,
			);
		}
		return this.sofasService.getSofa(+id);
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
	async saveManufacture(
		@Param('id') id: string,
		@Body(new ValidationPipe({ transform: true })) saveSofaDto: SaveSofaDto,
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
