import React from "react";
import { Carousel } from "antd";
import classes from "./ProductsCarousel.module.scss";
import Item from "./Item";

interface Props<T> {
	products: T[];
	renderProduct: (product: T) => JSX.Element;
}

const ProductsCarousel = ({ products, renderProduct }: Props<any>) => {
	return (
		<Carousel autoplay className={classes.carousel}>
			{products.map((product) => (
				<div>{renderProduct(product)}</div>
			))}
		</Carousel>
	);
};

ProductsCarousel.Item = Item;

export default ProductsCarousel;
