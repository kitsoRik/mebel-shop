import { Button, Checkbox, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addManufacture } from "../../../store/modules/manufactures/actions";

const layout = {
	labelCol: { span: 1 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 1, span: 16 },
};

interface Props {
	addManufacture?: typeof addManufacture;
	onAdded?: () => void;
}

const Manufacture = ({ addManufacture, onAdded }: Props) => {
	const [form] = useForm();

	const onFinish = async () => {
		const { name } = form.getFieldsValue();
		const { error }: any = await addManufacture!(name);
		if (error) {
			console.log(error);
		} else {
			if (onAdded) onAdded();
		}
	};

	const onFinishFailed = () => {};

	return (
		<Form
			form={form}
			name="basic"
			initialValues={{ remember: true }}
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
					Додати
				</Button>
			</Form.Item>
		</Form>
	);
};

const mapDispatchToProps = { addManufacture };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Manufacture);
