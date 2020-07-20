import { Button, Checkbox, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addManufacture } from "../../../store/modules/manufactures/actions";
import ManufacturesForm from "../ManufacturesForm";

interface Props {
	addManufacture?: typeof addManufacture;
	onAdded: () => void;
}

const Add = ({ addManufacture, onAdded }: Props) => {
	return (
		<ManufacturesForm
			add={true}
			addAction={addManufacture!}
			afterAdded={onAdded}
		/>
	);
};

const mapDispatchToProps = { addManufacture };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Add);
