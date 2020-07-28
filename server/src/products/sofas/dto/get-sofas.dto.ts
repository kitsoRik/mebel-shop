import { Transform } from 'class-transformer';
import { IsNumber, IsPositive, Validate, IsJSON } from 'class-validator';

export class GetSofasDto {
	@Transform(v => +v)
	@IsNumber()
	@Validate(a => a >= 0)
	offset: number;

	@Transform(v => +v)
	@IsNumber()
	@IsPositive()
	limit: number;

	@Validate(s => !!JSON.parse(s))
	@Transform(JSON.parse)
	filter: { name?: string };
}
