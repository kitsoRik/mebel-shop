import {
	BaseEntity,
	Column,
	Entity,
	PrimaryGeneratedColumn,
	OneToMany,
} from 'typeorm';
import { Sofa } from 'src/products/sofas/sofa.entity';

@Entity()
export class Manufacture extends BaseEntity {
	@PrimaryGeneratedColumn('increment', { type: 'int' })
	id: number;

	@Column()
	name: string;

	@OneToMany(
		type => Sofa,
		sofa => sofa.manufacture,
		{ eager: false },
	)
	sofas: Sofa[];
}
