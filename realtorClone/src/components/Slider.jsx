import React from 'react'
import { useEffect } from 'react'
import {collection, getDocs, limit, orderBy, query} from 'firebase/firestore'
import {db} from '../firebase'
import { useState } from 'react'
import Spinner from './Spinner'
import {Swiper,SwiperSlide} from 'swiper/react'
import { useNavigate } from 'react-router'
import SwiperCore, { Navigation, Pagination,Autoplay,EffectFade } from "swiper";

const Slider = () => {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  SwiperCore.use([Autoplay, Navigation, Pagination]);
	const navigate = useNavigate();

  useEffect(()=>{
    const fetchListings = async () => {
      const listingsRef = collection(db,'listings')
      const q = query(listingsRef,orderBy('timestamp','desc'),limit(5))
      const querySnap = await getDocs(q)
      let listings = []
      querySnap.forEach((doc) => {
        return listings.push({
          id:doc.id,
          data:doc.data()
        })
      })
      setListings(listings)
      setLoading(false)
    }
    fetchListings()
  },[])

  if(loading) return <Spinner/>
  if(listings.length === 0) return <></>
  return (
		listings && (
			<>
				<Swiper
					sliderPerView={1}
					navigation
					pagination={{ type: "progressbar" }}
					effect="fade"
					modules={[EffectFade]}
					autoplay={{ delay: 3000 }}
				>
					{listings.map(({ data, id }) => (
						<SwiperSlide
							key={id}
							onClick={() => navigate(`/category/${data.type}/${id}`)}
						>
							<div
								style={{
									background: `url(${data.imgUrls[0]}) center, no-repeat`,
									backgroundSize: "cover",
								}}
								className="relative w-full h-[300px] overflow-hidden"
							></div>
							<p className="text-[#f1faee] absolute left-1 top-3 font-medium max-w-[90%] bg-[#457b9d] shadow-lg opacity-90 p-2 rounded-br-3xl">
								{data.name}
							</p>
							<p className="text-[#f1faee] absolute left-1 bottom-1 font-semibold max-w-[90%] bg-[#e63946] shadow-lg opacity-90 p-2 rounded-tr-3xl">
								${data.discountedPrice ?? data.regularPrice}
								{data.type === "rent" && " / month"}
							</p>
						</SwiperSlide>
					))}
				</Swiper>
			</>
		)
	);
}

export default Slider