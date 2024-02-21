import { Input } from "@chakra-ui/react";
import React from "react";

const DefaultInput = (props) => {
  return (
    <Input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      type={props.type || "text"}
      borderWidth="2px"
      borderColor="#E0E1DD"
      size="md"
      bg="#E0E1DD"
      borderRadius="0.15rem"
      width={"60%"}
    />
  );
};

export default DefaultInput;
