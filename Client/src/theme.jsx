import React from "react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    fonts: {
      heading: "Sora",
      body: "sora",
    },
    // Button: {
    //   baseStyle: {
    //     fontWeight: "bold",

    //   },
    // },
  },
  sizes: {
    xl: {
      h: "50px",
      fontSize: "lg",
      px: "32px",
    },
    m: {
      h: "35px",
      fontSize: "m",
      px: "22px",
    },
    s: {
      h: "20px",
      fontSize: "s",
      px: "15px",
    },
  },
});

export default theme;
