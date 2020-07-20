import React, { useEffect } from "react";
import { useLocationField } from "react-location-query";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import {
	getManufacture,
	saveManufacture,
} from "../../../../store/modules/manufactures/actions";
import { selectManufactureById } from "../../../../store/modules/manufactures/selectors";
import { getSofas } from "../../../../store/modules/sofas/actions/getSofas";
import { saveSofa } from "../../../../store/modules/sofas/actions/saveSofa";
import { selectSofaById } from "../../../../store/modules/sofas/selectors";
import SofasForm from "../../SofasForm";

interface Props {
	saveSofa: typeof saveSofa;
	getSofas: typeof getSofas;
}

const EditForm = ({ saveSofa, getSofas }: Props) => {
	const [id, setEdit] = useLocationField<string>("edit");

	useEffect(() => {
		if (!id) return;
		getSofas(+id);
	}, [id]);

	const manufacture = useSelector(selectSofaById(+id));

	if (!manufacture) return null;

	return (
		<SofasForm
			edit={true}
			editAction={(name) => saveSofa(+id, name)}
			initialValues={{ name: manufacture.name }}
			afterEdited={() => setEdit("")}
		/>
	);
};

const enhance = compose(connect(null, { saveSofa, getSofas }));

// @ts-ignore
export default enhance(EditForm);
