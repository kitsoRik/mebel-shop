import { Transform } from 'class-transformer';
import { IsNumber, Validate, IsPositive } from 'class-validator';

export class GetProductsDto {
	@Transform(v => +v)
	@IsNumber()
	@Validate(a => a >= 0)
	offset: number;

	@Transform(v => +v)
	@IsNumber()
	@IsPositive()
	limit: number;
}
