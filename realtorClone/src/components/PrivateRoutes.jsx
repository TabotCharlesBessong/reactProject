import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const loggedIn = true
  return (
    loggedIn ? <Outlet/> : <Navigate to='/signin' />
  )
}

export default PrivateRoutes