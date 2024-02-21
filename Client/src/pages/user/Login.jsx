import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  async function handleClick(e) {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5173/", {
        name,
        password,
      });
    } catch (e) {
      console.log(e);
    }
    navigate("/dashboard");
  }
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
            Login
          </Heading>
          <FormControl action="post" method="post">
            <FormLabel p="1rem" color={"#1D2639"}>
              UserName
            </FormLabel>
            <DefaultInput
              type="name"
              placeholder="UserName"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <FormLabel color={"#1D2639"} p="1rem">
              Password
            </FormLabel>
            <DefaultInput
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Link to={"/Register"}>
              <Text pt="1rem">New Here???</Text>
            </Link>

            <DefaultButton type="submit" onClick={handleClick} align="centre">
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

export default Login;
