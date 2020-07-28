import React, { useState } from "react";
import { Upload } from "antd";
import { UploadFile, UploadChangeParam } from "antd/lib/upload/interface";
import { PlusOutlined } from "@ant-design/icons";
import { baseUrl } from "../../providers/api/api";

interface Props {
	value?: UploadFile<any>[] | string[];
	onChange?: (value: UploadFile<any>[]) => void;
}

const PhotosList = ({ value = [], onChange }: Props) => {
	const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
		if (onChange) onChange(info.fileList);
	};

	const fileList: UploadFile<any>[] =
		value.length === 0
			? []
			: typeof value[0] === "string"
			? (value as string[]).map(
					(v: string): UploadFile<any> => ({
						name: v,
						size: 1,
						type: "",
						uid: v,
						url: `${baseUrl}/static/sofas/photos/${v}`
					})
			  )
			: (value as UploadFile<any>[]);
	return (
		<>
			<Upload
				style={{ maxWidth: "300px" }}
				action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
				listType="picture-card"
				multiple={true}
				fileList={fileList}
				onChange={handleChange}
			>
				<div>
					<PlusOutlined />
					<div>Upload</div>
				</div>
			</Upload>
		</>
	);
};

export default PhotosList;
