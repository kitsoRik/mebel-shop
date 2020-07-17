import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UserRepository } from './user/user.repository';
import { AuthService } from './auth.service';
import { SessionRepository } from './session/session.respository';

@Module({
	imports: [TypeOrmModule.forFeature([SessionRepository, UserRepository])],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}
