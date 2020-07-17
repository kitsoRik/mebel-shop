import { Avatar, List, Skeleton } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { useAdminSelector } from "../../../store";
import { getManufactures } from "../../../store/modules/manufactures/actions";
import { Manufacture } from "../../../store/modules/manufactures/types";

interface Props {
	getManufactures?: typeof getManufactures;
}

const Manufacturers = ({ getManufactures }: Props) => {
	useEffect(() => {
		getManufactures!(1);
	}, []);
	const { manufactures } = useAdminSelector(
		({ manufactures: { manufactures } }) => ({
			manufactures,
		})
	);
	return (
		<List
			style={{ width: "100%", height: "100%", background: "white" }}
			loading={false}
			dataSource={manufactures}
			renderItem={({ id, name }) => (
				<List.Item
					actions={[
						<a key="list-loadmore-edit">Редагувати</a>,
						<a key="list-loadmore-more">Детальніше</a>,
					]}
				>
					<List.Item.Meta
						avatar={
							<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						}
						title={
							<Link to={`/admin/views/manufactures/${id}`}>
								{name}
							</Link>
						}
					/>
				</List.Item>
			)}
		/>
	);
};

const mapDispatchToProps = { getManufactures };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Manufacturers);
