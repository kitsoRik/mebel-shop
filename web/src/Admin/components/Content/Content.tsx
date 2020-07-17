import classes from "./Content.module.scss";
import { Layout } from "antd";
import React from "react";

interface Props {
	children: JSX.Element | JSX.Element[];
}

const Content = ({ children }: Props) => {
	return (
		<Layout.Content className={classes.content}>{children}</Layout.Content>
	);
};

export default Content;
