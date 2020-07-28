import { EntityRepository, Repository } from 'typeorm';
import { Sofa } from './sofa.entity';
import { AddSofaDto } from './dto/add-sofa.dto';
import { GetSofasDto } from './dto/get-sofas.dto';
import { SaveSofaDto } from './dto/save-sofa.dto';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Sofa)
export class SofaRepository extends Repository<Sofa> {
	async addSofa(addSofaDto: AddSofaDto, photoNames: string[]): Promise<Sofa> {
		const { name } = addSofaDto;

		const sofa = this.create();

		sofa.name = name;
		sofa.photos = photoNames;

		return await sofa.save();
	}

	async getSofas({
		offset,
		filter,
		limit,
	}: GetSofasDto): Promise<[Sofa[], number]> {
		const query = this.createQueryBuilder('sofas');

		if (filter.name)
			query.where('name LIKE :name', { name: `%${filter.name}%` });

		query.skip(offset).limit(limit);
		const result = await query.getManyAndCount();

		return result;
	}

	async saveSofa(
		id: number,
		saveSofaDto: SaveSofaDto,
		photoNames: string[],
	): Promise<Sofa> {
		const sofa = await this.findOne({ id });
		if (!sofa) {
			throw new NotFoundException(`Sofa by id = "${id}" not found`);
		}
		const { name, removedPhotos = [], manufacture } = saveSofaDto;
		if (removedPhotos)
			sofa.photos = sofa.photos.filter(p => !removedPhotos.includes(p));
		sofa.photos = [...sofa.photos, ...photoNames];
		sofa.name = name;
		sofa.manufacture = manufacture;

		return sofa.save();
	}
}
