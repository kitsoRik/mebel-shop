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

interface Props {
	product: IProduct;
}

const Product = ({ product }: Props) => {
	return (
		<Card
			className={classes.product}
			style={{ width: 240, padding: 0 }}
			cover={
				<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
			}
			actions={[
				<SettingOutlined key="setting" />,
				<EditOutlined key="edit" />,
				<EllipsisOutlined key="ellipsis" />,
			]}
		>
			<div className={classes.image}></div>
			<span className={classes.price}>1,380 грн</span>
		</Card>
	);
};

export default Product;
