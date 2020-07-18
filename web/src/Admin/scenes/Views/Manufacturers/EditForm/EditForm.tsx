import { Form } from "antd";
import React from "react";
import { useLocationField } from "react-location-query";

interface Props {}

const EditForm = ({}: Props) => {
	const [id] = useLocationField("edit");

	return <Form>{id}</Form>;
};

export default EditForm;
