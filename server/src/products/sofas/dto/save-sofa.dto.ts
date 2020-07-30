import {
	IsNumberString,
	IsString,
	IsNumber,
	IsNotEmpty,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { ISofaCharacteristics } from '@mebel-shop/data-objects';

export class SaveSofaDto {
	@Transform(a => +a)
	manufacture: number;

	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	description: string;

	@Transform(a => +a)
	@IsNumber()
	price: number;

	@Transform(a => JSON.parse(a))
	characteristics: ISofaCharacteristics;

	@Transform(a => a ?? [])
	removedPhotos: string[];
}
