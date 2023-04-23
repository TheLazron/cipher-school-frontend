import { Box, Text } from "@chakra-ui/react";
import Icon from "../components/ScrollDown";

const ScrollDownSection = () => {
  return (
    <Box
      mx={10}
      display="flex"
      flexDirection="column"
      fontSize="3xl"
      fontWeight={500}
      alignItems="center"
      py={{ base: 5, md: 10 }}
    >
      <Text>Scroll Down</Text>
      <Icon />
    </Box>
  );
};

export default ScrollDownSection;
