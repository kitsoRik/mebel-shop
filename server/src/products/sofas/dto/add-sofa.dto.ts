import { IsNotEmpty, IsString } from 'class-validator';

export class AddSofaDto {
	@IsString()
	@IsNotEmpty()
	name: string;
}
