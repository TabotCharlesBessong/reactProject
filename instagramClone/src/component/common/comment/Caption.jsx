import React from 'react'
import {Avatar,Flex,Text} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import images from '../../../constants/images'

const Caption = () => {
  return (
    <Flex>
      <Link to={"/profile/23"} >
        <Avatar src={images.charles} />
      </Link>
      <Flex direction={"column"} >
        <Flex gap={2} alignItems={"center"} >
          <Link to={"/profile/23"} >
            <Text fontWeight={"bold"} fontSize={12} >
              CharlesTabot
            </Text>
          </Link>
          <Text>Caption</Text>
        </Flex>
        <Text>12m ago</Text>
      </Flex>
    </Flex>
  )
}

export default Caption