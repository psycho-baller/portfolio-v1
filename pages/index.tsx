import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Text,
  Flex,
  Box,
  Spacer,
  Input,
  Button,
  Grid,
  Wrap,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  useToast,
} from "@chakra-ui/react";
import styles from '../styles/index.module.scss'
import HTMLFlipBook from 'react-pageflip';

import Image from "next/image";
import Project from "../components/projects";
import IntroCoverPage from "../components/introCoverPage";
import OutroCoverPage from "../components/outroCoverPage";
import projects from "../public/data/projects"
import AboutMe from "../components/aboutMe";
export default function Home() {
  return (
    <div>
      
      {/* @ts-ignore*/}
      <HTMLFlipBook
        width={300}
        height={500}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        // showCover={true}
        mobileScrollSupport={true}
        // showCover={true}
        className="text-center"
        style={{ backgroundColor: "gray" }}
        // startPage={0}
        // minWidth={0}
        // maxWidth={0}
        // minHeight={0}
        // maxHeight={0}
        // drawShadow={false}
        // flippingTime={0}
        // usePortrait={false}
        // startZIndex={0}
        // autoSize={false}
        // maxShadowOpacity={0}
        // mobileScrollSupport={false}
        // clickEventForward={false}
        // useMouseEvents={false}
        // swipeDistance={0}
        // showPageCorners={false}
        // disableFlipByClick={false}
      >
        <IntroCoverPage>
          <Image
            src="https://cliparting.com/wp-content/uploads/2018/03/cool-pictures-2018-32.jpg"
            layout="fill"
            alt="cover"
          />
        </IntroCoverPage>
        <AboutMe>About Me</AboutMe>
        {projects.map((project, index: number) => (
          <Project key={index} number={index} name={project.name} image={project.image} github={project.github} website={project.website} description={project.description} tags={project.tags} technologies={project.technologies} />
        ))}
        <OutroCoverPage>
          <Image
            src="https://cliparting.com/wp-content/uploads/2018/03/cool-pictures-2018-32.jpg"
            layout="fill"
            alt="cover"
          />
        </OutroCoverPage>
      </HTMLFlipBook>
    </div>
  );
}
