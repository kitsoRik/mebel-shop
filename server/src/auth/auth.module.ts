import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UserRepository } from './user/user.repository';
import { AuthService } from './auth.service';
import { SessionRepository } from './session/session.respository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
	imports: [
		TypeOrmModule.forFeature([SessionRepository, UserRepository]),
		JwtModule.register({
			secret: 'secret',
			signOptions: {
				expiresIn: 3600	,
			},
		}),
		PassportModule.register({
			defaultStrategy: 'jwt',
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy],
	exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
