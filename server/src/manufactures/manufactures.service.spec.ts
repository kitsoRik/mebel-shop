import { Test } from '@nestjs/testing';
import { GetManufacturesDto } from './dto/get-manufactures.dto';
import { ManufactureRepository } from './manufacture/manufacture.repository';
import { ManufacturesService } from './manufactures.service';

const mockUser = { username: 'Test user' };

const mockManufactureRepository = () => ({
	getManufactures: jest.fn(),
});

describe('ManufacturesService', () => {
	let manufacturesService: ManufacturesService;
	let manufactureRepository: ManufactureRepository;

	beforeEach(async () => {
		const module = await Test.createTestingModule({
			providers: [
				ManufacturesService,
				{
					provide: ManufactureRepository,
					useFactory: mockManufactureRepository,
				},
			],
		}).compile();

		manufacturesService = await module.get<ManufacturesService>(
			ManufacturesService,
		);

		manufactureRepository = await module.get<ManufactureRepository>(
			ManufactureRepository,
		);
	});

	describe('getManufactures', () => {
		it('get', async () => {
			// @ts-ignore
			manufactureRepository.getManufactures.mockResolvedValue([[], 0]);
			expect(
				manufactureRepository.getManufactures,
			).not.toHaveBeenCalled();

			const getManufacturesDto: GetManufacturesDto = {
				limit: 50,
				offset: 0,
			};
			const result = await manufacturesService.getManufactures(
				getManufacturesDto,
			);

			expect(result).toEqual({ manufactures: [], count: 0 });

			expect(manufactureRepository.getManufactures).toHaveBeenCalled();
		});
	});
});
