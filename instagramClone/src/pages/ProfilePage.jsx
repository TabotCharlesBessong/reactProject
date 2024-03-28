import React from "react";
// import { useParams } from 'react-router-dom'
import { Container, Flex } from "@chakra-ui/react";
import { ProfileHeader } from "../component";
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
      Profile Post
    </Flex>
  </Container>);
};

export default ProfilePage;
