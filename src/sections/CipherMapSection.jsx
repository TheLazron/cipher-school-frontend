import {
  Box,
  Heading,
  Flex,
  Text,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
const CipherMapSection = () => {
  return (
    <Box py={5}>
      <Flex flexDirection="column" mx={10}>
        <Heading
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontSize={{ sm: "md", md: "xl" }}>CIPHER MAP</Text>
        </Heading>
        <Flex
          flexDirection="column"
          justifyContent="space-around"
          mx={{ sm: 0, base: 2, md: 10 }}
          //   alignItems="center"
        >
          <Box mt={5}>
            <CalendarHeatmap
              startDate={new Date("2023-01-01")}
              endDate={new Date("2023-12-31")}
              showWeekdayLabels
              gutterSize={2}
              values={[
                { date: "2023-01-01", count: 12 },
                { date: "2023-05-22", count: 122 },
                { date: "2023-07-30", count: 38 },
              ]}
              classForValue={(value) => {
                if (!value) {
                  return "color-empty";
                }
                return "color-filled";
              }}
            />
          </Box>

          <Flex
            alignSelf={"flex-end"}
            gap={{ sm: 2, md: 3 }}
            alignItems="center"
          >
            <Text fontSize={{ sm: "xs", md: "lg" }}>Less</Text>
            <Box
              bg="brand.primary"
              opacity={0.2}
              w={useBreakpointValue({ sm: 3, md: 5 })}
              h={useBreakpointValue({ sm: 3, md: 5 })}
              color="white"
            ></Box>
            <Box
              bg="brand.primary"
              opacity={0.4}
              w={useBreakpointValue({ sm: 3, md: 5 })}
              h={useBreakpointValue({ sm: 3, md: 5 })}
              color="white"
            ></Box>
            <Box
              bg="brand.primary"
              opacity={0.7}
              w={useBreakpointValue({ sm: 3, md: 5 })}
              h={useBreakpointValue({ sm: 3, md: 5 })}
              //   p={2}
              color="white"
            ></Box>
            <Box
              bg="brand.primary"
              opacity={1}
              w={useBreakpointValue({ sm: 3, md: 5 })}
              h={useBreakpointValue({ sm: 3, md: 5 })}
              color="white"
            ></Box>
            <Text>More</Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider color="red" py={2} />
    </Box>
  );
};

export default CipherMapSection;
