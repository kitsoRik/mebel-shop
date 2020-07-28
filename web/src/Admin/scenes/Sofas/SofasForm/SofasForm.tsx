import { Button, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";
import PhotosList from "../../../../shared/PhotosList";
import { UploadFile } from "antd/lib/upload/interface";
import ManufacturesSelect from "../../../../shared/ManufacturesSelect";
import { Sofa } from "@mebel-shop/data-objects";

interface AddProps {
	add: true;
	addAction: (sofa: Sofa, photos: File[]) => any;
	afterAdded: () => any;
}

interface EditProps {
	edit: true;
	initialValues: Sofa & { photos: string[] };
	editAction: (sofa: Sofa, photos: string[], removedPhotos: string[]) => any;
	afterEdited: () => any;
}

const SofasForm = (props: AddProps | EditProps) => {
	const [form] = useForm();
	const onFinish = async () => {
		if ("edit" in props) {
			const {
				manufactureId,
				name,
				photos,
				description,
				price,
				maxWeight
			} = form.getFieldsValue();
			const removedPhotos =
				typeof photos[0] === "string"
					? []
					: props.initialValues.photos.filter(
							(p) =>
								!photos.find(
									(photo: UploadFile) => photo.name === p
								)
					  );
			const { error }: any = await props.editAction(
				{
					id: props.initialValues.id,
					// @ts-ignore
					manufactureId: +manufactureId,
					name,
					description,
					price: +price,
					photos: [],
					characteristics: { maxWeight: +maxWeight }
				},
				photos
					.filter((p: UploadFile) => !!p.originFileObj)
					.map((p: UploadFile) => p.originFileObj),
				removedPhotos
			);
			if (error) {
				console.log(error);
			} else {
				props.afterEdited();
			}
		} else {
			const {
				manufactureId,
				name,
				photos,
				description,
				price,
				maxWeight
			} = form.getFieldsValue();
			const { error }: any = await props.addAction(
				{
					id: -1,
					// @ts-ignore
					manufactureId: +manufactureId,
					name,
					description,
					price: +price,
					photos: [],
					characteristics: { maxWeight: +maxWeight }
				},
				photos.map((p: UploadFile) => p.originFileObj)
			);
			if (error) {
				console.log(error);
			} else {
				form.resetFields();
				props.afterAdded();
			}
		}
	};

	const onFinishFailed = () => {};
	const initialValues = "edit" in props ? props.initialValues : ({} as any);

	return (
		<Form
			form={form}
			name="basic"
			initialValues={initialValues}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				name="manufactureId"
				label="Виробник"
				required={true}
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 16 }}
			>
				<ManufacturesSelect />
			</Form.Item>
			<Form.Item
				label="Назва"
				name="name"
				rules={[{ required: true, message: "Введіть назву виробника" }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				required={true}
				label="Ціна"
				name="price"
				rules={[
					{ required: true, message: "Введіть ціну" },
					{
						type: "number",
						transform: (a) => +a,
						message: "Ціна повинна бути вказано цифрою"
					}
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item label="Опис" name="description">
				<Input />
			</Form.Item>
			<div>
				<Form.Item
					label="Максимальне навантаження"
					name="maxWeight"
					initialValue={initialValues?.characteristics?.maxWeight}
					rules={[
						{ required: true, message: "Введіть ціну" },
						{
							type: "number",
							transform: (a) => +a,
							message: "Ціна повинна бути вказано цифрою"
						}
					]}
				>
					<Input />
				</Form.Item>
			</div>
			<Form.Item
				label="Фото"
				name="photos"
				rules={[{ required: true, message: "Додайте фотографії" }]}
			>
				<PhotosList />
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
