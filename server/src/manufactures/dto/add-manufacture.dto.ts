import { IsNotEmpty, IsString } from 'class-validator';

export class AddManufactureDto {
	@IsString()
	@IsNotEmpty()
	name: string;
}
