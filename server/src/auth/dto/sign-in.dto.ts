import { IsBoolean, IsString } from 'class-validator';

export class SignInDto {
	@IsString()
	username: string;

	@IsString()
	password: string;

	@IsBoolean()
	remember: boolean;
}
