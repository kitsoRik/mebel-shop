import {
	BaseEntity,
	Column,
	Entity,
	ObjectIdColumn,
	PrimaryColumn,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Manufacture extends BaseEntity {
	@PrimaryGeneratedColumn('increment', { type: 'int' })
	id: number;

	@Column()
	name: string;
}
