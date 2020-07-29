import React from "react";
import { Button, Layout, Typography, Modal } from "antd";
import classes from "./Description.module.scss";
import { useLocationField } from "react-location-query";
import FormDialog from "./FormDialog";

interface Props {
	text: string;
	price: number;
}

const Description = ({ text, price }: Props) => {
	const [, setBuy] = useLocationField("buy", {
		type: "boolean",
		initial: false,
		hideIfInitial: true
	});
	return (
		<>
			<Layout className={classes.description}>
				<Layout.Content>
					<Typography.Text className={classes.text}>
						{text}
					</Typography.Text>
				</Layout.Content>
				<Layout.Footer className={classes.footer}>
					<Typography.Text type="danger" className={classes.price}>
						{price} грн.
					</Typography.Text>
					<Button
						type="primary"
						color="red"
						onClick={() => setBuy(true)}
					>
						Купити
					</Button>
				</Layout.Footer>
			</Layout>
			<FormDialog />
		</>
	);
};

export default Description;
