import React, { useEffect } from "react";
import { useLocationField } from "react-location-query";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import { getWardrobe } from "../../../../store/modules/wardrobes/actions/getWardrobe";
import { selectWardrobeById } from "../../../../store/modules/wardrobes/selectors";
import WardrobesForm from "../../WardrobesForm";
import { saveWardrobe } from "../../../../store/modules/wardrobes/actions/saveWardrobe";

interface Props {
	saveWardrobe: typeof saveWardrobe;
	getWardrobe: typeof getWardrobe;
}

const EditForm = ({ saveWardrobe, getWardrobe }: Props) => {
	const [id, setEdit] = useLocationField("edit");

	useEffect(() => {
		if (!id) return;
		getWardrobe(+id);
	}, [id]);

	const wardrobe = useSelector(selectWardrobeById(+id));

	if (!wardrobe) return null;

	return (
		<WardrobesForm
			edit={true}
			editAction={saveWardrobe}
			// @ts-ignore
			initialValues={{ ...wardrobe, photos: wardrobe.photos }}
			afterEdited={() => setEdit("")}
		/>
	);
};

const enhance = compose(connect(null, { saveWardrobe, getWardrobe }));

// @ts-ignore
export default enhance(EditForm);
