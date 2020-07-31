import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ManufactureRepository } from './manufacture.repository';
import { IProduct } from '@mebel-shop/data-objects/dist/Product';
import { SofaRepository } from 'src/products/sofas/sofa.repository';
import { GetProductsDto } from './dto/get-products.dto';
import { Sofa } from '@mebel-shop/data-objects';

@Injectable()
export class ManufactureService {
	constructor(
		@InjectRepository(ManufactureRepository)
		private manufactureRepository: ManufactureRepository,
		@InjectRepository(SofaRepository)
		private sofasRepository: SofaRepository,
	) {}

	async getPopularProducts(
		id: number,
		getProductsDto: GetProductsDto,
	): Promise<{ sofas: { products: Sofa[]; count: number } }> {
		const query = this.sofasRepository.createQueryBuilder('sofa');

		query.andWhere('"manufactureId" = :manufactureId', {
			manufactureId: id,
		});

		query.offset(getProductsDto.offset).limit(getProductsDto.limit);

		const [sofas, sofasCount] = await query.getManyAndCount();

		return {
			sofas: {
				count: sofasCount,
				products: sofas,
			},
		};
	}
}
