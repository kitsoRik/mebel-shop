import classes from "./Product.module.scss";
import React from "react";
import { IProduct } from "../../models/interfaces/Product";

interface Props {
	product: IProduct;
}

const Product = ({ product }: Props) => {
	return <div className={classes.product}>{product.id}</div>;
};

export default Product;
