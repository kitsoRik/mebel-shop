import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddManufactureDto } from './dto/add-manufacture.dto';
import { GetManufacturesDto } from './dto/get-manufactures.dto';
import { GetMinManufacturesDto } from './dto/get-min-manufactores.dto';
import { SaveManufacturesDto } from './dto/save-manufactures.dto';
import { Manufacture } from './manufacture/manufacture.entity';
import { ManufactureRepository } from './manufacture/manufacture.repository';

@Injectable()
export class ManufacturesService {
	constructor(
		@InjectRepository(ManufactureRepository)
		private manufactureRepository: ManufactureRepository,
	) {}

	async addManufacture(
		addManufactureDto: AddManufactureDto,
	): Promise<Manufacture> {
		const { name } = addManufactureDto;
		return this.manufactureRepository.createManufacture(name);
	}

	async getManufactures(
		getManufacturesDto: GetManufacturesDto,
	): Promise<{ manufactures: Manufacture[]; count: number }> {
		const { offset, limit } = getManufacturesDto;
		const [
			manufactures,
			count,
		] = await this.manufactureRepository.getManufactures(offset, limit);

		return { manufactures, count };
	}

	async getMinManufactures(
		getMinManufacturesDto: GetMinManufacturesDto,
	): Promise<Manufacture[]> {
		const { name, limit } = getMinManufacturesDto;
		const manufactures = await this.manufactureRepository.getMinManufactures(
			name,
			limit,
		);

		return manufactures;
	}

	async getManufacture(id: number): Promise<Manufacture> {
		return this.manufactureRepository.getManufactureById(id);
	}

	async saveManufacture(
		id: number,
		saveManufacturesDto: SaveManufacturesDto,
	): Promise<Manufacture> {
		return this.manufactureRepository.saveManufactureById(
			id,
			saveManufacturesDto,
		);
	}
}
