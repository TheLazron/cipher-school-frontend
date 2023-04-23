import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: "#F3912E",
    secondary: "#f2f5fa",
    black: "#353a42",
  },
  primaryTheme: {
    bgColor: "#F3912E",
    color: "redf",
  },
};

const customTheme = extendTheme({
  colors: colors,
});

export default customTheme;
