import { SimpleGrid, Box } from "@chakra-ui/react";
import StatsElement from "../components/StatsElement";
const StatsSection = () => {
  return (
    <Box mx={10} py={10}>
      <SimpleGrid minChildWidth="160px" spacing="70px">
        {/* <Box bg="tomato" height="80px"></Box> */}
        <StatsElement text="15K+" subText="Students" />
        <StatsElement text="10K+" subText="Certificates Delivered" />
        <StatsElement text="450K+" subText="Streamed Minutes" />
        <StatsElement text="12TB+" subText="Content Streamed in last 60 days" />
        <StatsElement text="50+" subText="Creators" />
        <StatsElement text="110+" subText="Programs Available" />
        {/* <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box> */}
      </SimpleGrid>
    </Box>
  );
};

export default StatsSection;
