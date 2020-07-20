import { EntityRepository, Repository } from 'typeorm';
import { Sofa } from './sofa.entity';
import { AddSofaDto } from './dto/add-sofa.dto';
import { GetSofasDto } from './dto/get-sofas.dto';
import { SaveSofaDto } from './dto/save-sofa.dto';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Sofa)
export class SofaRepository extends Repository<Sofa> {
	async addSofa(addSofaDto: AddSofaDto): Promise<Sofa> {
		const { name } = addSofaDto;

		const sofa = this.create();

		sofa.name = name;

		return await sofa.save();
	}

	async getSofas({ offset, limit }: GetSofasDto): Promise<[Sofa[], number]> {
		const query = this.createQueryBuilder('sofas')
			.skip(offset)
			.limit(limit);
		const result = await query.getManyAndCount();

		return result;
	}

	async saveSofa(id: number, saveSofaDto: SaveSofaDto): Promise<Sofa> {
		const sofa = await this.findOne({ id });

		if (!sofa) {
			throw new NotFoundException(`Sofa by id = "${id}" not found`);
		}

		const { name } = saveSofaDto;

		sofa.name = name;

		return sofa.save();
	}
}
