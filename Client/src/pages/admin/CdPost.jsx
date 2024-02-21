import React from "react";
import Sidebar from "../../components/AdComponents/Sidebar";
import AdNavbar from "../../components/AdComponents/AdNavbar";
import {
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Box,
  Button,
} from "@chakra-ui/react";
import CreatePost from "../../components/UserCompnents/CreatePost";
import DisplayPost from "../../components/AdComponents/DeletePost";

const CdPost = () => {
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
        <Flex width={"87vw"}>
          <Tabs variant={"solid-rounded"} p={"2rem"}>
            <TabList>
              <Tab _selected={{ color: "#E0E1DD", bg: "#465975" }}>
                Create Post
              </Tab>
              <Tab _selected={{ color: "#E0E1DD", bg: "#465975" }}>
                Delete Post
              </Tab>
            </TabList>
            <TabPanels p={"3rem"}>
              <TabPanel>
                <CreatePost />
              </TabPanel>
              <TabPanel>
                <DisplayPost />
                <Box pl={"15rem"} pt={"1rem"}>
                  <Button bg={"#1D2639"} color={"#E0E1DD"}>
                    {" "}
                    Delete
                  </Button>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
};

export default CdPost;
