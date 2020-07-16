import { Controller, Get } from '@nestjs/common';
import { Sofa } from './sofa.entity';
import { SofasService } from './sofas.service';

@Controller('/products/sofas')
export class SofasController {
	constructor(private sofasService: SofasService) {}

	@Get('/')
	getSofas(): Promise<Sofa> {
		return this.sofasService.addSofa();
	}
}
