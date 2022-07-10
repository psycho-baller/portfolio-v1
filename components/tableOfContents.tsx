import { Container, Box, Flex, Grid, VStack, Heading, Text, Spacer, Stack } from "@chakra-ui/react";
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
      <Stack className="text-2xl" shouldWrapChildren={true} spacing={4}>
        <Heading as="h1">{props.children}</Heading>
        <Flex>
          <Box>
            <p>Intro</p>
          </Box>
          <Spacer />
          <Box>
            <Text> 0 </Text>
          </Box>
        </Flex>
        <Flex>
          <a href="#projects">Projects</a>
          <Spacer />
          <Box>
            <Text> 1 </Text>
          </Box>
        </Flex>

        <Stack>
          {projects.map((project: ProjectProps, index: number) => (
            <Box key={index}>
              <a href={`#${project.name}`}>
                <Heading as="h3" size=''>{project.name}</Heading>
              </a>
              <p>{project.summary}</p>
            </Box>
          ))}
        </Stack>
        <Flex>
          <a href="#about-me">About Me</a>
          <Spacer />
          <Box>
            <Text> 2 </Text>
          </Box>
        </Flex>
        <Flex>
          <a href="#contact">Contact</a>
          <Spacer />
          <Box>
            <Text> 3 </Text>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
});

TableOfContents.displayName = "TableOfContents";
export default TableOfContents;
