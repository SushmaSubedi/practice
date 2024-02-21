import React from "react";
import AdNavbar from "../../components/AdComponents/AdNavbar";
import {
  Flex,
  Heading,
  Spacer,
  Text,
  Button,
  Box,
  Input,
  HStack,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
const ApproveUser = () => {
  return (
    <Flex
      display="inline-block"
      direction={"column"}
      minWidth={"100%"}
      minHeight="100vh"
      px={"10rem"}
    >
      <br />

      <FormControl>
        <FormLabel p="1rem" color={"#1D2639"}>
          UserName
        </FormLabel>
        <Input bg="#E0E1DD" w={"20rem"} />

        <FormLabel p="1rem" color={"#1D2639"}>
          Email
        </FormLabel>
        <Input bg="#E0E1DD" w={"20rem"} />

        <FormLabel p="1rem" color={"#1D2639"}>
          PhoneNumber
        </FormLabel>
        <Input bg="#E0E1DD" w={"20rem"} />

        <FormLabel color={"#1D2639"} p="1rem">
          Password
        </FormLabel>
        <Input bg="#E0E1DD" w={"20rem"} />
        <br />
        <ButtonGroup pt="2rem" spacing="4rem">
          <Button
            bg="#1D2639"
            w={"8rem"}
            color={"#E0E1DD"}
            _hover={{ bg: "#1D2639" }}
          >
            approve
          </Button>

          <Button
            bg="#1D2639"
            w={"8rem"}
            color={"#E0E1DD"}
            _hover={{ bg: "#1D2639" }}
          >
            Decline
          </Button>
        </ButtonGroup>
      </FormControl>
    </Flex>
  );
};

export default ApproveUser;
