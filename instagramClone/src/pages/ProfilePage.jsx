import React from "react";
// import { useParams } from 'react-router-dom'
import { Container, Flex } from "@chakra-ui/react";
import { ProfileHeader, ProfilePosts } from "../component";
import ProfileTabs from "../component/profile/ProfileTabs";

const ProfilePage = () => {
  // const {username} = useParams()
  return (<Container>
    <Flex>
      <ProfileHeader />
      {/* <ProfileSkeleton /> */}
    </Flex>
    <Flex>
      <ProfileTabs />
      <ProfilePosts />
    </Flex>
  </Container>);
};

export default ProfilePage;
