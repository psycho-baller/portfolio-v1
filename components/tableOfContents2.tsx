import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import projects from "../public/data/projects2";
import { motion } from "framer-motion";
import { rClickables } from "../animations/clickables";
interface TableOfContentProps {
  children: React.ReactNode;
  book: any;
}
interface ProjectProps {
  name: string;
  summary: string;
}
const TableOfContents2 = forwardRef((props: TableOfContentProps, ref: any) => {
  const numOfProjects: number = projects.length*2 as number;
  return (
    <Container className="page page-cover" ref={ref} data-density="hard">
      <Stack className="text-2xl" shouldWrapChildren={true} spacing={4}>
        <Heading pt={4} pb={1} as="h1">
          {props.children}
        </Heading>
        <Stack>
          {projects.map((project: ProjectProps, index: number) => (
            <Box key={projects.length + index}>
              <motion.div
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                variants={rClickables}
                onClick={() =>
                  props.book.current
                    .pageFlip()
                    .flip(projects.length + index + 3)
                }
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
              props.book.current.pageFlip().flip(numOfProjects + 3)
            }
            className="cursor-pointer"
          >
            About Me
          </motion.p>
          <Spacer />
          <Box>
            <Text> {numOfProjects + 2} </Text>
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
              props.book.current.pageFlip().flip(numOfProjects + 4)
            }
            className="cursor-pointer"
          >
            Contact
          </motion.p>
          <Spacer />
          <Box>
            <Text> {numOfProjects + 3} </Text>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
});

TableOfContents2.displayName = "TableOfContents";
export default TableOfContents2;
