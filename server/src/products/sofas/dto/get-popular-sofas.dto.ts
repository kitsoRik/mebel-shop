import { Transform } from 'class-transformer';
import { IsNumber, IsPositive } from 'class-validator';

export class GetPopularSofasDto {
	@Transform(v => +v)
	@IsNumber()
	@IsPositive()
	limit: number;
}
