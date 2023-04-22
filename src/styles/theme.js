import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: "#F3912E",
    secondary: "#ffffff",
    black: "#353a42",
  },
};

const customTheme = extendTheme({
  colors: colors,
});

export default customTheme;
