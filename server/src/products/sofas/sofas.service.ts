import { Injectable } from '@nestjs/common';
import { Sofa } from './sofa.entity';
import { SofaRepository } from './sofa.repository';

@Injectable()
export class SofasService {
	constructor(private sofaRepository: SofaRepository) {}

	async addSofa(): Promise<Sofa> {
		return await this.sofaRepository.addSofa();
	}
}
