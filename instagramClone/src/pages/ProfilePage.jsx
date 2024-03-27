import React from "react";
// import { useParams } from 'react-router-dom'
import { Container, Flex } from "@chakra-ui/react";
import { ProfileSkeleton } from "../component";

const ProfilePage = () => {
  // const {username} = useParams()
  return (<Container>
    <Flex>
      <ProfileSkeleton />
    </Flex>
    <Flex>
      Profile Tabs
      Profile Post
    </Flex>
  </Container>);
};

export default ProfilePage;
