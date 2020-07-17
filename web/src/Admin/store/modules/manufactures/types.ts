export interface Manufacture {
	id: string;
	name: string;
}

export interface ManufacturesState {
	manufactures: Manufacture[];
	manufacturesNumbers: number;
}
