import React from "react";
import { Typography } from "antd";

interface Props {
	children: JSX.Element;
	title: string;
}

const AddPage = ({ title, children }: Props) => {
	return (
		<div>
			<Typography.Title>{title}</Typography.Title>
			<div>{children}</div>
		</div>
	);
};

export default AddPage;
