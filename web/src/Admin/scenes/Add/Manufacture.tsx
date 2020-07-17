import { Button, Checkbox, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addManufacture } from "../../store/modules/manufactures/actions";

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

interface Props {
	addManufacture?: typeof addManufacture;
}

const Manufacture = ({ addManufacture }: Props) => {
	const [form] = useForm();

	const onFinish = async () => {
		const { name } = form.getFieldsValue();
		const { error }: any = await addManufacture!(name);
		if (error) {
			console.log(error);
		}
	};

	const onFinishFailed = () => {};

	return (
		<Form
			form={form}
			{...layout}
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
			<Form.Item {...tailLayout}>
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
