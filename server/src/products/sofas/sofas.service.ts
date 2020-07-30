import { Injectable } from '@nestjs/common';
import { AddSofaDto } from './dto/add-sofa.dto';
import { GetSofasDto } from './dto/get-sofas.dto';
import { SaveSofaDto } from './dto/save-sofa.dto';
import { Sofa } from './sofa.entity';
import { SofaRepository } from './sofa.repository';
import { GetPopularSofasDto } from './dto/get-popular-sofas.dto';

type Photo = {
	filename: '1033731d3a20c213b193a221238192f161c262820113c31223cb3b353b.jpeg';
};

@Injectable()
export class SofasService {
	constructor(private sofaRepository: SofaRepository) {}

	async addSofa(addSofaDto: AddSofaDto, photos: Photo[]): Promise<Sofa> {
		return await this.sofaRepository.addSofa(
			addSofaDto,
			photos.map(p => p.filename),
		);
	}

	async getSofas(
		getSofasDto: GetSofasDto,
	): Promise<{ sofas: Sofa[]; count: number }> {
		const [sofas, count] = await this.sofaRepository.getSofas(getSofasDto);
		return {
			sofas,
			count,
		};
	}

	async getPopularSofas(
		getPopularSofasDto: GetPopularSofasDto,
	): Promise<Sofa[]> {
		const sofas = await this.sofaRepository.getPopularSofas(
			getPopularSofasDto,
		);
		return sofas;
	}

	async getSofa(id: number): Promise<Sofa> {
		return this.sofaRepository.getSofa(id);
	}

	async saveSofa(
		id: number,
		saveSofaDto: SaveSofaDto,
		photos: Photo[],
	): Promise<Sofa> {
		const sofa = await this.sofaRepository.saveSofa(
			id,
			saveSofaDto,
			photos.map(p => p.filename),
		);
		return sofa;
	}
}
