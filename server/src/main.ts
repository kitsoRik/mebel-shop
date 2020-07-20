import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
	const serveConfig: any = config.get('server');
	const logger = new Logger('bootstrap');

	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin: (origin, cb) => {
			cb(null, true);
		},
		credentials: true,
	});
	app.setGlobalPrefix('api');
	app.use(cookieParser());

	const port = process.env.PORT || serveConfig.port;
	await app.listen(port);
	logger.log(`Application running in ${port} port`);
}
bootstrap();
