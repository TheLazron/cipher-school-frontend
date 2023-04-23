import {
  Modal,
  Button,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalContent,
  InputRightElement,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent rounded="xl">
          <ModalBody p={10}>
            <FormControl>
              <FormLabel>Current Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Current Password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>New Password</FormLabel>
              <Input type="password" placeholder="New Password" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" placeholder="Confirm Password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blackAlpha" onClick={onClose}>
              Cancel
            </Button>
            <Button
              bgColor="brand.primary"
              color="white"
              colorScheme="blue"
              ml={3}
              _hover={{
                bgColor: "brand.primary",
                color: "white",
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

ChangePasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ChangePasswordModal;
