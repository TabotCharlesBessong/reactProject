import React from "react";
import { Spinner, Flex } from "@chakra-ui/react";

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};

export default PageLayoutSpinner;
