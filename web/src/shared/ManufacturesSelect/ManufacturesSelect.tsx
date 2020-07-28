import React, { useState } from "react";
import { Select } from "antd";
import useManufactures from "../../Admin/hooks/useManufactures";

interface Props {
	value?: any;
	onChange?: (value: any) => void;
}

const ManufacturesSelect = ({ value, onChange }: Props) => {
	const [manufacturesName, setManufacturesName] = useState("");

	const { manufactures, loading: manufactoresLoading } = useManufactures(
		manufacturesName
	);

	return (
		<Select
			showSearch
			style={{ width: 200 }}
			placeholder="Select a person"
			onSearch={(value) => setManufacturesName(value.toString())}
			onChange={(value) => {
				if (onChange) onChange(value);
			}}
			filterOption={() => true}
			loading={manufactoresLoading}
			value={manufactures.find((m) => m.id === +value)?.name}
		>
			{manufactures.map(({ id, name }) => (
				<Select.Option key={id} value={`${id}`}>
					{name}
				</Select.Option>
			))}
		</Select>
	);
};

export default ManufacturesSelect;
