export interface Manufacture {
	id: number;
	name: string;
}

export interface ManufacturesState {
	manufactures: { [x: string]: Manufacture };
	manufacturesNumbers: number;
}
