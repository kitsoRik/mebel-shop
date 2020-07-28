import { Button, Form, Input, Upload } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import Modal from "antd/lib/modal/Modal";

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

const ManufacturesForm = (props: AddProps | EditProps) => {
	const [form] = useForm();

	const onFinish = async () => {
		if ("edit" in props) {
			const { name } = form.getFieldsValue();
			const { error }: any = await props.editAction(name);
			if (error) {
				console.log(error);
			} else {
				props.afterEdited();
			}
		} else {
			const { name } = form.getFieldsValue();
			const { error }: any = await props.addAction(name);
			if (error) {
				console.log(error);
			} else {
				form.resetFields();
				props.afterAdded();
			}
		}
	};

	const onFinishFailed = () => {};
	const initialValues = "edit" in props ? props.initialValues : {};
	return (
		<Form
			form={form}
			name="basic"
			initialValues={initialValues}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
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

export default ManufacturesForm;
