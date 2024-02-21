import React from "react";
import AdNavbar from "../AdNavbar";
import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineContainer } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import "./index.css";

const Sidebar = () => {
  return (
    <>
      <Flex display={"inline-block"} h={"100vh"}>
        <Box
          py={"1rem"}
          color={"#E0E1DD"}
          bg={"#465975"}
          minH={"100%"}
          minW={"200px"}
        >
          <NavLink to={"/User"}>
            <Flex
              _hover={{ bg: "#576A86" }}
              p={"1rem"}
              w={"100%"}
              alignItems={"center"}
            >
              <AiOutlineUser />
              <Text ml={"0.5rem"}>User</Text>
            </Flex>
          </NavLink>
          <NavLink to={"/content"}>
            <Flex
              _hover={{ bg: "#576A86" }}
              p={"1rem"}
              w={"100%"}
              alignItems={"center"}
            >
              <AiOutlineContainer />
              <Text ml={"0.5rem"}>Post</Text>
            </Flex>
          </NavLink>
          <NavLink to={"/Settings"}>
            <Flex
              _hover={{ bg: "#576A86" }}
              p={"1rem"}
              w={"100%"}
              alignItems={"center"}
            >
              <AiOutlineSetting />
              <Text ml={"0.5rem"}>Settings</Text>
            </Flex>
          </NavLink>
          <NavLink to={"/Logout"}>
            <Flex
              _hover={{ bg: "#576A86" }}
              p={"1rem"}
              w={"100%"}
              alignItems={"center"}
            >
              <AiOutlineLogout />
              <Text ml={"0.5rem"}>Logout</Text>
            </Flex>
          </NavLink>
        </Box>
      </Flex>
    </>
  );
};

export default Sidebar;
