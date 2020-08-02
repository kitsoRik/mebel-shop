import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import AddPage from "../../../components/AddPage";
import { addWardrobe } from "../../../store/modules/wardrobes/actions/addWardrobe";
import WardrobesForm from "../WardrobesForm";
import { notification } from "antd";

interface Props {
	addWardrobe: typeof addWardrobe;
}

const Add = ({ addWardrobe }: Props) => {
	return (
		<AddPage title="Додавання дивану">
			<WardrobesForm
				add={true}
				addAction={addWardrobe}
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

const mapDispatchToProps = { addWardrobe };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Add);
