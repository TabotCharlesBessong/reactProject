import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Container>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          Feedpost
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          Suggested posts
        </Box>
      </Flex>
    </Container>
  );
};

export default Homepage;
