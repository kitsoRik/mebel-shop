import React from "react";
import { Form, Input, InputNumber, Slider } from "antd";
import { useLocationField } from "react-location-query";

const ProductsWardrobesPageContentSearchPanel = () => {
	const [minWidth, setMinWidth] = useLocationField("minWidth", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [maxWidth, setMaxWidth] = useLocationField("maxWidth", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [minHeight, setMinHeight] = useLocationField("minHeight", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [maxHeight, setMaxHeight] = useLocationField("maxHeight", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [minDepth, setMinDepth] = useLocationField("minDepth", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [maxDepth, setMaxDepth] = useLocationField("maxDepth", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [minWeight, setMinWeight] = useLocationField("minWeight", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [maxWeight, setMaxWeight] = useLocationField("maxWeight", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	return (
		<>
			<Item
				label={"Ширина"}
				max={1000}
				sign={"см"}
				minValue={minWidth}
				setMinValue={setMinWidth}
				maxValue={maxWidth}
				setMaxValue={setMaxWidth}
			/>
			<Item
				label={"Висота"}
				max={300}
				sign={"см"}
				minValue={minHeight}
				setMinValue={setMinWeight}
				maxValue={maxHeight}
				setMaxValue={setMaxHeight}
			/>
			<Item
				label={"Глубина"}
				max={200}
				sign={"см"}
				minValue={minDepth}
				setMinValue={setMinDepth}
				maxValue={maxDepth}
				setMaxValue={setMaxDepth}
			/>
			<Item
				label={"Вага"}
				max={1000}
				sign={"кг"}
				minValue={minWeight}
				setMinValue={setMinWeight}
				maxValue={maxWeight}
				setMaxValue={setMaxWeight}
			/>
		</>
	);
};

interface ItemProps {
	label: string;
	max: number;
	sign: string;

	minValue: any;
	setMinValue: (value: any) => void;
	maxValue: any;
	setMaxValue: (value: any) => void;
}

const Item = ({
	label,
	max,
	sign,

	minValue,
	maxValue,
	setMinValue,
	setMaxValue
}: ItemProps) => {
	return (
		<>
			<Form.Item label={label}>
				<Slider
					range
					marks={{ 0: `0 ${sign}`, [max]: `${max} ${sign}` }}
					defaultValue={[minValue, maxValue === 0 ? max : maxValue]}
					onAfterChange={([min, max]) => {
						setMinValue(min);
						setMaxValue(max);
					}}
					min={0}
					max={max}
				/>
			</Form.Item>
		</>
	);
};

export default ProductsWardrobesPageContentSearchPanel;
