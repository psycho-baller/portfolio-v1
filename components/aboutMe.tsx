import { forwardRef } from "react";
import { Container, Heading, Text } from "@chakra-ui/react";

interface AboutMeProps {
  children: React.ReactNode;
}

const AboutMe = forwardRef((props: AboutMeProps, ref: any) => {
  return (
    <div
      id="about-me"
      className="page page-cover"
      ref={ref}
      data-density="hard"
    >
      <Container className="page-content">
        <Heading as="h1" className="pt-2 pb-1">
          {props.children}
        </Heading>
        <Heading as="h3" size="md" className="pt-4">
          Who am I?
        </Heading>
        <Text>
          I&apos;m a passionate explorer who values the connections I make
          through the unique experiences I go through with them. I believe in
          balance so I try not to overdo/underdo things and try to maximize
          (make the best of) my experience with everything I do. I also like to
          balance my hobbies which are: programming, socialization, reading, all
          kinds of sports, expanding my knowledge in psychology, philosophy, and
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
        <Heading as="h3" size="md" className="pt-4">
          What am I currently working on?
        </Heading>
        <Text>
          I am currently pursuing a degree in Computer Science with a minor in
          Data Science at the University of Calgary. During this summer, I took
          2 courses and started learning NextJS on the daily. After around 4
          months of constant web development, I feel ready to start finding
          internships.
        </Text>
        <Heading as="h3" size="md" className="pt-4">
          What are my future plans?
        </Heading>
        <Text>
          For the coming fall semester, I wanna focus on data science and
          analysis. Then from there I start dabbling with ML and AI. I&apos;m
          also looking into freelancing and creating youtube videos (tutorals)
          on things that I had to learn myself because there wasn&apos;t any
          tutorial on it. My first one just got released and it&apos;s about how
          to make a ferris wheel effect in ReactJS/NextJS using framer motion.
          Feel free to{" "}
          <a
            href="https://youtu.be/25zjPEMxwbk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-green-400 hover:animate-pulse"
          >
            check it out
          </a>
          !
        </Text>
      </Container>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe;
