import React from "react";
import { Avatar, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AdNavbar = () => {
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
      <Link to="/">
        <Heading as="span" display="inline" color="#E0E1DD">
          MisMatch
        </Heading>
      </Link>
    </Flex>
  );
};

export default AdNavbar;
