import { Transform } from 'class-transformer';
import { IsNumber, IsPositive, Validate } from 'class-validator';

export class GetSofasDto {
	@Transform(v => +v)
	@IsNumber()
	@Validate(a => a >= 0)
	offset: number;

	@Transform(v => +v)
	@IsNumber()
	@IsPositive()
	limit: number;
}
