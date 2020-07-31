import { IProduct } from './Product';

export class Sofa implements IProduct {
	id: number = -1;
	name: string = '';
	description: string = '';
	price: number = 0;
	photos: string[] = [];

	manufactureId: number = -1;

	characteristics: ISofaCharacteristics | null = null;
}

export interface ISofaCharacteristics {
	width: number;
	height: number;

	weight: number;

	depth: number;

	maxWeight: number;

	color: string;

	upholsteryMaterial: string;
	frameMaterial: string;

	features: string;

	guarantee: string;
}

export interface GetSofasFilter {
	minMaxWeight: number;
	maxMaxWeight: number;

	minWidth: number;
	maxWidth: number;

	minHeight: number;
	maxHeight: number;

	minDepth: number;
	maxDepth: number;

	minWeight: number;
	maxWeight: number;
}
