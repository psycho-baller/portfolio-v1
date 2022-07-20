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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import YoutubeEmbed from "../components/ytEmbed";

interface ProjectProps {
  //   children: React.ReactNode;
  number: number;
  name: string;
  image: string;
  video: string;
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
        <Heading className="pt-1 pb-1">{props.name}</Heading>
        <ButtonGroup
          className="p-1"
          onMouseEnter={() => {
            setOpacity("opacity-25");
          }}
          onMouseLeave={() => {
            setOpacity("opacity-10");
          }}
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
        <div className="p-2">
          <Text fontSize="lg" className="p-1">
            <span className="font-black">Aim/Purpose: </span> {props.aim}
          </Text>
          {props.impact ? (
            <Text fontSize="lg" className="p-1">
              <span className="font-black">Result/Impact: </span> {props.impact}
            </Text>
          ) : null}
          <Text fontSize="lg" className="p-1">
            <span className="font-black">learned: </span>
            {props.learned}
          </Text>
        </div>

        <Wrap direction="row" justify="center" className="p-1 badge">
          {props.languages.map((language, index: number) => (
            // <WrapItem>
            <Badge colorScheme="green" key={index}>
              {language}
            </Badge>
            /* </WrapItem> */
          ))}
        </Wrap>
        <Wrap direction="row" justify="center" className="p-1 badge">
          {props.technologies.map((technology, index: number) => (
            <Badge colorScheme="blue" key={index}>
              {technology}
            </Badge>
          ))}
        </Wrap>
        <div className="justify-center badge">
          {props.wakatime ? <Markup content={props.wakatime} /> : null}
        </div>

        {props.video ? (
          <YoutubeEmbed embedId={props.video} width="100%" height="100%" />
        ) : null}
        <div className="project-footer">{props.number + 1}</div>
      </Container>
    </div>
  );
});
Project.displayName = "Project";
export default Project;
