import {
	BaseEntity,
	Column,
	Entity,
	PrimaryGeneratedColumn,
	OneToOne,
	ManyToOne,
	JoinTable,
} from 'typeorm';
import { Manufacture } from 'src/manufactures/manufacture/manufacture.entity';
import { ISofaCharacteristics } from '@mebel-shop/data-objects';

@Entity()
export class Sofa extends BaseEntity {
	@PrimaryGeneratedColumn('increment', { type: 'int' })
	id: number;

	@ManyToOne(
		type => Manufacture,
		manufacture => manufacture.sofas,
		{ eager: true, cascade: true },
	)
	manufacture: Manufacture;

	@Column()
	manufactureId: number;

	@Column({})
	name: string;

	@Column({ type: 'float' })
	price: number;

	@Column({ type: 'text' })
	description: string;

	@Column({ type: 'json' })
	characteristics: ISofaCharacteristics;

	@Column({ type: 'text', array: true })
	photos: string[];
}
