import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import AddPage from "../../../components/AddPage";
import { addSofa } from "../../../store/modules/sofas/actions/addSofa";
import SofasForm from "../SofasForm";
import { notification } from "antd";

interface Props {
	addSofa: typeof addSofa;
}

const Add = ({ addSofa }: Props) => {
	return (
		<AddPage title="Додавання дивану">
			<SofasForm
				add={true}
				addAction={addSofa}
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

const mapDispatchToProps = { addSofa };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Add);
