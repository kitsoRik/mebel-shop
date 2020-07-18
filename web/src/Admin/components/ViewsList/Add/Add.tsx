import Modal from "antd/lib/modal/Modal";
import React from "react";
import { useLocationField } from "react-location-query";

interface Props {
	form: JSX.Element;
}

const Add = ({ form }: Props) => {
	const [add, setAdd] = useLocationField("add");

	return (
		<Modal
			title="Додати"
			visible={add as boolean}
			onCancel={() => setAdd(false)}
			footer={null}
		>
			{React.cloneElement(form, { onAdded: () => setAdd(false) })}
		</Modal>
	);
};

export default Add;
