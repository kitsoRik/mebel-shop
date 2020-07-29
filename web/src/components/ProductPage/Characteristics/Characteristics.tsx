import React from "react";
import { Table } from "antd";

interface Props {
	characteristics: string[][];
}

const columns = [
	{
		title: "Назва характеристики",
		dataIndex: "name",
		key: "name"
	},
	{
		title: "Значення",
		dataIndex: "value",
		key: "value"
	}
];
const Characteristics = ({ characteristics }: Props) => {
	return (
		<div>
			<Table
				dataSource={characteristics.map((c) => ({
					name: c[0],
					value: c[1],
					key: c[0]
				}))}
				columns={columns}
				pagination={false}
			/>
			;
		</div>
	);
};

export default Characteristics;
