import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { GoogleAuth, Login, Signup } from "..";
import images from "../../constants/images";

const AuthForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src={images.logo} h={24} cursor={"pointer"} alt="Intagram" />
          {isLoggedIn ? <Login /> : <Signup />}

          <Flex>
            <Box flex={2} h={"2px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"2px"} bg={"gray.400"} />
          </Flex>
          <GoogleAuth />
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLoggedIn ? "Dont't have an account" : "Already have an account?"}
          </Box>
          <Box
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Sign up" : "Login"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
