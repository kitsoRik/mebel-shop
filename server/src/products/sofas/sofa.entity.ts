import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity({
	name: 'sofas',
})
export class Sofa extends BaseEntity {
	@ObjectIdColumn()
	id: string;

	@Column({})
	name: string;
}
