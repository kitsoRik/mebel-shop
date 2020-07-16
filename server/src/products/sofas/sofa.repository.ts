import { EntityRepository, Repository } from 'typeorm';
import { Sofa } from './sofa.entity';
import * as uuid from 'uuid';

@EntityRepository(Sofa)
export class SofaRepository extends Repository<Sofa> {
	async addSofa(): Promise<Sofa> {
		return await this.create({ id: uuid.v4(), name: 'Qwe' }).save();
	}
}
