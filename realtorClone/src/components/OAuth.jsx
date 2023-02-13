import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth, db} from '../firebase'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

const OAuth = () => {
  const navigate = useNavigate()
	const handleGoogleClick = async () => {
    try {
			// const auth = getAuth()
			const provider = new GoogleAuthProvider()
			const result = await signInWithPopup(auth,provider)
			const landlord = result.user
			// console.log(landlord)

			// check if user already in db
			const landlordDocRef = doc(db,'landlords',landlord.uid)
			const docSnap = await getDoc(landlordDocRef)

			if(!docSnap.exists()){
				await setDoc(landlordDocRef,{
					name:landlord.displayName,
					email:landlord.email,
					timestamps:serverTimestamp()
				})
			}

			navigate('/')
		} catch (error) {
			console.log(error)
			toast.error('Something went wrong try again')
		}
	}
  return (
		<button
			type="button"
			onClick={handleGoogleClick}
			className="flex items-center justify-center w-full bg-red-600 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-700 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded-lg"
		>
			<FcGoogle className="text-2xl  bg-white rounded-full mr-2" />
			Continue with Google
		</button>
	);
}

export default OAuth