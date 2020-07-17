import { Injectable, NotFoundException } from '@nestjs/common';
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
	) {}

	async auth(req: Request): Promise<User> {
		const { sesid } = req.cookies;
		if (!sesid) return;

		const session = await this.sessionRepository.getSessionBySesid(sesid);

		if (!session) return;

		const user = await this.userRepository.getUserById(session.userId);

		return user;
	}

	async signIn(signInDto: SignInDto, res: Response): Promise<User> {
		const user = await this.userRepository.signIn(signInDto);
		if (!user) {
			throw new NotFoundException();
		}
		if (signInDto.remember) {
			const session = await this.sessionRepository.createSession(user.id);
			res.cookie('sesid', session.sesid);
		}
		return user;
	}
}
