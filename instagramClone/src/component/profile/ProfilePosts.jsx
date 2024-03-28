import React from 'react'
import { generateRandomPosts } from '../../constants/data';
import ProfilePost from './ProfilePost';


const ProfilePosts = () => {
  const posts = generateRandomPosts(13)
  // console.log(posts)
  return (
    <>
      {posts.map((post) => (
        <ProfilePost post={post} />
      ))}
    </>
  );
}

export default ProfilePosts