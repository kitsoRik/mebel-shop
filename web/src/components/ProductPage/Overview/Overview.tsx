import React from "react";
import Photo from "./Photo";
import PhotoContainer from "./PhotoContainer";
import Title from "./Title";

interface Props {
	children: JSX.Element | JSX.Element[];
	photos: JSX.Element[];
}

const Overview = ({ children, photos }: Props) => {
	const elements = (Array.isArray(children) ? children : [children]).filter(
		(e) => e
	);

	const title = elements.find((e) => e.type === Title);

	return (
		<div>
			<div>{title}</div>
			<div>
				<PhotoContainer>{photos}</PhotoContainer>
			</div>
		</div>
	);
};

Overview.Title = Title;
Overview.Photo = Photo;

export default Overview;
