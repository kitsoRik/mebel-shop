import React, { useEffect } from "react";
import { useLocationField } from "react-location-query";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import {
	getManufacture,
	saveManufacture,
} from "../../../../store/modules/manufactures/actions";
import { selectManufactureById } from "../../../../store/modules/manufactures/selectors";
import ManufacturesForm from "../../ManufacturesForm";

interface Props {
	saveManufacture: typeof saveManufacture;
	getManufacture: typeof getManufacture;
}

const EditForm = ({ saveManufacture, getManufacture }: Props) => {
	const [id, setEdit] = useLocationField<string>("edit");

	useEffect(() => {
		if (!id) return;
		getManufacture(+id);
	}, [id]);

	const manufacture = useSelector(selectManufactureById(+id));

	if (!manufacture) return null;

	return (
		<ManufacturesForm
			edit={true}
			editAction={(name) => saveManufacture(+id, name)}
			initialValues={{ name: manufacture.name }}
			afterEdited={() => setEdit("")}
		/>
	);
};

const enhance = compose(connect(null, { saveManufacture, getManufacture }));

// @ts-ignore
export default enhance(EditForm);
