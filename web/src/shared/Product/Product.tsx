import classes from "./Product.module.scss";
import React from "react";
import { IProduct } from "../../models/interfaces/Product";
import { Avatar, Card } from "antd";
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import { useHistory } from "react-router";

interface Props {
	product: IProduct;
}

const Product = ({ product }: Props) => {
	const history = useHistory();

	return (
		<Card
			hoverable
			style={{ width: 240 }}
			cover={
				<img
					alt="example"
					src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
				/>
			}
			onClick={() => history.push(`/products/sofas/${product.id}`)}
		>
			<Meta
				title={<span>{product.name}</span>}
				description={<div>Main description</div>}
			/>
		</Card>
	);
};

export default Product;
