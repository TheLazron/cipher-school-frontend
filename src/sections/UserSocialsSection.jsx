import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFacebook, BsGlobe } from "react-icons/bs";
import SocialInputField from "../components/SocialsInput";
import { useState } from "react";

const UserSocialsSection = () => {
  const [canEdit, setCanEdit] = useState(false);
  return (
    <Box py={10}>
      <Flex flexDirection="column" mx={10}>
        <Heading
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontSize={{ base: "md", md: "xl" }}>ON THE WEB</Text>
          <Button
            size={{ base: "sm", md: "md" }}
            bgColor="brand.primary"
            color="white"
            onClick={() => {
              setCanEdit((currentValue) => !currentValue);
            }}
          >
            {canEdit ? "Save" : "Edit"}
          </Button>
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing="40px"
          width="100%"
          mt={5}
        >
          <SocialInputField
            isDisabled={!canEdit}
            socialMedia="Linkedin"
            icon={AiFillLinkedin}
          />
          <SocialInputField
            isDisabled={!canEdit}
            socialMedia="Github"
            icon={AiFillGithub}
          />
          <SocialInputField
            isDisabled={!canEdit}
            socialMedia="Facebook"
            icon={BsFacebook}
          />
          <SocialInputField
            isDisabled={!canEdit}
            socialMedia="Twitter"
            icon={AiFillTwitterCircle}
          />
          <SocialInputField
            isDisabled={!canEdit}
            socialMedia="Instgram"
            icon={AiFillInstagram}
          />
          <SocialInputField
            isDisabled={!canEdit}
            socialMedia="Linkedin"
            icon={BsGlobe}
          />
        </SimpleGrid>
      </Flex>
      <Divider py={2} />
    </Box>
  );
};

export default UserSocialsSection;
