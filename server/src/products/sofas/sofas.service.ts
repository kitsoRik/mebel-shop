import { Injectable } from '@nestjs/common';
import { AddSofaDto } from './dto/add-sofa.dto';
import { GetSofasDto } from './dto/get-sofas.dto';
import { SaveSofaDto } from './dto/save-sofa.dto';
import { Sofa } from './sofa.entity';
import { SofaRepository } from './sofa.repository';

@Injectable()
export class SofasService {
	constructor(private sofaRepository: SofaRepository) {}

	async addSofa(addSofaDto: AddSofaDto): Promise<Sofa> {
		return await this.sofaRepository.addSofa(addSofaDto);
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

	async saveSofa(id: number, saveSofaDto: SaveSofaDto): Promise<Sofa> {
		const sofa = await this.sofaRepository.saveSofa(id, saveSofaDto);
		return sofa;
	}
}
