import React from 'react'
import {Flex,Avatar,Text} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import images from '../../../constants/images';

const Comment = () => {
  return (
    <Flex gap={4}>
      <Link to={"/profile/23"}>
        <Avatar src={images.charles} size={"sm"} />
      </Link>
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Link to={"/profile/23"}>
            <Text fontWeight={"bold"} fontSize={12}>
              {/* {userProfile.username} */}
              CharlesTabot
            </Text>
          </Link>
          <Text fontSize={14}>Hi nice one, keep it up</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {/* {timeAgo(comment.createdAt)} */}
          2h ago
        </Text>
      </Flex>
    </Flex>
  );
}

export default Comment