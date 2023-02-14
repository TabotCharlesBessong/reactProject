import React from 'react'
import { useState } from 'react'
import {updateProfile } from 'firebase/auth'
import { auth,db } from '../firebase'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {doc,getDoc,setDoc,updateDoc} from 'firebase/firestore'
// import {} from ''

const Profile = () => {
  const [formData, setFormData] = useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email
  })
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
							className={`edit-form mb-6 ${change && 'bg-red-200 focus:bg-red-200' }`}
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
                    change && handleEdit()
                    setChange(!change)
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
				</div>
			</section>
		</>
	);
}

export default Profile