import React, { useEffect } from "react";
import { useLocationField } from "react-location-query";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import {
	getManufacture,
	saveManufacture
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
	const [id, setEdit] = useLocationField("edit");

	useEffect(() => {
		if (!id) return;
		getSofas(+id);
	}, [id]);

	const sofa = useSelector(selectSofaById(+id));

	if (!sofa) return null;

	return (
		<SofasForm
			edit={true}
			editAction={(...args) => saveSofa(+id, ...args)}
			initialValues={{ ...sofa, photos: sofa.photos }}
			// @ts-ignore
			afterEdited={() => setEdit("")}
		/>
	);
};

const enhance = compose(connect(null, { saveSofa, getSofas }));

// @ts-ignore
export default enhance(EditForm);
