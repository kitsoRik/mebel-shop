import {
	Body,
	Controller,
	Post,
	Req,
	Res,
	ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { User } from './user/user.entity';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('/')
	async auth(@Req() req: Request): Promise<User> {
		return this.authService.auth(req);
	}

	@Post('/signIn')
	async signIn(
		@Body(ValidationPipe) signInDto: SignInDto,
		@Res() res: Response,
	): Promise<User> {
		const user = await this.authService.signIn(signInDto, res);
		res.send(user);
		return user;
	}
}
