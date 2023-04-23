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
import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/userContext";
import axios from "axios";

const AboutUser = () => {
  const data = useContext(userContext);
  const user = data?.data?.user._doc;

  const [bioValue, setBio] = useState(user?.bio);

  useEffect(() => {
    // Update the bioValue state with the fetched value
    setBio(user?.bio);
  }, [user]);

  const editBio = () => {
    console.log(bioValue);
    axios
      .post("http://localhost:8080/updateUser", {
        email: user.email,
        bio: bioValue,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

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
            onClick={editBio}
          >
            Edit
          </Button>
        </Heading>
        <FormControl id="bio" mt={5}>
          <Textarea
            value={bioValue}
            onChange={handleBioChange}
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
