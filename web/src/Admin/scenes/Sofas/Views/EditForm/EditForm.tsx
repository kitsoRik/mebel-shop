import React, { useEffect } from "react";
import { useLocationField } from "react-location-query";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import { getSofa } from "../../../../store/modules/sofas/actions/getSofa";
import { saveSofa } from "../../../../store/modules/sofas/actions/saveSofa";
import { selectSofaById } from "../../../../store/modules/sofas/selectors";
import SofasForm from "../../SofasForm";

interface Props {
	saveSofa: typeof saveSofa;
	getSofa: typeof getSofa;
}

const EditForm = ({ saveSofa, getSofa }: Props) => {
	const [id, setEdit] = useLocationField<string>("edit");

	useEffect(() => {
		if (!id) return;
		getSofa(+id);
	}, [id]);

	const sofa = useSelector(selectSofaById(+id));

	if (!sofa) return null;

	return (
		<SofasForm
			edit={true}
			editAction={saveSofa}
			// @ts-ignore
			initialValues={{ ...sofa, photos: sofa.photos }}
			afterEdited={() => setEdit("")}
		/>
	);
};

const enhance = compose(connect(null, { saveSofa, getSofa }));

// @ts-ignore
export default enhance(EditForm);
