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
			// @ts-ignore
			visible={add}
			// @ts-ignore
			onCancel={() => setAdd(false)}
			footer={null}
		>
			{React.cloneElement(form, {
				onAdded: () =>
					// @ts-ignore
					setAdd(false)
			})}
		</Modal>
	);
};

export default Add;
