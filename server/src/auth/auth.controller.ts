import {
	Body,
	Controller,
	Post,
	Req,
	Res,
	UseGuards,
	ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { User } from './user/user.entity';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('/')
	@UseGuards(AuthGuard())
	async auth(@Req() req: Request): Promise<User> {
		return await this.authService.auth(req);
	}

	@Post('/signIn')
	async signIn(
		@Body(ValidationPipe) signInDto: SignInDto,
	): Promise<{ user: User; accessToken: string }> {
		return await this.authService.signIn(signInDto);
	}
}
