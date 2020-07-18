import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response } from 'express';
import { SignInDto } from './dto/sign-in.dto';
import { SessionRepository } from './session/session.respository';
import { User } from './user/user.entity';
import { UserRepository } from './user/user.repository';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserRepository)
		private userRepository: UserRepository,
		@InjectRepository(SessionRepository)
		private sessionRepository: SessionRepository,
		private jwtService: JwtService,
	) {}

	async auth(req: Request): Promise<User> {
		if (!req.user) throw new Error('req.user undefined');

		const { user }: any = req.user;

		return await this.userRepository.getUserById(user.id);
	}

	async signIn(
		signInDto: SignInDto,
	): Promise<{ accessToken: string; user: User }> {
		const user = await this.userRepository.signIn(signInDto);
		let accessToken = '';
		if (!user) {
			throw new NotFoundException();
		}
		const payload = {
			user: { id: user.id, role: 'admin', username: user.username },
		};
		accessToken = await this.jwtService.sign(payload);
		return { user, accessToken };
	}
}
