import { Transform } from 'class-transformer';
import {
	IsNumber,
	IsNumberString,
	IsPositive,
	IsString,
	Validate,
} from 'class-validator';

export class GetMinManufacturesDto {
	@IsString()
	name: string;

	@Transform(v => +v)
	@IsNumber()
	@IsPositive()
	limit: number;
}
