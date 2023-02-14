import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'

const PrivateRoutes = () => {
  // const loggedIn = false
  const {loading,loggedIn} = useAuthStatus()
  console.log({loading,loggedIn})
  if(loading){
    return <h1>loading...</h1>
  }
  return (
    loggedIn ? <Outlet/> : <Navigate to='/signin' />
  )
}

export default PrivateRoutes