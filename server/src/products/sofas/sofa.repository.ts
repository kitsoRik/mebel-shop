import { EntityRepository, Repository } from 'typeorm';
import { Sofa } from './sofa.entity';
import { AddSofaDto } from './dto/add-sofa.dto';
import { GetSofasDto } from './dto/get-sofas.dto';
import { SaveSofaDto } from './dto/save-sofa.dto';
import { NotFoundException } from '@nestjs/common';
import { ManufactureRepository } from 'src/manufactures/manufacture/manufacture.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Manufacture } from 'src/manufactures/manufacture/manufacture.entity';
import { GetPopularSofasDto } from './dto/get-popular-sofas.dto';

@EntityRepository(Sofa)
export class SofaRepository extends Repository<Sofa> {
	constructor(
		@InjectRepository(ManufactureRepository)
		private manufactureRepository: ManufactureRepository,
	) {
		super();
		console.log(this.manufactureRepository.getManufactureById);
	}

	async addSofa(addSofaDto: AddSofaDto, photoNames: string[]): Promise<Sofa> {
		const sofa = this.create();

		const m = new Manufacture();
		m.id = addSofaDto.manufacture;
		m.name = 'qwe';

		sofa.name = addSofaDto.name;
		sofa.manufacture = m;
		sofa.price = addSofaDto.price;
		sofa.description = addSofaDto.description;
		sofa.characteristics = addSofaDto.characteristics;
		sofa.photos = photoNames;

		return await sofa.save();
	}

	async getSofas({
		offset,
		filter,
		filterAdmin,
		limit,
	}: GetSofasDto): Promise<[Sofa[], number]> {
		const query = this.createQueryBuilder('sofa');

		if (filterAdmin) {
			if (filterAdmin.name)
				query.andWhere('name LIKE :name', {
					name: `%${filterAdmin.name}%`,
				});
			if (filterAdmin.manufacture && filterAdmin.manufacture !== -1)
				query.andWhere('sofa.manufactureId = :manufactureId', {
					manufactureId: filterAdmin.manufacture,
				});
		} else if (filter) {
			if (filter.minMaxWeight) {
				query.andWhere(
					"(sofa.characteristics ->> 'maxWeight')::int > :minMaxWeight",
					{
						minMaxWeight: filter.minMaxWeight,
					},
				);
			}
			if (filter.maxMaxWeight) {
				query.andWhere(
					"(sofa.characteristics ->> 'maxWeight')::int < :maxMaxWeight",
					{
						maxMaxWeight: filter.maxMaxWeight,
					},
				);
			}
			if (filter.minWidth) {
				query.andWhere(
					"(sofa.characteristics ->> 'width')::int > :minWidth",
					{
						minWidth: filter.minWidth,
					},
				);
			}
			if (filter.maxWidth) {
				query.andWhere(
					"(sofa.characteristics ->> 'width')::int < :maxWidth",
					{
						maxWidth: filter.maxWidth,
					},
				);
			}
			if (filter.minHeight) {
				query.andWhere(
					"(sofa.characteristics ->> 'height')::int > :minHeight",
					{
						minHeight: filter.minHeight,
					},
				);
			}
			if (filter.maxHeight) {
				query.andWhere(
					"(sofa.characteristics ->> 'height')::int < :maxHeight",
					{
						maxHeight: filter.maxHeight,
					},
				);
			}
			if (filter.minWeight) {
				query.andWhere(
					"(sofa.characteristics ->> 'weight')::int > :minWeight",
					{
						minWeight: filter.minWeight,
					},
				);
			}
			if (filter.maxWeight) {
				query.andWhere(
					"(sofa.characteristics ->> 'weight')::int < :maxWeight",
					{
						maxWeight: filter.maxWeight,
					},
				);
			}
			if (filter.minDepth) {
				query.andWhere(
					"(sofa.characteristics ->> 'depth')::int > :minDepth",
					{
						minDepth: filter.minDepth,
					},
				);
			}
			if (filter.maxDepth) {
				query.andWhere(
					"(sofa.characteristics ->> 'depth')::int < :maxDepth",
					{
						maxDepth: filter.maxDepth,
					},
				);
			}
		}

		query.relation('manufactures');
		query.offset(offset).limit(limit);
		const result = await query.getManyAndCount();
		return result;
	}

	async getPopularSofas({ limit }: GetPopularSofasDto): Promise<Sofa[]> {
		const query = this.createQueryBuilder('sofa');
		query.limit(limit);
		const result = await query.getMany();
		return result;
	}

	async getSofa(id: number): Promise<Sofa> {
		const query = this.createQueryBuilder('sofa');
		query.where('id = :id', { id });
		return await query.getOne();
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

		const { removedPhotos } = saveSofaDto;

		sofa.name = saveSofaDto.name;
		sofa.price = saveSofaDto.price;
		sofa.description = saveSofaDto.description;
		sofa.characteristics = saveSofaDto.characteristics;
		if (removedPhotos)
			sofa.photos = sofa.photos.filter(p => !removedPhotos.includes(p));
		sofa.photos = [...sofa.photos, ...photoNames];
		console.log(sofa.characteristics);
		return await sofa.save();
	}
}
