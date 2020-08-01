import React from "react";
import { useLocationField } from "react-location-query";
import { connect } from "react-redux";
import { compose } from "redux";
import { addBed } from "../../../../store/modules/beds/actions/addBed";
import BedsForm from "../../BedsForm";

interface Props {
	addBed: typeof addBed;
}

const AddForm = ({ addBed }: Props) => {
	const [, setAdd] = useLocationField("add");

	return (
		<BedsForm
			add={true}
			addAction={addBed}
			afterAdded={() => setAdd(false)}
		/>
	);
};

const enhance = compose(connect(null, { addBed }));

// @ts-ignore
export default enhance(AddForm);
