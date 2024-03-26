import React from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Flex, Box } from "@chakra-ui/react";
import { PageLayoutSpinner } from "../component";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && "user";
  const canRenderNavbar = !user && !loading && pathname !== "/auth";

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner /> ;
  return (
    <Flex>
      {canRenderSidebar ? <Box>sidebar</Box> : null}
      {canRenderNavbar && "Navbar" }
      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% -240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
