import { Transform } from 'class-transformer';
import { IsNumber, IsNumberString, IsPositive, Validate } from 'class-validator';

export class GetManufacturesDto {
	@Transform(v => +v)
	@IsNumber()
	@Validate(a => a >= 0)
	offset: number;

	@Transform(v => +v)
	@IsNumber()
	@IsPositive()
	limit: number;
}
