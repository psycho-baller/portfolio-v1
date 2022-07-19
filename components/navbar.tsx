import {
  CircularProgress,
  Text,
  IconButton,
  Button,
  CircularProgressLabel,
  useColorMode,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  InfoIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import Logo from "../components/logo";
import projects from "../public/data/projects";

interface NavBarProps {
  currentPage: number;
  book: any;
}

export default function Navbar(props: NavBarProps) {
  const numOfPages = projects.length + 3;
  return (
    <div className="navbar">
      <Logo />
      <div className="px-2">
        <Button
          leftIcon={<ChevronLeftIcon h={6} w={6} />}
          onClick={() => props.book.current.pageFlip().flipPrev()}
          className="!pl-1 !pr-3"
        >
          <p className="prev-pages"></p>
        </Button>
        <CircularProgress
          className="mx-1 md:mx-2 lg:mx-4"
          min={0}
          max={numOfPages}
          value={props.currentPage}
          color="yellow.400"
          thickness="12px"
        >
          <CircularProgressLabel>{props.currentPage}</CircularProgressLabel>
        </CircularProgress>
        <Button
          rightIcon={<ChevronRightIcon h={6} w={6} />}
          onClick={() => props.book.current.pageFlip().flipNext()}
          className="!pr-1 !pl-3"
        >
          <p className="next-pages"></p>
        </Button>
      </div>
      <IconButton
        icon={<InfoIcon />}
        aria-label="Info"
        // size="4xs"
        fontSize={25}
      />
    </div>
  );
}
