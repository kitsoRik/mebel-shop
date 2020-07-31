import React, { useEffect, useState } from "react";
import api from "../../../../providers/api";
import { Button } from "antd";
import { Manufacture } from "@mebel-shop/data-objects";
import { Link } from "react-router-dom";

const Manufactures = () => {
	const [manufactures, setManufactures] = useState<null | Manufacture[]>(
		null
	);

	useEffect(() => {
		loadPopularManufactures();
	}, []);

	const loadPopularManufactures = async () => {
		const { manufactures } = await api.manufactures.getPopularManufactures(
			1,
			10
		);

		setManufactures(manufactures);
	};

	if (manufactures === null) return null;

	return (
		<>
			{manufactures.map((manufacture) => (
				<Button type="primary">
					<Link to={`/manufactures/${manufacture.id}`}>
						{manufacture.name}
					</Link>
				</Button>
			))}
		</>
	);
};

export default Manufactures;
