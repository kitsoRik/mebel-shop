import {
	AutoComplete,
	Button,
	Form,
	Input,
	Mentions,
	Select,
	Upload
} from "antd";
import { useForm } from "antd/lib/form/Form";
import { Option } from "antd/lib/mentions";
import React, { useState } from "react";
import { reduceEachTrailingCommentRange } from "typescript";
import useManufactures from "../../../hooks/useManufactures";
import PhotosList from "../../../../shared/PhotosList";
import { Sofa } from "../../../store/modules/sofas/types";
import { UploadFile } from "antd/lib/upload/interface";
import ManufacturesSelect from "../../../../shared/ManufacturesSelect";

interface AddProps {
	add: true;
	addAction: (manufactureId: number, name: string, photos: File[]) => any;
	afterAdded: () => any;
}

interface EditProps {
	edit: true;
	initialValues: Sofa;
	editAction: (
		manufacture: number,
		name: string,
		photos: (File | string)[],
		removedPhotos: string[]
	) => any;
	afterEdited: () => any;
}

const SofasForm = (props: AddProps | EditProps) => {
	const [form] = useForm();
	const onFinish = async () => {
		if ("edit" in props) {
			const { manufacture, name, photos } = form.getFieldsValue();
			const removedPhotos =
				typeof photos[0] === "string"
					? []
					: props.initialValues.photos.filter(
							(p) =>
								!photos.find(
									(photo: UploadFile) => photo.name === p
								)
					  );
			const { error }: any = await props.editAction!(
				manufacture ? +manufacture : 1,
				name,
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
			const { manufacture, name, photos } = form.getFieldsValue();
			const { error }: any = await props.addAction(
				manufacture ? +manufacture : -1,
				name,
				photos.map((p: UploadFile) => p.originFileObj)
			);
			if (error) {
				console.log(error);
			} else {
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
				name="manufacture"
				label="Виробник"
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 16 }}
				// rules={[
				// 	{
				// 		message: "123",
				// 		validator: (r: any, value: any) => {
				// 			if (
				// 				!manufactures.map((m) => m.name).includes(value)
				// 			) {
				// 				return Promise.reject();
				// 			}
				// 			return Promise.resolve();
				// 		}
				// 	}
				// ]}
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
