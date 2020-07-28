import React from "react";
import { useLocationField } from "react-location-query";
import { connect } from "react-redux";
import { compose } from "redux";
import { addSofa } from "../../../../store/modules/sofas/actions/addSofa";
import SofasForm from "../../SofasForm";

interface Props {
	addSofa: typeof addSofa;
}

const AddForm = ({ addSofa }: Props) => {
	const [, setAdd] = useLocationField("add");

	return (
		<SofasForm
			add={true}
			addAction={addSofa}
			afterAdded={() => setAdd(false)}
		/>
	);
};

const enhance = compose(connect(null, { addSofa }));

// @ts-ignore
export default enhance(AddForm);
