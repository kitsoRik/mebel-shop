import { EntityRepository, Repository } from 'typeorm';
import { Session } from './session.entity';
import * as uuid from 'uuid';

@EntityRepository(Session)
export class SessionRepository extends Repository<Session> {
	createSession(userId: number): Promise<Session> {
		const session = new Session();

		session.userId = userId;
		session.sesid = uuid.v4();

		return session.save();
	}

	getSessionBySesid(sesid: string): Promise<Session> {
		return this.findOne({ sesid });
	}
}
