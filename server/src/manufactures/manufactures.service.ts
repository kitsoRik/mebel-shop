import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddManufactureDto } from './dto/add-manufacture.dto';
import { GetManufacturesDto } from './dto/get-manufactures.dto';
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
}
