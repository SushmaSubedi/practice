import React from "react";
import { Flex, Box, Button, Text } from "@chakra-ui/react";

const DeleteUsers = () => {
  return (
    <Flex padding={"2rem"}>
      <Box bgColor={"#E0E1DD"} w={"500px"} height={"250px"}>
        <Text pt={"2rem"} pl={"2rem"}>
          Username:
        </Text>
        <Text pt={"2rem"} pl={"2rem"}>
          Email:
        </Text>
        <Text pt={"2rem"} pl={"2rem"}>
          PhoneNumber:
        </Text>

        <Box pt={"2rem"} pl={"19rem"}>
          <Button
            bg="#1D2639"
            w={"8rem"}
            align={"centre"}
            color={"#E0E1DD"}
            _hover={{ bg: "#1D2639" }}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default DeleteUsers;
