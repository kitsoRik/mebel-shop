import React from "react";
import Photo from "../Photo/Photo";
import classes from "./PhotoContainer.module.scss";

interface Props {
	children: JSX.Element | JSX.Element[];
}

const PhotoContainer = ({ children }: Props) => {
	const elements = Array.isArray(children) ? children : [children];
	const photos = elements.filter((e) => e.type === Photo);

	return <div className={classes.container}>{photos}</div>;
};

PhotoContainer.Photo = Photo;

export default PhotoContainer;
