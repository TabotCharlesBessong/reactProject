import React from 'react'
import {Flex,Image,Text} from "@chakra-ui/react"
import images from '../../constants/images';

const GoogleAuth = ({prefix}) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      cursor={"pointer"}
      onClick={() => {}}
    >
      <Image src={images.google} w={5} alt="Google logo" />
      <Text mx="2" color={"blue.500"}>
        {prefix} with Google
      </Text>
    </Flex>
  );
}

export default GoogleAuth