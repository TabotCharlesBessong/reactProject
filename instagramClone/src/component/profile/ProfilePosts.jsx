import React from "react";
import { generateRandomPosts } from "../../constants/data";
import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import { NoPostsFound, ProfilePost } from "..";

const ProfilePosts = () => {
  const posts = generateRandomPosts(13);
  if (posts.length === 0) return <NoPostsFound />;
  // console.log(posts)
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1,fr)",
        md: "repeat(3,1fr)",
      }}
      gap={1}
      columnGap={2}
    >
      <>
      {posts.map((post,index) => (
        <ProfilePost post={post} key={index} />
      ))}
      </>
    </Grid>
  );
};

export default ProfilePosts;
