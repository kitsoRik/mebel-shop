import { Avatar, Button, Form, List, Skeleton, Input } from "antd";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import ViewsList from "../../../components/ViewsList";
import { getBeds } from "../../../store/modules/beds/actions/getBeds";
import { selectBedsByPage } from "../../../store/modules/beds/selectors";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import { baseUrl } from "../../../../providers/api/api";
import { useAdminSelector } from "../../../store";
import FilterForm from "./FilterForm";
import { useLocationField } from "react-location-query";
import { Bed } from "@mebel-shop/data-objects";

interface Props {
	getBeds: typeof getBeds;
}

const Views = ({ getBeds }: Props) => {
	const [page, setPage] = useLocationField("page", 1);
	const [limit] = useLocationField("limit", {
		type: "number",
		initial: 20,
		hideIfInitial: true
	});
	const [name] = useLocationField("name", {
		type: "string",
		initial: "",
		hideIfInitial: true
	});
	const [manufacture] = useLocationField("manufacture", {
		type: "number",
		initial: -1,
		hideIfInitial: true
	});

	const items = useAdminSelector(selectBedsByPage(page));
	const totalItems = useAdminSelector((s) => s.beds.bedsNumbers);

	useEffect(() => {
		if (name === undefined) return;
		getBeds(page, { name, manufacture }, limit);
	}, [page, name, manufacture]);

	return (
		<ViewsList
			addForm={<AddForm />}
			editForm={<EditForm />}
			searchForm={<FilterForm />}
			items={items}
			page={page}
			totalItems={totalItems}
			onChangePage={setPage}
			// @ts-ignore
			renderItem={(onEdit) => ({
				id,
				name,
				description,
				photos
			}: Bed) => (
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
									src={`${baseUrl}/static/beds/photos/${photos[0]}`}
								/>
							)
						}
						description={description}
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

const mapDispatchToProps = { getBeds };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Views);
