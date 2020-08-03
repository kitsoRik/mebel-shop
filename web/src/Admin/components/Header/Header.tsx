import classes from "./Header.module.scss";
import { Button, Layout, Typography } from "antd";
import React from "react";
import { compose } from "redux";
import { connect, useSelector } from "react-redux";
import { signOut } from "../../../store/modules/user/actions";
import { selectUserDataFromRootReducer } from "../../../store/modules/user/selectors";

interface Props {
	signOut?: typeof signOut;
}

const Header = ({ signOut }: Props) => {
	const data = useSelector(selectUserDataFromRootReducer);

	return (
		<Layout.Header className={classes.adminHeader}>
			<Typography.Title style={{ color: "white" }}>
				Адмін панель
			</Typography.Title>
			{data && <Button onClick={signOut}>Вийти</Button>}
		</Layout.Header>
	);
};

const mapDispatchToProps = { signOut };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Header);
