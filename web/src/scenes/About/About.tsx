import React from "react";
import { Result, Button } from "antd";
import { SmileOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			<Result
				icon={<SmileOutlined />}
				title={
					<div>
						<h5>Привіт, це опис магазину</h5>
						<h6>Тут інформація про магазин</h6>
						<span>
							<HomeOutlined /> Місцезнаходження: м. Тернопіль,
							вул. Тернопільська 123
						</span>
					</div>
				}
				extra={
					<Button type="primary">
						<Link to="/">На головну</Link>
					</Button>
				}
			/>
		</>
	);
};

export default About;
