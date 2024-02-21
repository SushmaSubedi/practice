import React from "react";
import AdNavbar from "../../components/AdComponents/AdNavbar";
import Sidebar from "../../components/AdComponents/Sidebar";
import { Flex } from "@chakra-ui/react";

const Settings = () => {
  return (
    <>
      <AdNavbar />
      <Flex
        boxSizing="border-box"
        backgroundColor={"#BFC7D3"}
        w={"100%"}
        h={"100%"}
      >
        <Sidebar />
        <Flex width={"86vw"}></Flex>
      </Flex>
    </>
  );
};

export default Settings;
