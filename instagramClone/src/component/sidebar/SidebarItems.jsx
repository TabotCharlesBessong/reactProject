import React from 'react'
import { CreatePost, HomeSide, Notifications, ProfileLink, Search } from '..'

const SidebarItems = () => {
  return (
    <>
      <HomeSide />
      <Search />
      <Notifications />
      <CreatePost />
      <ProfileLink />
    </>
  )
}

export default SidebarItems