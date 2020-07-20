import { Avatar, Button, Form, List, Skeleton } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import ViewsList from "../../../components/ViewsList";
import { Manufacture } from "../../../store/modules/manufactures/types";
import { getSofas } from "../../../store/modules/sofas/actions/getSofas";
import { selectSofasByIds } from "../../../store/modules/sofas/selectors";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

interface Props {
	getSofas: typeof getSofas;
}

const Views = ({ getSofas }: Props) => {
	return (
		<ViewsList
			addForm={<AddForm />}
			editForm={<EditForm />}
			getActions={getSofas}
			itemsSelectorByIds={selectSofasByIds}
			renderItem={(onEdit) => ({ id, name }: Manufacture) => (
				<List.Item
					actions={[
						<Button
							key="list-loadmore-edit"
							onClick={() => onEdit(id)}
						>
							Редагувати
						</Button>,
						<Button key="list-loadmore-more">Детальніше</Button>,
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

const mapDispatchToProps = { getSofas };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Views);
