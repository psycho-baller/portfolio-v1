import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
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
