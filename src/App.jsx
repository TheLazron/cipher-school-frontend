import { Box, Flex } from "@chakra-ui/react";
import WithSubnavigation from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutUser from "./sections/AboutUsersSection";
import CipherMapSection from "./sections/CipherMapSection";
import UserSocialsSection from "./sections/UserSocialsSection";
import ProfessionalInformationSection from "./sections/ProfessionalInformationSection";
function App() {
  return (
    <>
      <Flex width="100%" justifyContent="center" flexDirection="column">
        <Box position="sticky" top="0" zIndex="1">
          <WithSubnavigation />
          <HeroSection />
        </Box>
        <Flex flexDirection="column" bgColor="brand.secondary">
          <AboutUser />
          <CipherMapSection />
          <UserSocialsSection />
          <ProfessionalInformationSection />
        </Flex>
      </Flex>
    </>
  );
}

export default App;
