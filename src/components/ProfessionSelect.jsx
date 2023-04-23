import { Select, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ProfessionSelect = ({ heading, options, isDisabled }) => {
  return (
    <Stack spacing={2}>
      <Text
        fontWeight="bold"
        fontSize={useBreakpointValue({ xs: "sm", sm: "md", md: "xl" })}
      >
        {heading}
      </Text>
      <Select
        colorScheme="green"
        variant="filled"
        placeholder={heading}
        isDisabled={isDisabled}
      >
        {options.map((option, i) => {
          return (
            <option key={i} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </Select>
    </Stack>
  );
};

ProfessionSelect.propTypes = {
  heading: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
export default ProfessionSelect;
