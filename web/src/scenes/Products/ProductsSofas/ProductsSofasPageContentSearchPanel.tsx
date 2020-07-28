import React from "react";
import { Form, Input } from "antd";
import { useLocationField } from "react-location-query";

const ProductsSofasPageContentSearchPanel = () => {
	const [minMaxWeight, setMinMaxWeight] = useLocationField<number>(
		"minMaxWeight"
	);

	const [maxMaxWeight, setMaxMaxWeight] = useLocationField<number>(
		"maxMaxWeight"
	);
	return (
		<>
			<Form.Item>
				<Input
					value={minMaxWeight}
					onChange={(e) => setMinMaxWeight(+e.target.value)}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					value={maxMaxWeight}
					onChange={(e) => setMaxMaxWeight(+e.target.value)}
				/>
			</Form.Item>
		</>
	);
};

export default ProductsSofasPageContentSearchPanel;
