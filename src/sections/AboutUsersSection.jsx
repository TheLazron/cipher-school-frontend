import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";

const AboutUser = () => {
  return (
    <Box py={10}>
      <Flex flexDirection="column" mx={10}>
        <Heading
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontSize={{ base: "md", md: "xl" }}>ABOUT ME</Text>
          <Button
            size={{ base: "sm", md: "md" }}
            bgColor="brand.primary"
            color="white"
          >
            Edit
          </Button>
        </Heading>
        <FormControl id="bio" mt={5}>
          <Textarea
            placeholder="Add Something About You"
            bgColor="white"
            resize="none"
            height={{ base: "150px", md: "200px" }}
          />
        </FormControl>
      </Flex>
      <Divider py={2} />
    </Box>
  );
};

export default AboutUser;
