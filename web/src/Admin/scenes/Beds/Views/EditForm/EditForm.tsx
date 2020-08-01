import React, { useEffect } from "react";
import { useLocationField } from "react-location-query";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import { getBed } from "../../../../store/modules/beds/actions/getBed";
import { saveBed } from "../../../../store/modules/beds/actions/saveBed";
import { selectBedById } from "../../../../store/modules/beds/selectors";
import BedsForm from "../../BedsForm";

interface Props {
	saveBed: typeof saveBed;
	getBed: typeof getBed;
}

const EditForm = ({ saveBed, getBed }: Props) => {
	const [id, setEdit] = useLocationField("edit");

	useEffect(() => {
		if (!id) return;
		getBed(+id);
	}, [id]);

	const bed = useSelector(selectBedById(+id));

	if (!bed) return null;

	return (
		<BedsForm
			edit={true}
			editAction={saveBed}
			// @ts-ignore
			initialValues={{ ...bed, photos: bed.photos }}
			afterEdited={() => setEdit("")}
		/>
	);
};

const enhance = compose(connect(null, { saveBed, getBed }));

// @ts-ignore
export default enhance(EditForm);
