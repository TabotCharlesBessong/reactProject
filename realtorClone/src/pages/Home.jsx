import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ListingItem, Slider } from "../components";
import { db } from "../firebase";

const Home = () => {
	const [offerListings, setOfferListings] = useState(null)
  const [rentListings, setRentListings] = useState(null)
  const [saleListings, setSaleListings] = useState(null)

	useEffect(() => {
		const fetchListings = async () => {
			try {
				const listingRef = collection(db, "listings");
				const q = query(
					listingRef,
					where("offer", "==", true),
					orderBy("timestamps", "desc"),
					limit(4)
				);

        const querySnap = await getDocs(q)
        const listings = []
        querySnap.forEach((doc) => {
          return listings.push({
            id:doc.id,
            data:doc.data()
          })
        })
        setOfferListings(listings)
			} catch (error) {
				console.log(error);
			}
		}
    fetchListings()
	}, [rentListings,setRentListings]);

  useEffect(() => {
		const fetchListings = async ()=> {
			try {
				// get reference
				const listingsRef = collection(db, "listings");
				// create the query
				const q = query(
					listingsRef,
					where("type", "==", "rent"),
					orderBy("timestamp", "desc"),
					limit(4)
				);
				// execute the query
				const querySnap = await getDocs(q);
				const listings = [];
				querySnap.forEach((doc) => {
					return listings.push({
						id: doc.id,
						data: doc.data(),
					});
				});
				setRentListings(listings);
			} catch (error) {
				console.log(error);
			}
		}
		fetchListings();
	}, []);

  useEffect(() => {
		const fetchListings = async () => {
			try {
				// get reference
				const listingsRef = collection(db, "listings");
				// create the query
				const q = query(
					listingsRef,
					where("type", "==", "sell"),
					orderBy("timestamp", "desc"),
					limit(4)
				);
				// execute the query
				const querySnap = await getDocs(q);
				const listings = [];
				querySnap.forEach((doc) => {
					return listings.push({
						id: doc.id,
						data: doc.data(),
					});
				});
				setSaleListings(listings);
			} catch (error) {
				console.log(error);
			}
		}
		fetchListings();
	}, []);
	console.log(offerListings)
	return (
		<div>
			<Slider />
			<div className="max-w-6xl mx-auto pt-4 space-y-6">
				{offerListings && offerListings.length > 0 && (
					<div className="m-2 mb-6">
						<h2 className="px-3 text-2xl mt-6 font-semibold">Recent offers</h2>
						<Link to="/offers">
							<p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
								Show more offers
							</p>
						</Link>
						<ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
							{offerListings.map((listing) => (
								<ListingItem
									key={listing.id}
									listing={listing.data}
									id={listing.id}
								/>
							))}
						</ul>
					</div>
				)}
				{rentListings && rentListings.length > 0 && (
					<div className="m-2 mb-6">
						<h2 className="px-3 text-2xl mt-6 font-semibold">
							Places for rent
						</h2>
						<Link to="/category/rent">
							<p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
								Show more places for rent
							</p>
						</Link>
						<ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
							{rentListings.map((listing) => (
								<ListingItem
									key={listing.id}
									listing={listing.data}
									id={listing.id}
								/>
							))}
						</ul>
					</div>
				)}
				{saleListings && saleListings.length > 0 && (
					<div className="m-2 mb-6">
						<h2 className="px-3 text-2xl mt-6 font-semibold">
							Places for sale
						</h2>
						<Link to="/category/sale">
							<p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
								Show more places for sale
							</p>
						</Link>
						<ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
							{saleListings.map((listing) => (
								<ListingItem
									key={listing.id}
									listing={listing.data}
									id={listing.id}
								/>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
