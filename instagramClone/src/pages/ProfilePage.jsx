import React from "react";
// import { useParams } from 'react-router-dom'
import { Container, Flex } from "@chakra-ui/react";
import { ProfileHeader, ProfilePosts } from "../component";
import ProfileTabs from "../component/profile/ProfileTabs";

const ProfilePage = () => {
  // const {username} = useParams()
  return (
    <Container>
      <Flex>
        <ProfileHeader />
        {/* <ProfileSkeleton /> */}
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        direction={"column"}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;
