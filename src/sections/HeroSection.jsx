import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  Avatar,
  AvatarGroup,
  Stat,
  StatNumber,
  StatHelpText,
  Center,
  Divider,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import Carousel from "../components/Carousel";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const HeroSection = () => (
  <Container maxW="100%" position="sticky">
    <Stack
      mx={10}
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 9 }}>
        {/* <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        > */}
        <Box>
          <Heading fontSize={{ base: "3xl", sm: "5xl", lg: "7xl" }}>
            Welcome to{" "}
            <Text as="span" color="brand.primary">
              the Future
            </Text>
          </Heading>

          <Heading fontSize={{ base: "3xl", sm: "5xl", lg: "7xl" }}>
            of Learning
          </Heading>
        </Box>
        <Text
          color={"gray.500"}
          fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
        >
          Start Learning by best creators for
          <span display="inline-block">
            <Typewriter
              options={{
                strings: ["absolutely free"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </Text>

        <Flex justifyContent="start" alignItems="center" marginY={4}>
          <Box display="flex" justifyContent="space-around">
            <AvatarGroup size="md" max={3}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            </AvatarGroup>
            <Stat display="flex" justifyContent="start" ml={3}>
              <StatNumber>50+</StatNumber>
              <StatHelpText>Mentors</StatHelpText>
            </Stat>
          </Box>
          <Center height="50px" mx={7}>
            <Divider orientation="vertical" size="base" />
          </Center>
          <Stat width="fit-content" maxWidth="100px">
            <StatNumber>4.8/5</StatNumber>
            <StatHelpText>*****Rating</StatHelpText>
          </Stat>
        </Flex>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: "column", sm: "row" }}
        >
          <Button
            rounded={"md"}
            size={"lg"}
            fontWeight={"normal"}
            bgColor={"brand.primary"}
            color={"white"}
            // colorScheme="blue"
            _hover={{ bg: "brand.primary", transform: "scale(0.98)" }}
            px={6}
            rightIcon={<ArrowForwardIcon h={4} w={4} color={"white.300"} />}
          >
            Start Learning Now
          </Button>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <Box
          position={"relative"}
          height={"300px"}
          // rounded={"2xl"}
          // boxShadow={"2xl"}
          width={"full"}
          overflow={"hidden"}
        >
          <Carousel />
        </Box>
      </Flex>
    </Stack>
  </Container>
);

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default HeroSection;
