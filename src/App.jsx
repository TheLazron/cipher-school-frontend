import { Flex } from "@chakra-ui/react";
import HeroSection from "./sections/HeroSection";
import WithSubnavigation from "./components/Navbar";
import ScrollDownSection from "./sections/ScrollDownSection";
import StatsSection from "./sections/StatsSection";

function App() {
  return (
    <>
      <Flex width="100%" justifyContent="center" flexDirection="column">
        <WithSubnavigation />
        <HeroSection />
        <ScrollDownSection />
        <StatsSection />
      </Flex>
    </>
  );
}

export default App;
