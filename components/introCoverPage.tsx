import { forwardRef } from "react";
import { Heading, Container } from "@chakra-ui/react";
interface introCoverProps {
  children: React.ReactNode;
}

const IntroCoverPage = forwardRef((props: introCoverProps, ref: any) => {
  return (
    <Container className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <Heading>{props.children}</Heading>
        {/* <div className="contact">
          <a href="mailto:rami.rami@ucalgary.ca">contact me</a>
        </div> */}
      </div>
    </Container>
  );
});
IntroCoverPage.displayName = "IntroCoverPage";
export default IntroCoverPage;