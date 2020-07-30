import { Transform } from 'class-transformer';
import {
	IsNumber,
	IsPositive,
	Validate,
	IsJSON,
	IsOptional,
} from 'class-validator';
import { GetSofasFilter } from '@mebel-shop/data-objects';

export class GetSofasDto {
	@Transform(v => +v)
	@IsNumber()
	@Validate(a => a >= 0)
	offset: number;

	@Transform(v => +v)
	@IsNumber()
	@IsPositive()
	limit: number;

	@IsOptional()
	@Transform(a => {
		try {
			return JSON.parse(a);
		} catch (e) {
			return {};
		}
	})
	filterAdmin?: { name?: string; manufacture?: number };

	@Transform(a => {
		try {
			return JSON.parse(a);
		} catch (e) {
			return {};
		}
	})
	filter?: GetSofasFilter;
}
