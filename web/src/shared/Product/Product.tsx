import classes from "./Product.module.scss";
import React from "react";
import { Avatar, Card } from "antd";

import Meta from "antd/lib/card/Meta";
import { useHistory } from "react-router";
import { IProduct } from "@mebel-shop/data-objects/dist/Product";

interface Props {
	exgibit?: true;
	exgibitCover?: JSX.Element;
	onExgibitClick?: () => void;

	product?: IProduct;
	productPageUrlBase?: string;
	photoUrl?: string;
}

const Product = ({
	exgibit,
	exgibitCover,
	onExgibitClick,

	product,
	photoUrl = "",
	productPageUrlBase = ""
}: Props) => {
	const history = useHistory();

	if (exgibit) {
		return (
			<Card
				hoverable
				style={{ height: 385 }}
				cover={exgibitCover}
				onClick={onExgibitClick}
			></Card>
		);
	}

	if (!product) throw new Error("No product");

	return (
		<Card
			hoverable
			style={{ width: "100%", height: 385 }}
			cover={<img alt="example" src={photoUrl} />}
			onClick={() => history.push(`${productPageUrlBase}${product.id}`)}
		>
			<Meta
				title={<span>{product.name}</span>}
				description={<div>{product.price ?? 4999.99} грн.</div>}
			/>
		</Card>
	);
};

export default Product;
