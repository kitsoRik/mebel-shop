import { Button, List, Pagination } from "antd";
import React from "react";
import { useLocationField } from "react-location-query";
import classes from "./ViewsList.module.scss";
import Add from "./Add";
import Edit from "./Edit";

interface Props {
	renderItem: (
		onEdit: (id: number) => void
	) => (props: any) => React.ReactNode;

	addForm: JSX.Element;
	editForm: JSX.Element;
	searchForm?: JSX.Element;
	items: any[];

	page: number;
	onChangePage: (page: number) => void;
}

const ViewsList = ({
	items,
	renderItem,
	addForm,
	editForm,
	searchForm,

	page,
	onChangePage
}: Props) => {
	const [, setAdd] = useLocationField("add", {
		type: "boolean",
		initial: false,
		hideIfInitial: true
	});

	const [, setEdit] = useLocationField("edit", {
		type: "string",
		initial: "",
		hideIfInitial: true
	});

	return (
		<>
			<div className={classes.view}>
				{searchForm}
				<List
					className={classes.list}
					dataSource={items}
					loadMore={
						<div className={classes.addWrapper}>
							<Button onClick={() => setAdd(true)}>Додати</Button>
						</div>
					}
					renderItem={renderItem((id) => setEdit(id.toString()))}
				/>
				<Pagination current={page} total={50} onChange={onChangePage} />
			</div>
			<Add form={addForm} />
			<Edit form={editForm} />
		</>
	);
};

export default ViewsList;
