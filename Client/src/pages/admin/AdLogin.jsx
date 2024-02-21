import React from "react";
import AdNavbar from "../../components/AdComponents/AdNavbar";
import { Flex, Heading, Spacer, Text, Box } from "@chakra-ui/react";
import DefaultButton from "../../components/UserCompnents/DefaultButton";
import DefaultInput from "../../components/UserCompnents/DefaultInput";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AdLogin = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/user");
  };
  return (
    <>
      <AdNavbar />
      <Flex>
        <Flex
          display="inline-block"
          direction={"column"}
          w="50vw"
          minWidth={"50%"}
          minHeight="100vh"
          px={"5rem"}
          bg={"#7B8CA6"}
          bgPosition={"left"}
        >
          <br />
          <Heading p="2rem" display={"block"} color={"#1D2639"}>
            Admin Login
          </Heading>
          <FormControl action="post" method="post">
            <FormLabel p="1rem" color={"#1D2639"}>
              UserName
            </FormLabel>
            <DefaultInput />

            <FormLabel color={"#1D2639"} p="1rem">
              Password
            </FormLabel>
            <DefaultInput />

            <DefaultButton onClick={handleClick} align="centre">
              Login
            </DefaultButton>
          </FormControl>
        </Flex>
        <Flex
          display="inline-block"
          minWidth={"50%"}
          minHeight="100vh"
          bgPosition={"right"}
        >
          <Image
            minWidth={"100%"}
            height={"100vh"}
            objectFit={"cover"}
            src="../../../src/assets/images/Connection.jpg"
            alt="Connection"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default AdLogin;
