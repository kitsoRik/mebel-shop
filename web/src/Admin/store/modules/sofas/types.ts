export interface Sofa {
	id: number;
	name: string;
	manufacture: number;
	photos: string[];
}

export interface SofasState {
	sofas: { [x: string]: Sofa };
	pages: { [x: number]: number[] };
	sofasNumbers: number;
}
