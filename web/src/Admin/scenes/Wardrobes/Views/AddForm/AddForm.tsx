import React from "react";
import { useLocationField } from "react-location-query";
import { connect } from "react-redux";
import { compose } from "redux";
import WardrobesForm from "../../WardrobesForm";
import { addWardrobe } from "../../../../store/modules/wardrobes/actions/addWardrobe";

interface Props {
	addWardrobe: typeof addWardrobe;
}

const AddForm = ({ addWardrobe }: Props) => {
	const [, setAdd] = useLocationField("add");

	return (
		<WardrobesForm
			add={true}
			addAction={addWardrobe}
			afterAdded={() => setAdd(false)}
		/>
	);
};

const enhance = compose(connect(null, { addWardrobe }));

// @ts-ignore
export default enhance(AddForm);
