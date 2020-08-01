import React from "react";
import { Modal, Form, Input, notification } from "antd";
import { useLocationField } from "react-location-query";
import { useForm } from "antd/lib/form/Form";

const FormDialog = () => {
	const [buy, setBuy] = useLocationField("buy");

	const [form] = useForm();

	const onFinish = (values: any) => {
		notification.success({
			message: `${values.name}, вашу заявку відправленно, очікуйте дзвінка`
		});
		handleClose();
		form.resetFields();
	};

	const handleClose = () => {
		setBuy(false);
	};

	return (
		<Modal
			visible={buy}
			onCancel={handleClose}
			cancelText="Скасувати"
			onOk={form.submit}
			okText="Подати заявку"
			closable={false}
		>
			<Form form={form} onFinish={onFinish}>
				<Form.Item
					label="Ваше ім'я"
					name="name"
					rules={[{ required: true, message: "Введіть ваше ім'я" }]}
				>
					<Input placeholder="Введіть ваше ім'я" />
				</Form.Item>
				<Form.Item
					label="Номер телефону"
					name="phone"
					rules={[
						{
							required: true,
							message: "Потрібно ввести номер телефону"
						}
					]}
				>
					<Input placeholder="Введіть свій номер телефону" />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default FormDialog;
