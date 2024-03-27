import React from "react";
import {
  useDisclosure,
  Tooltip,
  Flex,
  Box,
  Button,
  Modal,
  ModalBody,
  FormControl,
  Input,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  FormLabel,
  ModalOverlay
} from "@chakra-ui/react";
import { useRef } from "react";
import { SearchLogo } from "../../constants/logos";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchRef = useRef(null);
  const handleSearchUser = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Tooltip
        hasArrow
        label={"Search"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={onOpen}
        >
          <SearchLogo />
          <Box display={{ base: "none", md: "block" }}>Search</Box>
        </Flex>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
        <ModalOverlay />
        <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
          <ModalHeader>Search user</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={{}}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder="CharlesTabot" ref={searchRef} />
              </FormControl>

              <Flex w={"full"} justifyContent={"flex-end"}>
                <Button
                  type="submit"
                  ml={"auto"}
                  size={"sm"}
                  my={4}
                  // isLoading={false}
                >
                  Search
                </Button>
              </Flex>
            </form>
            {/* {user && <SuggestedUser user={user} setUser={setUser} />} */}
            Charles Tabot
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
