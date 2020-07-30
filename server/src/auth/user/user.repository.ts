import { EntityRepository, Repository } from 'typeorm';
import { SignInDto } from '../dto/sign-in.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
	constructor() {
		super();

		setTimeout(async () => {
			const user = await this.findOne({ username: 'admin' });
			if (!user) {
				const user = new User();
				user.username = 'admin';
				user.password = 'admin';
				user.save();
			}
		}, 0);
	}

	async signIn(signInDto: SignInDto): Promise<User> {
		const { username, password } = signInDto;

		const user = await this.findOne({ username, password });

		return user;
	}

	async getUserById(id: number): Promise<User> {
		return this.findOne({ id });
	}
}
