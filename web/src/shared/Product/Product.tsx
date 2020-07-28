import classes from "./Product.module.scss";
import React from "react";
import { IProduct } from "../../models/interfaces/Product";
import { Avatar, Card } from "antd";

import Meta from "antd/lib/card/Meta";
import { useHistory } from "react-router";

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
