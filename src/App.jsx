import { Flex } from "@chakra-ui/react";
import HeroSection from "./sections/HeroSection";
import WithSubnavigation from "./components/Navbar";

function App() {
  return (
    <>
      <Flex width="100%" justifyContent="center" flexDirection="column">
        <WithSubnavigation />
        <HeroSection />
      </Flex>
    </>
  );
}

export default App;
