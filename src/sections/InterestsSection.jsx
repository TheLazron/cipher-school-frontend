import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  SimpleGrid,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import InterestElement from "../components/InterestElement";
import InterestsModal from "../components/InterestsModal";
import useSWR from "swr";
import axiosFetcher from "../utils/swr-fetcher";

const InterestsSection = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/getInterests?email=" +
      encodeURIComponent("john@doe.com"),
    axiosFetcher
  );

  if (data) {
    console.log(data);
  }
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box py={10}>
      <Flex flexDirection="column" mx={10}>
        <Heading
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontSize={{ base: "md", md: "xl" }}>INTERESTS</Text>

          <InterestsModal isOpen={isOpen} onClose={onClose} />

          <Button
            size={{ base: "sm", md: "md" }}
            bgColor="brand.primary"
            color="white"
            onClick={onOpen}
          >
            Edit
          </Button>
        </Heading>

        <SimpleGrid
          mt={5}
          columns={{ base: 2, sm: 2, md: 3, lg: 6 }}
          //   autoFlow="column"  columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={{ base: "10px", md: "10px" }}
        >
          {isLoading ? <Spinner /> : <></>}

          {error ? <Text>Error Encountered</Text> : <></>}

          {data?.interests?.length > 0 ? (
            data.interests?.map((interest, i) => {
              return <InterestElement key={i} text={interest} />;
            })
          ) : (
            <></>
          )}

          {/* <InterestElement text="App Development" />
          <InterestElement text="App Development" />
          <InterestElement text="App Development" />
          <InterestElement text="App Development" /> */}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default InterestsSection;
