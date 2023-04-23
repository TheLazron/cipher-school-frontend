import {
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalContent,
  CheckboxGroup,
  SimpleGrid,
  useCheckboxGroup,
} from "@chakra-ui/react";

import PropTypes from "prop-types";
import CustomCheckBox from "./CustomCheckbox";
import axios from "axios";
import { mutate } from "swr";
import { userContext } from "../context/userContext";
import { useContext } from "react";

const InterestsModal = ({ isOpen, onClose }) => {
  //   const { value, onChange } = useCheckboxGroup();
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  });
  console.log("values", value);

  const data = useContext(userContext);
  const user = data?.data?.user._doc;

  const handleSubmit = () => {
    console.log("submitting");
    axios
      .post("http://localhost:8080/updateInterests", {
        email: user.email,
        newInterests: value,
      })
      .then((data) => {
        console.log(data);
        mutate(
          "http://localhost:8080/getInterests?email=" +
            encodeURIComponent(user.email),
          async (prevSitesData) => {
            console.log("pd", prevSitesData);
            return { interests: [...value] };
          },
          false
        );
      })
      .catch((err) => console.log(err));
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={10}>
          <ModalBody>
            <CheckboxGroup>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 2 }}
                spacing={{ base: "10px", md: "10px" }}
              >
                <CustomCheckBox
                  {...getCheckboxProps({ value: "App Development" })}
                />
                <CustomCheckBox
                  {...getCheckboxProps({ value: "Web Development" })}
                />
                <CustomCheckBox
                  {...getCheckboxProps({ value: "Game Development" })}
                />
                <CustomCheckBox
                  {...getCheckboxProps({ value: "Data Strutures" })}
                />
                <CustomCheckBox
                  {...getCheckboxProps({ value: "Programming" })}
                />
                <CustomCheckBox
                  {...getCheckboxProps({ value: "Machine Learning" })}
                />
                <CustomCheckBox
                  {...getCheckboxProps({ value: "Data Science" })}
                />
                <CustomCheckBox {...getCheckboxProps({ value: "Others" })} />
              </SimpleGrid>
            </CheckboxGroup>
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
              onClick={handleSubmit}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

InterestsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default InterestsModal;
