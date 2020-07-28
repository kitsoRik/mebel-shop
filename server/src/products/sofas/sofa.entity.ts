import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sofa extends BaseEntity {
	@PrimaryGeneratedColumn('increment', { type: 'int' })
	id: number;

	@Column({})
	name: string;

	@Column({ type: 'int', default: -1 })
	manufacture: number;

	@Column({ type: 'text', array: true })
	photos: string[];
}
