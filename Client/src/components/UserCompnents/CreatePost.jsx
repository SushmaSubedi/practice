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
import DefaultButton from "./DefaultButton";

const CreatePost = () => {
  return (
    <Card bg={"#E0E1DD"} color={"#465975"}>
      <CardHeader>
        <Heading>Create Post</Heading>
        <Text>Published Date:</Text>
      </CardHeader>
      <CardBody>
        <Text>Description:</Text>
        <Input h={"100px"} background={"#f0f0f0"} />

        <Text>File:</Text>
        <Input p={"1rem"} h={"60px"} type="file" background={"#f0f0f0"} />
      </CardBody>
      <Divider
        borderWidth="3px"
        borderStyle="solid" // change the style of the border
        borderRadius="5"
        color={"#BFC7D3"}
      />
      <CardFooter>
        <Box pl={"15rem"}>
          <Button bg={"#1D2639"} color={"#E0E1DD"}>
            {" "}
            Create
          </Button>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default CreatePost;
