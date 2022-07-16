import { forwardRef } from "react";
import { Heading, Container, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ferrisWheel } from "../animations/introPage";
interface introCoverProps {
  children: React.ReactNode;
}

const IntroCoverPage = forwardRef((props: introCoverProps, ref: any) => {
  return (
    <div ref={ref} data-density="hard" className="overflow-hidden">
      <Heading>{props.children}</Heading>
      {/* <div className="contact">
          <a href="mailto:rami.rami@ucalgary.ca">contact me</a>
        </div> */}
      <motion.div
        className="ferris-wheel"
        initial="initial"
        animate="animate"
        variants={ferrisWheel.first}
      >
        <Text className="left-center">Web developer</Text>
      </motion.div>
      <motion.div
        className="ferris-wheel"
        animate="animate"
        variants={ferrisWheel.second}
      >
        <Text className="left-center">Creative</Text>
      </motion.div>
      <motion.div
        className="ferris-wheel"
        animate="animate"
        variants={ferrisWheel.third}
      >
        <Text className="left-center">passionate</Text>
      </motion.div>
      <motion.div
        className="ferris-wheel"
        animate="animate"
        variants={ferrisWheel.fourth}
      >
        <Text className="left-center">energetic</Text>
      </motion.div>
      <motion.div
        className="ferris-wheel"
        animate="animate"
        variants={ferrisWheel.fifth}
      >
        <Text className="left-center">weirdo</Text>
      </motion.div>
    </div>
  );
});
IntroCoverPage.displayName = "IntroCoverPage";
export default IntroCoverPage;