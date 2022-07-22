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
import {motion} from "framer-motion";
import { rClickables } from "../animations/clickables";
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
        <Heading pt={4} pb={1} as="h1">{props.children}</Heading>
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
          <motion.p
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={rClickables}
            onClick={() => props.book.current.pageFlip().flip(2)}
            className="cursor-pointer"
          >
            Projects
          </motion.p>
          <Spacer />
          <Box>
            <Text> 1 </Text>
          </Box>
        </Flex>

        <Stack>
          {projects.map((project: ProjectProps, index: number) => (
            <Box key={index}>
              <motion.div
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                variants={rClickables}
                onClick={() => props.book.current.pageFlip().flip(index + 2)}
              >
                <Heading className="cursor-pointer" as="h3" size="">
                  {project.name}
                </Heading>
              </motion.div>
              <p>{project.summary}</p>
            </Box>
          ))}
        </Stack>
        <Flex>
          <motion.p
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={rClickables}
            onClick={() =>
              props.book.current.pageFlip().flip(numOfProjects + 2)
            }
            className="cursor-pointer"
          >
            About Me
          </motion.p>
          <Spacer />
          <Box>
            <Text> {numOfProjects + 1} </Text>
          </Box>
        </Flex>
        <Flex>
          <motion.p
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={rClickables}
            onClick={() =>
              props.book.current.pageFlip().flip(numOfProjects + 3)
            }
            className="cursor-pointer"
          >
            Contact
          </motion.p>
          <Spacer />
          <Box>
            <Text> {numOfProjects + 2} </Text>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
});

TableOfContents.displayName = "TableOfContents";
export default TableOfContents;
