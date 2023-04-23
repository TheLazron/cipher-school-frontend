import { SmallAddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
const HeroSection = () => {
  return (
    <Box
      display="flex"
      //   justifyContent={"space-between"}
      alignItems={"center"}
      py="8"
      bg={`url('https://images.unsplash.com/photo-1557128928-66e3009291b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`}
      bgSize="cover"
    >
      <Flex
        mx={10}
        alignItems={"center"}
        justifyContent="space-between"
        width="100%"
      >
        <Flex alignItems={"center"}>
          <Flex position="relative">
            <Avatar
              size={useBreakpointValue({ sm: "xl", md: "2xl" })}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <IconButton
              rounded="full"
              bgColor="brand.black"
              color="white"
              size={useBreakpointValue({ sm: "sm", md: "lg" })}
              aria-label="Search database"
              position="absolute"
              bottom={-5}
              left="50%"
              icon={<SmallAddIcon />}
              transform="translateX(-50%)"
            />
          </Flex>
          <Stack spacing={0.5} fontSize={{ sm: "xl", md: "2xl" }} ml={3}>
            <Text fontWeight="medium">Hello,</Text>
            <Text fontSize={"3xl"} fontWeight="bold">
              Aryaman
            </Text>
            <Text>teddybearlaughs@gmail.com</Text>
          </Stack>
        </Flex>
        <Text
          fontSize="xl"
          fontWeight="medium"
          display={{ base: "none", md: "block" }}
        >
          0 Followers
        </Text>
      </Flex>
    </Box>
  );
};

export default HeroSection;
