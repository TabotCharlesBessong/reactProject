import React from "react";
import ListItem from "./ListingItem";

const Listings = () => {
	return (
		<div>
			<h1 className="capitalize text-3xl text-center mt-6 font-bold">
				my listings
			</h1>
			<ListItem />
		</div>
	);
};

export default Listings;
