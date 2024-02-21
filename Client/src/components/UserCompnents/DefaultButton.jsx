import React from "react";
import { Box, Button } from "@chakra-ui/react";

const DefaultButton = (props) => {
  return (
    <Box p={"3rem"}>
      <Button
        bg="#1D2639"
        variant={"solid"}
        align={"centre"}
        color="#E0E1DD"
        onClick={props.onClick}
        type={props.type || "button"}
        _hover={{ bg: "#1D2659" }}
        w={"10rem"}
        fontSize={"lg"}
      >
        {props.children}
      </Button>
    </Box>
  );
};

export default DefaultButton;
