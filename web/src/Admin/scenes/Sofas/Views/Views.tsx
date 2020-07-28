import { Avatar, Button, Form, List, Skeleton, Input } from "antd";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import ViewsList from "../../../components/ViewsList";
import { getSofas } from "../../../store/modules/sofas/actions/getSofas";
import { selectSofasByPage } from "../../../store/modules/sofas/selectors";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import { baseUrl } from "../../../../providers/api/api";
import { Sofa } from "../../../store/modules/sofas/types";
import { useAdminSelector } from "../../../store";
import ManufacturesSelect from "../../../../shared/ManufacturesSelect";
import FilterForm from "./FilterForm";
import { useLocationField } from "react-location-query";

interface Props {
	getSofas: typeof getSofas;
}

const Views = ({ getSofas }: Props) => {
	const items = useAdminSelector(selectSofasByPage(1));

	const [page, setPage] = useLocationField("page", 1);
	const [name] = useLocationField("name");
	const [manufacture] = useLocationField("manufacture");

	useEffect(() => {
		// @ts-ignore
		getSofas(page, { name, manufacture });
	}, [page, name, manufacture]);

	return (
		<ViewsList
			addForm={<AddForm />}
			editForm={<EditForm />}
			searchForm={<FilterForm />}
			items={items}
			page={page}
			onChangePage={setPage}
			renderItem={(onEdit) => ({ id, name, photos }: Sofa) => (
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
							photos.length !== 0 && (
								<Avatar
									src={`${baseUrl}/static/sofas/photos/${photos[0]}`}
								/>
							)
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
