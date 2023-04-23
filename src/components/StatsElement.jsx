import { Box, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
const StatsElement = ({ text, subText }) => {
  return (
    <Box>
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          //   fontSize={"6xl"}
          fontSize={{ base: "3xl", sm: "5xl", lg: "6xl" }}
          fontWeight={"bold"}
          color="brand.primary"
          textAlign="center"
        >
          {text}
        </Text>
        <Box fontSize={"xl"} fontWeight={"medium"} textAlign="center">
          {subText}
        </Box>
      </Flex>
    </Box>
  );
};

StatsElement.propTypes = {
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};

export default StatsElement;
