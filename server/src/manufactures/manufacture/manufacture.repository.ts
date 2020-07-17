import { EntityRepository, Repository } from 'typeorm';
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
		this
		const result = await query.getManyAndCount();

		return result;
	}
}
