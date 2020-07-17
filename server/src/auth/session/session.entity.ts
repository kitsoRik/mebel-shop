import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Session extends BaseEntity {
	@PrimaryGeneratedColumn('increment', { type: 'int' })
	id: number;

	@Column()
	userId: number;

	@Column()
	sesid: string;
}
