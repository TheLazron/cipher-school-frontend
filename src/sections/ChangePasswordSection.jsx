import {
  Box,
  Text,
  Button,
  Heading,
  Flex,
  InputGroup,
  Input,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import ChangePasswordModal from "../components/ChangePasswordModal";

const ChangePasswordSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box py={10}>
      <Flex flexDirection="column" mx={10}>
        <Heading
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontSize={{ base: "md", md: "xl" }}>PASSWORD AND SECURITY</Text>

          <ChangePasswordModal isOpen={isOpen} onClose={onClose} />

          <Button
            size={{ base: "sm", md: "md" }}
            bgColor="brand.primary"
            color="white"
            onClick={onOpen}
          >
            Change
          </Button>
        </Heading>
        <InputGroup w={"100%"} mt={5}>
          <Input isDisabled value="admin" type="password" bgColor="white" />
        </InputGroup>
      </Flex>
      <Divider />
    </Box>
  );
};

export default ChangePasswordSection;
