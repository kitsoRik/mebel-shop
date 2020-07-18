import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './roles.guard';

export const AccessAdmin = (): MethodDecorator => {
	return applyDecorators(UseGuards(AuthGuard(), new RolesGuard(['admin'])));
};
