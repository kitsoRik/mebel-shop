import Modal from "antd/lib/modal/Modal";
import React from "react";
import { useLocationField } from "react-location-query";

interface Props {
	form: JSX.Element;
}

const Edit = ({ form }: Props) => {
	const [edit, setEdit] = useLocationField("edit");

	return (
		<Modal
			title="Редагувати"
			// @ts-ignore
			visible={edit !== ""}
			// @ts-ignore
			onCancel={() => setEdit("")}
			footer={null}
		>
			{form}
		</Modal>
	);
};

export default Edit;
