import { forwardRef } from "react";
import { Container, Heading, Text } from "@chakra-ui/react";

interface AboutMeProps {
  children: React.ReactNode;
}

const AboutMe = forwardRef((props: AboutMeProps, ref: any) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <Container className="page-content">
        <Heading as="h1" className="pt-1 pb-1">
          {props.children}
        </Heading>
        <Heading as="h3" size="md" className="pt-4">
          Who am I?
        </Heading>
        <Text>
          I'm a passionate explorer who values the connections I make through
          the unique experiences I go through with them. I believe in balance so
          I try not to overdo/underdo things and try to maximize (make the best
          of) my experience with everything I do. I also like to balance my
          hobbies which are: programming, socialization, reading, all kinds of
          sports, expanding my knowledge in psychology, philosophy, and
          obviously, the tech world.
        </Text>
        <Heading as="h3" size="md" className="pt-4">
          What is my ideal night out?
        </Heading>
        <Text>
          A well lit balcony or garden, playing boardgames with your closest
          friends, laughing, forgetting about all the worries that constantly
          haunt our thoughts and just living in the moment
        </Text>
      </Container>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe;
