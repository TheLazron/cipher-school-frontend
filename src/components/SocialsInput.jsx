import {
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  FormLabel,
  Box,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
const SocialInputField = ({ socialMedia, icon, isDisabled }) => {
  return (
    <Box>
      <FormLabel fontSize={{ sm: "sm", md: "lg" }}>{socialMedia}</FormLabel>
      <InputGroup w={"100%"}>
        <InputLeftElement pointerEvents="none" mr={4}>
          {<Icon as={icon} color="gray.300" />}
        </InputLeftElement>
        <Input
          isDisabled={isDisabled}
          type="text"
          placeholder={socialMedia}
          bgColor="white"
          //   size={{ sm: "sm", md: "lg" }}
        />
      </InputGroup>
    </Box>
  );
};

export default SocialInputField;

SocialInputField.propTypes = {
  icon: PropTypes.element.isRequired,
  socialMedia: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
