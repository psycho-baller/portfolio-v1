import { Container, Box, Flex, Grid, VStack, Heading, Text, Spacer } from "@chakra-ui/react";
import { forwardRef } from "react";
import projects from "../public/data/projects";
interface TableOfContentProps {
  children: React.ReactNode;
}
interface ProjectProps {
  name: string;
  summary: string;
}
const TableOfContents = forwardRef((props: TableOfContentProps, ref: any) => {
  return (
    <Container className="page page-cover" ref={ref} data-density="hard">
      <VStack className="page-content">
        <Heading>{props.children}</Heading>
        <Flex direction="row">
          <Box>
            <a href="#intro">Intro</a>
          </Box>
          <Spacer />
          <Box>
            <Text> | </Text>
          </Box>
        </Flex>
        <Box>
          <a href="#projects">Projects</a>
          <VStack>
            {projects.map((project: ProjectProps, index: number) => (
              <Box key={index}>
                <a href={`#${project.name}`}>{project.name}</a>
                <p>{project.summary}</p>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box>
          <a href="#about-me">About Me</a>
        </Box>
        <Box>
          <a href="#contact">Contact</a>
        </Box>
      </VStack>
    </Container>
  );
});

TableOfContents.displayName = "TableOfContents";
export default TableOfContents;
