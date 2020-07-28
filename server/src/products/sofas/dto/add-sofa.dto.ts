import { IsNotEmpty, IsString, IsNumberString, IsArray } from 'class-validator';
import { Transform } from 'class-transformer';

export class AddSofaDto {
	@IsNumberString()
	@Transform(a => +a)
	manufacture: number;

	@IsString()
	@IsNotEmpty()
	name: string;
}
