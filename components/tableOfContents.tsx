import {
  Container,
  Box,
  Flex,
  Grid,
  VStack,
  Heading,
  Text,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import projects from "../public/data/projects";
interface TableOfContentProps {
  children: React.ReactNode;
  book: any;
}
interface ProjectProps {
  name: string;
  summary: string;
}
const TableOfContents = forwardRef((props: TableOfContentProps, ref: any) => {
  const numOfProjects: number = projects.length as number;
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
          {/* @ts-ignore */}
          <p onClick={() => props.book.current.pageFlip().flip(2)} className="cursor-pointer">Projects</p>
          <Spacer />
          <Box>
            <Text> 1 </Text>
          </Box>
        </Flex>

        <Stack>
          {projects.map((project: ProjectProps, index: number) => (
            <Box key={index}>
              <div onClick={() => props.book.current.pageFlip().flip(index+3)}>
                <Heading className="cursor-pointer" as="h3" size="">
                  {project.name}
                </Heading>
              </div>
              <p>{project.summary}</p>
            </Box>
          ))}
        </Stack>
        <Flex>
          <p onClick={() => props.book.current.pageFlip().flip(numOfProjects)} className="cursor-pointer">About Me</p>
          <Spacer />
          <Box>
            <Text> {numOfProjects- 1} </Text>
          </Box>
        </Flex>
        <Flex>
          <p onClick={() => props.book.current.pageFlip().flip(numOfProjects+1)} className="cursor-pointer">Contact</p>
          <Spacer />
          <Box>
            <Text> {numOfProjects} </Text>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
});

TableOfContents.displayName = "TableOfContents";
export default TableOfContents;
