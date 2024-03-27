import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import { AuthForm } from "../component";
import images from "../constants/images";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left hand-side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src={images.auth} h={650} alt="Phone img" />
          </Box>

          {/* Right hand-side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src={images.playstore} h={"10"} alt="Playstore logo" />
              <Image src={images.microsoft}h={"10"} alt="Microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
