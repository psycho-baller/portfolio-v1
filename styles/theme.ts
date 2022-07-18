import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    // body: `'Poppins', sans-serif`,
  },
  config,
});

export default theme;
