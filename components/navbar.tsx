import {
  CircularProgress,
  Button,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import Logo from "../components/logo";
import projects from "../public/data/projects";
import InfoButton from "../components/infoButton";
import { motion } from "framer-motion";
import { lClickables } from "../animations/clickables";
import { rClickables } from "../animations/clickables";

interface NavBarProps {
  currentPage: number;
  book: any;
}

export default function Navbar(props: NavBarProps) {
  const { currentPage, book } = props;
  const numOfPages = projects.length + 3;
  return (
    <div className="navbar">
      <Logo book={book}/>
      <div className="px-2">
        <Button
          as={motion.div}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          variants={lClickables}
          leftIcon={<ChevronLeftIcon h={6} w={6} />}
          onClick={() => book.current.pageFlip().flipPrev()}
          className="!pl-1 !pr-3 cursor-pointer"
        >
          <motion.p
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={lClickables}
            className="prev-pages"
          ></motion.p>
        </Button>
        <CircularProgress
          className="mx-1 md:mx-2 lg:mx-4"
          min={0}
          max={numOfPages}
          value={currentPage}
          color="yellow.400"
          thickness="12px"
        >
          <CircularProgressLabel>{props.currentPage}</CircularProgressLabel>
        </CircularProgress>
        <Button
          as={motion.div}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          variants={rClickables}
          rightIcon={<ChevronRightIcon h={6} w={6} />}
          onClick={() => book.current.pageFlip().flipNext()}
          className="!pr-1 !pl-3 cursor-pointer"
        >
          <motion.p
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={rClickables}
            className="next-pages"
          ></motion.p>
        </Button>
      </div>

      <InfoButton />
    </div>
  );
}
