import React from "react";
import { List as ListD, Avatar } from "antd";

const List = () => {
	const data = [
		{
			title: "Ant Design Title 1"
		},
		{
			title: "Ant Design Title 2"
		},
		{
			title: "Ant Design Title 3"
		},
		{
			title: "Ant Design Title 4"
		}
	];
	return (
		<div>
			<h2>Title</h2>
			<ListD
				itemLayout="horizontal"
				dataSource={data}
				renderItem={(item) => (
					<ListD.Item>
						<ListD.Item.Meta
							avatar={
								<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
							}
							title={
								<a href="https://ant.design">{item.title}</a>
							}
							description="Ant Design, a design language for background applications, is refined by Ant UED Team"
						/>
					</ListD.Item>
				)}
			/>
		</div>
	);
};

export default List;
