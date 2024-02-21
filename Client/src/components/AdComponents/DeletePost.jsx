import React from "react";
import {
  Input,
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Box,
  Divider,
} from "@chakra-ui/react";

const DisplayPost = () => {
  return (
    <>
      <Card bg={"#E0E1DD"} color={"#465975"}>
        <CardHeader>
          <Text>Date:</Text>
        </CardHeader>
        <CardBody>
          <Text>Description:</Text>
          <Input h={"100px"} background={"#f0f0f0"} />

          <Text>File:</Text>
          <Input p={"1rem"} h={"60px"} background={"#f0f0f0"} />
        </CardBody>
      </Card>
    </>
  );
};

export default DisplayPost;
