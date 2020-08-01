import React from "react";
import { Table, Typography } from "antd";

const columns = [
	{ title: "Ім'я", dataIndex: "name", key: "name" },
	{ title: "Вік", dataIndex: "age", key: "age" },
	{ title: "Номер телефону", dataIndex: "phone", key: "phone" }
];

const data = [
	{
		key: 1,
		name: "Ростислав",
		age: 19,
		phone: "+38 (097) 999-99-99"
	},
	{
		key: 2,
		name: "Ростислав",
		age: 20,
		phone: "+38 (097) 888-88-88"
	},
	{
		key: 3,
		name: "Ростислав",
		age: 21,
		phone: "+38 (097) 999-99-99"
	},
	{
		key: 4,
		name: "Ростислав",
		age: 22,
		phone: "+38 (097) 999-99-99"
	},
	{
		key: 5,
		name: "Ростислав",
		age: 23,
		phone: "+38 (097) 999-99-99"
	},
	{
		key: 6,
		name: "Ростислав",
		age: 24,
		phone: "+38 (097) 999-99-99"
	}
];

const Contacts = () => {
	return (
		<div>
			<Typography.Title>Контакти</Typography.Title>
			<Table columns={columns} dataSource={data} pagination={false} />,
		</div>
	);
};

export default Contacts;
