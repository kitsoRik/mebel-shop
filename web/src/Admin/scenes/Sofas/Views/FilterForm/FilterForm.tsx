import React from "react";
import { Input, Form, Button } from "antd";
import ManufacturesSelect from "../../../../../shared/ManufacturesSelect";
import { useForm } from "antd/lib/form/Form";
import { useLocationField } from "react-location-query";

interface Props {}

const FilterForm = ({}: Props) => {
	const [form] = useForm();

	const [name, setName] = useLocationField("name", {
		type: "string",
		initial: "",
		hideIfInitial: true
	});

	const [manufacture, setManufacture] = useLocationField("manufacture", {
		type: "number",
		initial: -1,
		hideIfInitial: true
	});

	const handleSearch = () => {
		const { name, manufacture } = form.getFieldsValue();
		setName(name);
		setManufacture(manufacture);
	};

	return (
		<Form form={form} layout="inline" style={{ padding: 5 }}>
			<Form.Item label="Шаблон імені" name="name" initialValue={name}>
				<Input />
			</Form.Item>
			<Form.Item
				label="По виробнику"
				name="manufacture"
				initialValue={manufacture}
			>
				<ManufacturesSelect />
			</Form.Item>
			<Form.Item>
				<Button type="primary" onClick={handleSearch}>
					Пошук
				</Button>
			</Form.Item>
		</Form>
	);
};

export default FilterForm;
