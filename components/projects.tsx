import { Markup } from "interweave";
import { forwardRef, useState } from "react";
import Footer from "../components/footer";
import {
  Badge,
  Heading,
  Text,
  Container,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

interface ProjectProps {
  //   children: React.ReactNode;
  number: number;
  name: string;
  image: string;
  github: string;
  website: string;
  aim: string;
  impact: string;
  learned: string;
  languages: string[];
  technologies: string[];
  wakatime: string;
}

const Project = forwardRef((props: ProjectProps, ref: any) => {
  const [opacity, setOpacity] = useState("opacity-10");
  return (
    <div className="project" ref={ref}>
      <Image
        className={`absolute -z-10 ${opacity}`}
        src={`/images/${props.image}.png`}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Container className="z-0">
        <Heading>{props.name}</Heading>
        <ButtonGroup className="project-links"
        onMouseEnter={() => {
          setOpacity("opacity-25");}}
        onMouseLeave={() => {
          setOpacity("opacity-10");}}
>
          <Button>
            <a href={props.github}>Github</a>
          </Button>
          {props.website ? (
            <Button>
              <a href={props.website}>Website</a>
            </Button>
          ) : null}
        </ButtonGroup>
        <div>
          <Text fontSize="lg">Aim/Purpose: {props.aim}</Text>
          <Text fontSize="lg">Result/Impact: {props.impact}</Text>
          <Text fontSize="lg">learned: {props.learned}</Text>
        </div>

        <div className="project-tags">
          {props.languages.map((language, index: number) => (
            <Badge colorScheme="green" key={index}>
              {language}
            </Badge>
          ))}
        </div>
        <div className="project-technologies">
          {props.technologies.map((technology, index: number) => (
            <Badge colorScheme="blue" key={index}>
              {technology}
            </Badge>
          ))}
        </div>
        <div className="project-wakatime">
          <Markup content={props.wakatime} />
        </div>
        <div className="project-image">{props.image}</div>

        {/* <div className="project-text">{props.children}</div> */}
        <div className="project-footer">{props.number + 1}</div>
      </Container>
      {/* </div> */}
    </div>
  );
});
Project.displayName = "Project";
export default Project;
