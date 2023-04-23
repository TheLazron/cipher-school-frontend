/* eslint-disable react/prop-types */
// import { useState } from "react";
import { Box, Checkbox, Text, useCheckbox } from "@chakra-ui/react";

const CustomCheckBox = (props) => {
  const { state, getCheckboxProps, getInputProps } = useCheckbox(props);

  return (
    <Box
      as="label"
      display="flex"
      alignItems="center"
      cursor="pointer"
      userSelect="none"
      w={"100%"}
    >
      <input {...getInputProps()} hidden />
      <Checkbox
        size="sm"
        colorScheme="brand.primary"
        mr={2}
        display="none"
        {...getCheckboxProps()}
      />
      <Box
        size="lg"
        p={19}
        borderWidth="1px"
        borderRadius="md"
        borderColor={state.isChecked ? "brand.primary" : "gray.400"}
        bgColor={state.isChecked ? "brand.primary" : ""}
        transition="background-color 0.2s"
        color={state.isChecked ? "white" : "brand.black"}
      >
        <Text>{props.value}</Text>
      </Box>
      {/* <Box ml={2}>{label}</Box> */}
    </Box>
  );
};

export default CustomCheckBox;

// /* eslint-disable react/prop-types */
// // import { useState } from "react";
// import { Box, Checkbox, Text, useCheckboxGroup } from "@chakra-ui/react";
// import { joinString } from "../utils/lodash.-utils";
// import { useState } from "react";

// const CustomCheckBox = ({ label, value, onChange }) => {
//   //   const { value, onChange } = useCheckboxGroup();
//   //   console.log("value", value);
//   //   const isChecked = value.includes(joinString(label));
//   //   const isChecked = value.includes(joinString(label));
//   //   if (value.includes(joinString(label))) {
//   //     setIsChecked(true);
//   //   } else {
//   //     setIsChecked(false);
//   //   }
//   const [isChecked, setIsChecked] = useState(value.includes(label));

//   const handleChange = (isChecked) => {
//     setIsChecked(isChecked);

//     if (isChecked) {
//       onChange([...value, label]);
//     } else {
//       onChange(value.filter((val) => val !== label));
//     }
//   };

//   return (
//     <Box
//       as="label"
//       display="flex"
//       alignItems="center"
//       cursor="pointer"
//       userSelect="none"
//     >
//       <Checkbox
//         isChecked={isChecked}
//         onChange={() => handleChange(!isChecked)}
//         value={label}
//         size="sm"
//         colorScheme="brand.primary"
//         mr={2}
//         display="none"
//       />
//       <Box
//         size="lg"
//         p={19}
//         borderWidth="1px"
//         borderRadius="md"
//         borderColor={isChecked ? "brand.primary" : "gray.400"}
//         bgColor={isChecked ? "brand.primary" : ""}
//         transition="background-color 0.2s"
//         color={isChecked ? "white" : "brand.black"}
//       >
//         <Text>{label}</Text>
//       </Box>
//       {/* <Box ml={2}>{label}</Box> */}
//     </Box>
//   );
// };

// export default CustomCheckBox;
