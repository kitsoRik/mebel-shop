import classes from "./Product.module.scss";
import React from "react";
import { Avatar, Card } from "antd";

import Meta from "antd/lib/card/Meta";
import { useHistory } from "react-router";
import { IProduct } from "@mebel-shop/data-objects/dist/Product";

interface Props {
	product: IProduct;
	photoUrl: string;
}

const Product = ({ product, photoUrl }: Props) => {
	const history = useHistory();

	return (
		<Card
			hoverable
			style={{ width: 240, height: 385 }}
			cover={<img alt="example" src={photoUrl} />}
			onClick={() => history.push(`/products/sofas/${product.id}`)}
		>
			<Meta
				title={<span>{product.name}</span>}
				description={<div>{product.price ?? 4999.99} грн.</div>}
			/>
		</Card>
	);
};

export default Product;
