import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SwiperCore, {
  Autoplay, EffectFade, Navigation,
  Pagination
} from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Spinner } from "../components";
import { db } from "../firebase";

const Listing = () => {
	const params = useParams();
	const [listing, setListing] = useState(null);
	const [loading, setLoading] = useState(true);

	SwiperCore.use([Autoplay, Navigation, Pagination]);

	useEffect(() => {
		const fetchListing = async () => {
			const docRef = doc(db, "listings", params.listingId);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				setListing(docSnap.data());
				setLoading(false);
				console.log(listing);
			}
		};
		fetchListing();
	}, [params.listingId]);

	if (loading) return <Spinner />;
	return (
		<main>
			<Swiper
				slidesPerView={1}
				navigation
				pagination={{
					type: "progressbar",
				}}
				effect="fade"
				modules={[EffectFade]}
				autoplay={{ delay: 3000 }}
			>
				{listing.imgUrls.map((url, index) => (
					<SwiperSlide key={index}>
						<div
							style={{
								background: `url(${listing.imgUrls[index]}) center no-repeat`,
								backgroundSize: "cover",
							}}
							className="relative w-full overflow-hidden h-[300px]"
						></div>
					</SwiperSlide>
				))}
			</Swiper>
		</main>
	);
};

export default Listing;
