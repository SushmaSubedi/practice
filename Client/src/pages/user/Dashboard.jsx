import React from "react";
import Navbar from "../../components/UserCompnents/navbar";
import DisplayPost from "../../components/AdComponents/DeletePost";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      {/*
      <Flex
        boxSizing="border-box"
        backgroundColor={"#BFC7D3"}
        w={"100vw"}
        h={"100vh"}
      >
        <Box width="500px" p={"3rem"}>
          <DisplayPost />
        </Box>
      </Flex> */}
      <SimpleGrid
        backgroundColor={"#BFC7D3"}
        w={"100vw"}
        h={"100vh"}
        spacing={10}
        minChildWidth={"500px"}
      >
        <Box width="500px" p={"2rem"}>
          <DisplayPost />
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Dashboard;
