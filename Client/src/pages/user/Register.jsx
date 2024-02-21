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
import { Form, Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
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
            Register
          </Heading>

          <FormControl action="submit" method="post">
            <FormLabel p="1rem" color={"#1D2639"}>
              UserName
            </FormLabel>

            <DefaultInput />
            <FormLabel p="1rem" color={"#1D2639"}>
              Email
            </FormLabel>

            <DefaultInput />
            <FormHelperText>We wont share your email address</FormHelperText>
            <FormLabel p="1rem" color={"#1D2639"}>
              PhoneNumber
            </FormLabel>
            <DefaultInput />
            <FormHelperText>enter valid 10 digit number</FormHelperText>

            <FormLabel color={"#1D2639"} p="1rem">
              Password
            </FormLabel>
            <DefaultInput
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Link to={"/"}>
              <Text pt="1rem">Already have an account???</Text>
            </Link>

            <DefaultButton onClick={handleSubmit} align="centre">
              Register
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

export default Register;
