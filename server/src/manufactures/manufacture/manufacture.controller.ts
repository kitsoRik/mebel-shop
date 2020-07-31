import {
	Controller,
	Get,
	Param,
	BadRequestException,
	Query,
	ValidationPipe,
} from '@nestjs/common';
import { GetProductsDto } from './dto/get-products.dto';
import { ManufactureService } from './manufacture.service';

@Controller('/manufactures/:id')
export class ManufactureController {
	constructor(private manufactureService: ManufactureService) {}

	@Get('/products')
	async getProducts(
		@Param('id') id: string,
		@Query(new ValidationPipe({ transform: true }))
		getProductsDto: GetProductsDto,
	): Promise<any> {
		if (isNaN(+id))
			throw new BadRequestException(
				`id must be number, but got "${id}""`,
			);
		return this.manufactureService.getPopularProducts(+id, getProductsDto);
		// const manufacture = await this.manufacturesService.getManufacture(+id);
		// return { manufacture };
	}
}
