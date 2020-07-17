import { Button, Checkbox, Form, Input, Layout, Tooltip } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { signIn } from "../../../store/modules/user/actions";

interface Props {
	signIn: typeof signIn;
}

const Login = ({ signIn }: Props) => {
	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};
	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};

	const [form] = useForm();

	const onSubmit = async () => {
		const username = form.getFieldValue("username");
		const password = form.getFieldValue("password");
		const remember = form.getFieldValue("remember");

		const { error }: any = await signIn(username, password, remember);
		if (error) {
			switch (error.message) {
				case "Not Found": {
					form.setFields([
						{
							name: "password",
							errors: ["Не вірні дані"],
						},
					]);
				}
			}
		}
	};

	return (
		<>
			<Form form={form} onFinish={onSubmit} {...layout}>
				<Form.Item
					label="Логін"
					name="username"
					rules={[
						{
							required: true,
							message: "Введіть свій логін",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Пароль"
					name="password"
					rules={[
						{
							required: true,
							message: "Введи свій пароль",
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					{...tailLayout}
					name="remember"
					valuePropName="checked"
					initialValue={false}
				>
					<Checkbox>Запам'ятати мене</Checkbox>
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button
						type="primary"
						htmlType="submit"
						disabled={
							Object.keys(form.getFieldsError()).length !== 0
						}
					>
						Ввійти
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

const mapDispatchToProps = { signIn };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Login);
