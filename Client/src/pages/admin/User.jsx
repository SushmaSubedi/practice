import React from "react";
import Sidebar from "../../components/AdComponents/Sidebar";
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import AdNavbar from "../../components/AdComponents/AdNavbar";
import ApproveUser from "../../components/AdComponents/ApproveUser";
import DeleteUsers from "../../components/AdComponents/DeleteUsers";

const User = () => {
  return (
    <>
      <AdNavbar />
      <Flex
        boxSizing="border-box"
        backgroundColor={"#BFC7D3"}
        w={"100%"}
        h={"100vh"}
      >
        <Sidebar />{" "}
        <Flex width={"87vw"}>
          <Tabs variant="solid-rounded" p={"2rem"}>
            <TabList>
              <Tab _selected={{ color: "#E0E1DD", bg: "#465975" }}>
                Approve Users
              </Tab>
              <Tab _selected={{ color: "#E0E1DD", bg: "#465975" }}>
                Delete Users
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ApproveUser />
              </TabPanel>
              <TabPanel>
                <DeleteUsers />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
};

export default User;
