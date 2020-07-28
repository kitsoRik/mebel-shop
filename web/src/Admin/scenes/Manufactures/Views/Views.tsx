import { Avatar, Button, Form, List, Skeleton } from "antd";
import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import ViewsList from "../../../components/ViewsList";
import { useAdminSelector, AdminState } from "../../../store";
import { getManufactures } from "../../../store/modules/manufactures/actions";
import { selectManufacturesByIds } from "../../../store/modules/manufactures/selectors";
import { Manufacture } from "../../../store/modules/manufactures/types";
import Add from "../Add";
import EditForm from "./EditForm";
import { useLocationField } from "react-location-query";

interface Props {
	getManufactures: typeof getManufactures;
}

const Views = ({ getManufactures }: Props) => {
	const [limit] = useLocationField("limit", {
		type: "number",
		initial: 1,
		hideIfInitial: true
	});

	useEffect(() => {
		getManufactures(1);
	}, []);

	return (
		<ViewsList
			addForm={<Add onAdded={() => {}} />}
			editForm={<EditForm />}
			items={useAdminSelector(
				selectManufacturesByIds([1, 2, 3, 4, 5, 6, 7])
			)}
			page={1}
			totalItems={3}
			onChangePage={() => {}}
			renderItem={(onEdit) => ({ id, name }: Manufacture) => (
				<List.Item
					actions={[
						<Button
							key="list-loadmore-edit"
							onClick={() => onEdit(id)}
						>
							Редагувати
						</Button>,
						<Button key="list-loadmore-more">Детальніше</Button>
					]}
				>
					<List.Item.Meta
						avatar={
							<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						}
						title={
							<Link to={`/admin/views/manufactures/${id}`}>
								{name}
							</Link>
						}
					/>
				</List.Item>
			)}
		/>
	);
};

const mapDispatchToProps = { getManufactures };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Views);
