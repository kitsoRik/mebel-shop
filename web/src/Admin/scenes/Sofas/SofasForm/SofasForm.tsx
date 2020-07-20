import { AutoComplete, Button, Form, Input, Mentions, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Option } from "antd/lib/mentions";
import React, { useState } from "react";
import { reduceEachTrailingCommentRange } from "typescript";
import useManufactures from "../../../hooks/useManufactures";

interface AddProps {
	add: true;
	addAction: (name: string) => any;
	afterAdded: () => any;
}

interface EditProps {
	edit: true;
	initialValues: { name: string };
	editAction: (name: string) => any;
	afterEdited: () => any;
}

const SofasForm = (props: AddProps | EditProps) => {
	const [form] = useForm();

	const onFinish = async () => {
		const action = "edit" in props ? props.editAction : props.addAction;
		const { name } = form.getFieldsValue();
		console.log(form.getFieldsValue());
		return;
		// const { error }: any = await action!(name);
		// if (error) {
		// 	console.log(error);
		// } else {
		// 	if ("edit" in props) props.afterEdited();
		// 	else props.afterAdded();
		// }
	};

	const onFinishFailed = () => {};
	const initialValues = "edit" in props ? props.initialValues : {};

	const [manufacturesName, setManufacturesName] = useState("");

	const { manufactures, loading: manufactoresLoading } = useManufactures(
		manufacturesName
	);

	return (
		<Form
			form={form}
			name="basic"
			initialValues={initialValues}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				name="manufactures"
				label="Виробник"
				valuePropName="value"
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 16 }}
				rules={[
					{
						message: "123",
						validator: (r: any, value: any) => {
							if (
								!manufactures.map((m) => m.name).includes(value)
							) {
								return Promise.reject();
							}
							return Promise.resolve();
						},
					},
				]}
			>
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Select a person"
					onSearch={(value) => setManufacturesName(value.toString())}
					onChange={(value) =>
						form.setFieldsValue({ manufactures: value })
					}
					filterOption={() => true}
					loading={manufactoresLoading}
				>
					{manufactures.map(({ id, name }) => (
						<Select.Option key={id} value={`${id}`}>
							{name}
						</Select.Option>
					))}
				</Select>
				,
			</Form.Item>
			<Form.Item
				label="Назва"
				name="name"
				rules={[{ required: true, message: "Введіть назву виробника" }]}
			>
				<Input />
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 10, span: 16 }}>
				<Button type="primary" htmlType="submit">
					{"edit" in props ? "Редагувати" : "Додати"}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SofasForm;
