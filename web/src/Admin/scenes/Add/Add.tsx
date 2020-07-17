import { Button, Form } from "antd";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Add = () => {
	return (
		<div>
			<Form>
				<Form.Item>
					<Button>
						<Link to="/admin/add/sofa">Додати диван</Link>
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Add;
