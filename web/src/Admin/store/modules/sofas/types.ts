export interface Sofa {
	id: number;
	name: string;
}

export interface SofasState {
	sofas: {[x: string]:Sofa};
	sofasNumbers: number;
}
