import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  useBreakpointValue,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import ProfessionSelect from "../components/ProfessionSelect";
const ProfessionalInformationSection = () => {
  const [canEdit, setCanEdit] = useState(false);
  return (
    <Box py={10}>
      <Flex flexDirection="column" mx={10}>
        <Heading
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontSize={useBreakpointValue({ xs: "sm", sm: "md", md: "xl" })}>
            PROFESSIONAL INFORMATION
          </Text>
          <Button
            size={{ sm: "sm", md: "md" }}
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
          columns={{ sm: 1, base: 2, md: 2 }}
          spacing="40px"
          width="100%"
          mt={5}
        >
          <ProfessionSelect
            isDisabled={!canEdit}
            options={HIGHEST_EDUCATION_OPTIONS}
            heading="Highest Education"
            variant="filled"
            placeholder="Filled"
          />
          <ProfessionSelect
            isDisabled={!canEdit}
            options={CURRENT_POSITION_OPTIONS}
            heading="Currently Working As"
            variant="filled"
            placeholder="Filled"
          />
        </SimpleGrid>
      </Flex>
      <Divider py={2} />
    </Box>
  );
};

const HIGHEST_EDUCATION_OPTIONS = [
  { text: "Primary", value: "primary" },
  { text: "Secondary", value: "secondary" },
  { text: "Higher Secondary", value: "higher-secondary" },
  { text: "Graduation", value: "graduation" },
  { text: "Post Graduation", value: "post-graduation" },
];

const CURRENT_POSITION_OPTIONS = [
  { text: "Schooling", value: "schooling" },
  { text: "College Student", value: "college-student" },
  { text: "Teaching", value: "teaching" },
  { text: "Job", value: "job" },
  { text: "Freelancing", value: "freelancing" },
];

export default ProfessionalInformationSection;
