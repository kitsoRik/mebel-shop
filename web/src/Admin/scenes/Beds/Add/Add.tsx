import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import AddPage from "../../../components/AddPage";
import { addBed } from "../../../store/modules/beds/actions/addBed";
import BedsForm from "../BedsForm";
import { notification } from "antd";

interface Props {
	addBed: typeof addBed;
}

const Add = ({ addBed }: Props) => {
	return (
		<AddPage title="Додавання дивану">
			<BedsForm
				add={true}
				addAction={addBed}
				afterAdded={() =>
					notification.success({
						message: "Диван успішно доданий",
						placement: "bottomLeft"
					})
				}
			/>
		</AddPage>
	);
};

const mapDispatchToProps = { addBed };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Add);
