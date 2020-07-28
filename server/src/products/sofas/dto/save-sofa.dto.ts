import { IsNumberString, IsString, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class SaveSofaDto {
	@IsString()
	name: string;

	@Transform(a => a ?? [])
	removedPhotos: string[];

	@IsNumber()
	@Transform(a => +a)
	manufacture: number;
}
