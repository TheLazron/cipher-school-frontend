import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const Icon = () => {
  return (
    <motion.div
      animate={{ y: ["0%", "100%"], opacity: [0, 0.5, 1, 1, 0.5, 0] }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
    >
      <ChevronDownIcon position="relative" h={10} w={10} />
    </motion.div>
  );
};

export default Icon;
