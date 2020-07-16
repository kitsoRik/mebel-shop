import React from "react";
import Photo from "./Overview/Photo";
import ProductPage from "./ProductPage";

const ProductPageSofa = () => {
	return (
		<ProductPage>
			<ProductPage.Overview photos={[<Photo />, <Photo />]}>
				<ProductPage.Overview.Title text="The best sofa in the world" />
			</ProductPage.Overview>
		</ProductPage>
	);
};

export default ProductPageSofa;
