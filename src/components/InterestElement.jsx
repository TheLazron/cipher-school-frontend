import { Badge } from "@chakra-ui/react";
import PropTypes from "prop-types";
const InterestElement = ({ text }) => {
  return (
    <Badge
      textAlign={"center"}
      bgColor="brand.primary"
      color="white"
      variant="subtle"
      rounded="2xl"
      p={3}
      width="fit-content"
      fontSize={{ base: "xs", md: "lg" }}
    >
      {text}
    </Badge>
  );
};

InterestElement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InterestElement;
