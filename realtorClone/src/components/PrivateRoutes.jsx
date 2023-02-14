import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'
import {Spinner} from '../components'

const PrivateRoutes = () => {
  // const loggedIn = false
  const {loading,loggedIn} = useAuthStatus()
  console.log({loading,loggedIn})
  if(loading){
    return <Spinner/>
  }
  return (
    loggedIn ? <Outlet/> : <Navigate to='/signin' />
  )
}

export default PrivateRoutes