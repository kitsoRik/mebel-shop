import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import AddPage from "../../../components/AddPage";
import { addSofa } from "../../../store/modules/sofas/actions/addSofa";
import SofasForm from "../SofasForm";

interface Props {
	addSofa: typeof addSofa;
	onAdded: () => void;
}

const Add = ({ addSofa, onAdded }: Props) => {
	return (
		<AddPage title="Додавання дивану">
			<SofasForm add={true} addAction={addSofa} afterAdded={onAdded} />
		</AddPage>
	);
};

const mapDispatchToProps = { addSofa };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Add);
