import React from "react";
import { List as ListD, Avatar, Rate } from "antd";
import classes from "./BestList.module.scss";

interface Props {
	className?: string;
}

const BestList = ({ className }: Props) => {
	const data = [
		{
			title: "Елегант",
			stars: 5
		},
		{
			title: "Макромея",
			stars: 3
		},
		{
			title: "Матролюкс",
			stars: 2
		},
		{
			title: "Діщенко",
			stars: 4.5
		}
	];
	return (
		<div className={`${classes.list} ${className ?? ""}`}>
			<h2>Найкращі виробники</h2>
			<ListD
				className={classes.listD}
				itemLayout="horizontal"
				bordered
				dataSource={data}
				renderItem={(item) => (
					<ListD.Item>
						<ListD.Item.Meta
							title={
								<a href="https://ant.design">{item.title}</a>
							}
							description={
								<Rate disabled={true} value={item.stars} />
							}
						/>
					</ListD.Item>
				)}
			/>
		</div>
	);
};

export default BestList;
