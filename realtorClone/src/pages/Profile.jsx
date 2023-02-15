import React from 'react'
import { useState } from 'react'
import {updateProfile } from 'firebase/auth'
import { auth,db } from '../firebase'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {collection, doc,getDoc,getDocs,orderBy,query,updateDoc, where} from 'firebase/firestore'
import {FcHome} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { ListingItem, Listings, Spinner } from '../components'
import { useEffect } from 'react'

const Profile = () => {
  const [formData, setFormData] = useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email
  })
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  const [change, setChange] = useState(false)
  const {name,email} = formData
  console.log(change)
  const navigate = useNavigate()

  const logout = () => {
    auth.signOut()
    navigate('/')
  }

  const handleEdit = async () => {
   try{
     if(auth.currentUser.displayName !== name){
      // update the display name in firebase authentication
      await updateProfile(auth.currentUser,{
        displayName:name
      })

      // update name in firestore
      const docRef = doc(db,"landlords",auth.currentUser.uid)
      await updateDoc(docRef,{
        name
      })
      toast.success("Name updated successfully")
     }
   }catch{
    toast.error('Could not update profile details')
   }
  }
  const handleChange = (e) => {
    setFormData((prev)=> ({
      ...prev,
      [e.target.id]:e.target.value
    }))
  }

  useEffect(()=>{
    const fetchUserListings = async ()=>{
      const listingRef = collection(db,'listings')
      const q = query(listingRef,where(
        'userRef','==', auth.currentUser.uid
      ),orderBy('timestamp','desc'))
      const querySnap = await getDocs(q)
      let listings = []
      querySnap.forEach((doc)=>{
        return listings.push({
          id: doc.id,
          data:doc.data()
        })
      })
      setListings(listings)
      setLoading(false)
    }

    fetchUserListings()
  },[auth.currentUser.uid])
  console.log(listings)

  async function onDelete(listingID) {
		if (window.confirm("Are you sure you want to delete?")) {
			await deleteDoc(doc(db, "listings", listingID));
			const updatedListings = listings.filter(
				(listing) => listing.id !== listingID
			);
			setListings(updatedListings);
			toast.success("Successfully deleted the listing");
		}
	}
	function onEdit(listingID) {
		navigate(`/edit-listing/${listingID}`);
	}
  return (
		<>
			<section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
				<h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
				<div className="w-full md:w-[50%] mt-6 px-3">
					<form onSubmit={handleEdit}>
						<input
							id="name"
							value={name}
							type="text"
							disabled={!change}
							className={`edit-form mb-6 ${
								change && "bg-red-200 focus:bg-red-200"
							}`}
							onChange={handleChange}
						/>
						<input
							id="email"
							value={email}
							type="email"
							disabled={!change}
							className="edit-form mb-2"
							onChange={handleChange}
						/>

						<div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
							<p className="flex items-center mb-6">
								Do you want to change your details?
								<span
									onClick={() => {
										change && handleEdit();
										setChange(!change);
									}}
									className="ml-2 cursor-pointer text-red-500 hover:text-red-800 transition ease-in-out duration-300"
								>
									{change ? "Apply Change" : "Edit"}
								</span>
							</p>
							<p
								onClick={logout}
								className="text-blue-600 hover:text-blue-900
               transition ease-in-out duration-300 cursor-pointer"
							>
								Sign out
							</p>
						</div>
					</form>

					<button
						className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded-md shadow-md hover:bg-blue-800 hover:font-bold transition duration-250 ease-in-out hover:shadow-lg active:bg-blue-900"
						type="submit"
					>
						<Link
							className="flex justify-around items-center"
							to="/create-listing"
						>
							<FcHome className="text-4xl bg-red-300 rounded-full p-2 border-2" />
							sell or rent your home
						</Link>
					</button>
				</div>
			</section>
			<div>
				{!loading && listings.length > 0 && (
					<>
						<h2 className="text-3xl text-center font-semibold mb-6">
							My Listings
						</h2>
						<ul className="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
							{listings.map((listing) => (
								<ListingItem
									key={listing.id}
									id={listing.id}
									listing={listing.data}
									onDelete={() => onDelete(listing.id)}
									onEdit={() => onEdit(listing.id)}
								/>
							))}
						</ul>
					</>
				)}
			</div>
		</>
	);
}

export default Profile