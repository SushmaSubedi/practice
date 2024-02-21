import React from "react";
import Sidebar from "../../components/AdComponents/Sidebar";
import AdNavbar from "../../components/AdComponents/AdNavbar";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <>
      <AdNavbar />
      <Flex
        boxSizing="border-box"
        backgroundColor={"#BFC7D3"}
        w={"100%"}
        h={"100%"}
      >
        <Sidebar />
        <Flex padding={"2rem"} width={"86vw"}>
          <Box bgColor={"#E0E1DD"} height={"180px"}>
            <Text padding={"2rem"}>Are you sure you want to logout???</Text>
            <Link to={"/Adlogin"}>
              <Box pl={"5rem"}>
                <Button
                  bg="#1D2639"
                  w={"8rem"}
                  align={"centre"}
                  color={"#E0E1DD"}
                  _hover={{ bg: "#1D2639" }}
                >
                  Logout
                </Button>
              </Box>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Logout;
