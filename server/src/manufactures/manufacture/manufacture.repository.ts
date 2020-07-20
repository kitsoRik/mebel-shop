import { EntityRepository, Repository } from 'typeorm';
import { SaveManufacturesDto } from '../dto/save-manufactures.dto';
import { Manufacture } from './manufacture.entity';

@EntityRepository(Manufacture)
export class ManufactureRepository extends Repository<Manufacture> {
	async createManufacture(name: string): Promise<Manufacture> {
		const manufacture = new Manufacture();

		manufacture.name = name;

		return manufacture.save();
	}

	async getManufactures(
		offset: number,
		limit: number,
	): Promise<[Manufacture[], number]> {
		const query = this.createQueryBuilder('manufactures')
			.skip(offset)
			.limit(limit);
		this;
		const result = await query.getManyAndCount();

		return result;
	}

	async getMinManufactures(
		name: string,
		limit: number,
	): Promise<Manufacture[]> {
		const query = this.createQueryBuilder('manufactures')
			.where(`name='${name}'`)
			.limit(limit);
		const result = await query.getMany();

		return result;
	}

	async getManufactureById(id: number): Promise<Manufacture> {
		return this.findOne({ id });
	}

	async saveManufactureById(
		id: number,
		saveManufacturesDto: SaveManufacturesDto,
	): Promise<Manufacture> {
		const { name } = saveManufacturesDto;
		const manufacture = await this.findOne({ id });

		manufacture.name = name;

		return await manufacture.save();
	}
}
