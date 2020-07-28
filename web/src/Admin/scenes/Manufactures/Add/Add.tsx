import { Button, Checkbox, Form, Input, notification } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addManufacture } from "../../../store/modules/manufactures/actions";
import ManufacturesForm from "../ManufacturesForm";

interface Props {
	addManufacture?: typeof addManufacture;
}

const Add = ({ addManufacture }: Props) => {
	return (
		<ManufacturesForm
			add={true}
			addAction={addManufacture!}
			afterAdded={() =>
				notification.success({
					placement: "bottomLeft",
					message: "Виробник успішно доданий"
				})
			}
		/>
	);
};

const mapDispatchToProps = { addManufacture };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Add);
