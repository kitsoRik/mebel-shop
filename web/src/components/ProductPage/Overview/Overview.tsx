import React from "react";
import Photo from "./Photo";
import PhotoContainer from "./PhotoContainer";
import Title from "./Title";
import Description from "./Description";
import classes from "./Overview.module.scss";

interface Props {
	children: JSX.Element | JSX.Element[];
	photos: JSX.Element[];
}

const Overview = ({ children, photos }: Props) => {
	const elements = (Array.isArray(children) ? children : [children]).filter(
		(e) => e
	);

	const title = elements.find((e) => e.type === Title);
	const description = elements.find((e) => e.type === Description);

	return (
		<div className={classes.overview}>
			<div>
				<div>{title}</div>
				<div>
					<PhotoContainer>{photos}</PhotoContainer>
				</div>
			</div>
			<div>{description}</div>
		</div>
	);
};

Overview.Title = Title;
Overview.Description = Description;
Overview.Photo = Photo;

export default Overview;
