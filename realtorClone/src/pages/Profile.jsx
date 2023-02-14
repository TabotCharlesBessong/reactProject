import React from 'react'
import { useState } from 'react'
// import { User } from 'firebase/auth'
import { auth } from '../firebase'
import {useNavigate} from 'react-router-dom'

const Profile = () => {
  const [formData, setFormData] = useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email
  })
  const [edit, setEdit] = useState(false)
  const {name,email} = formData
  console.log(edit)
  const navigate = useNavigate()

  const logout = () => {
    auth.signOut()
    navigate('/')
  }
  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col' >
        <h1 className='text-3xl text-center mt-6 font-bold' >My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3' >
          <form >
            <input id='name' value={name} type="text" disabled={edit ? 'false' : 'true' } className='edit-form mb-6' />
            <input id='email' value={email} type="email" disabled={edit ? 'false' : 'true' } className='edit-form' />

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg' >
              <p className='flex items-center mb-6' >Do you want to change your details? 
              <span className='ml-2 cursor-pointer text-red-500 hover:text-red-800 transition ease-in-out duration-300' onClick={() => setEdit(!edit)} >edit</span>
              </p>
              <p onClick={logout} className='text-blue-600 hover:text-blue-900
               transition ease-in-out duration-300 cursor-pointer' >Sign out</p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile