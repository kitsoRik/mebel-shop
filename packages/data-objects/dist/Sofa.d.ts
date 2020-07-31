import { IProduct } from './Product';
export declare class Sofa implements IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    photos: string[];
    manufactureId: number;
    characteristics: ISofaCharacteristics | null;
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
