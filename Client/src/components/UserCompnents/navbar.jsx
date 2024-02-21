import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DefaultInput from "./DefaultInput";
import { TfiSearch } from "react-icons/tfi";

function Navbar() {
  return (
    <Flex
      display={"inline-flex"}
      as="nav"
      align="center"
      bg="#1D2639"
      py="0.5rem"
      px="1rem"
      w="100vw"
      direction="row"
    >
      <Heading as="span" display="inline" color="#E0E1DD">
        MisMatch
      </Heading>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Input
        width="15rem"
        bg={"#465975"}
        color={"#E0E1DD"}
        placeholder="Search..."
      ></Input>
      <Spacer />
      <Link to="/">
        <Box>
          <Button bg="#E0E1DD" color="#1D2639">
            Logout
          </Button>
        </Box>
      </Link>
    </Flex>
  );
}
export default Navbar;
