import { Button, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";
import PhotosList from "../../../../shared/PhotosList";
import { UploadFile } from "antd/lib/upload/interface";
import ManufacturesSelect from "../../../../shared/ManufacturesSelect";
import { Wardrobe } from "@mebel-shop/data-objects";

interface AddProps {
	add: true;
	addAction: (wardrobe: Wardrobe, photos: File[]) => any;
	afterAdded: () => any;
}

interface EditProps {
	edit: true;
	initialValues: Wardrobe & { photos: string[] };
	editAction: (
		wardrobe: Wardrobe,
		photos: string[],
		removedPhotos: string[]
	) => any;
	afterEdited: () => any;
}

const WardrobesForm = (props: AddProps | EditProps) => {
	const [form] = useForm();
	const onFinish = async () => {
		const {
			manufactureId,
			name,
			photos,
			description,
			price,
			maxWeight,
			color,
			depth,
			weight,
			height,
			features,
			width,
			guarantee
		} = form.getFieldsValue();
		if ("edit" in props) {
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
					characteristics: {
						maxWeight: +maxWeight,
						color,
						depth: +depth,
						weight: +weight,
						height: +height,
						features,
						width: +width,
						guarantee
					}
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
			const { error }: any = await props.addAction(
				{
					id: -1,
					// @ts-ignore
					manufactureId: +manufactureId,
					name,
					description,
					price: +price,
					photos: [],
					characteristics: {
						maxWeight: +maxWeight,
						color,
						depth: +depth,
						weight: +weight,
						height: +height,
						features,
						width: +width,
						guarantee
					}
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
					label="Ширина"
					name="width"
					initialValue={initialValues?.characteristics?.width}
					rules={[
						{ required: true, message: "Введіть ширину" },
						{
							type: "number",
							transform: (a) => +a,
							message: "Ширина має бути вказана цифрою"
						}
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Висота"
					name="height"
					initialValue={initialValues?.characteristics?.height}
					rules={[
						{ required: true, message: "Введіть висоту" },
						{
							type: "number",
							transform: (a) => +a,
							message: "Висота повинна бути вказано цифрою"
						}
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Глубина"
					name="depth"
					initialValue={initialValues?.characteristics?.depth}
					rules={[
						{ required: true, message: "Введіть глубину" },
						{
							type: "number",
							transform: (a) => +a,
							message: "Глубина повинна бути вказано цифрою"
						}
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Вага"
					name="weight"
					initialValue={initialValues?.characteristics?.weight}
					rules={[
						{ required: true, message: "Введіть вагу" },
						{
							type: "number",
							transform: (a) => +a,
							message: "Вага повинна бути вказано цифрою"
						}
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Максимальне навантаження"
					name="maxWeight"
					initialValue={initialValues?.characteristics?.maxWeight}
					rules={[
						{
							required: true,
							message: "Введіть максимальне навантаження"
						},
						{
							type: "number",
							transform: (a) => +a,
							message:
								"Максимальне навантаження повинне бути вказано цифрою"
						}
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Колір"
					name="color"
					initialValue={initialValues?.characteristics?.color}
					rules={[{ required: true, message: "Введіть колір" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Матеріл оббивки"
					name="upholsteryMaterial"
					initialValue={
						initialValues?.characteristics?.upholsteryMaterial
					}
					rules={[{ required: true, message: "Матеріл оббивки" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Матеріл тканини"
					name="frameMaterial"
					initialValue={initialValues?.characteristics?.frameMaterial}
					rules={[{ required: true, message: "Матеріл тканини" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Особливості"
					name="features"
					initialValue={initialValues?.characteristics?.features}
					rules={[{ required: true, message: "Особливості" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Гарантія"
					name="guarantee"
					initialValue={initialValues?.characteristics?.guarantee}
					rules={[{ required: true, message: "Гарантія" }]}
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

export default WardrobesForm;
