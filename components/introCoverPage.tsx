import { forwardRef } from "react";
import { Heading, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
interface introCoverProps {
  children: React.ReactNode;
}

const IntroCoverPage = forwardRef((props: introCoverProps, ref: any) => {
  return (
    <Container ref={ref} data-density="hard">
      <Heading>{props.children}</Heading>
      {/* <div className="contact">
          <a href="mailto:rami.rami@ucalgary.ca">contact me</a>
        </div> */}
      <motion.div>

      </motion.div>
    </Container>
  );
});
IntroCoverPage.displayName = "IntroCoverPage";
export default IntroCoverPage;