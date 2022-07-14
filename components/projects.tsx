import { Markup } from "interweave";
import { Component, forwardRef } from "react";
import Footer from "../components/footer";
import {
  Badge,
  Grid,
  Heading,
  Text,
  Container,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import MenAdam from "../public/images/me n adam.jpg";

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
  return (
    <div className="project" ref={ref} style={{backgroundImage: `url(${MenAdam})`}}>
      <Container className="project-content">
        <Heading>{props.name}</Heading>
        <ButtonGroup className="project-links">
          <Button>
            <a href={props.github}>Github</a>
          </Button>
          <Button>
            {props.website ? <a href={props.website}>Website</a> : null}
          </Button>
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
    </div>
  );
});
Project.displayName = "Project";
export default Project;
