import { Text } from "@chakra-ui/react";
import styles from "../styles/index.module.scss";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

import projects from "../public/data/projects";

// Components:
import Project from "../components/projects";
import IntroCoverPage from "../components/introCoverPage";
import OutroCoverPage from "../components/outroCoverPage";
import AboutMe from "../components/aboutMe";
import TableOfContents from "../components/tableOfContents";
import Navbar from "../components/navbar";
import { useRef } from "react";

export default function Home() {
  const book = useRef();

  return (
    <div>
      <Navbar></Navbar>

      {/* @ts-ignore*/}
      <HTMLFlipBook
        width={300}
        height={500}
        size="stretch"
        ref={book}
        // minWidth={315}
        // maxWidth={1000}
        // minHeight={400}
        // maxHeight={1533}
        maxShadowOpacity={0.5}
        // showCover={true}
        // mobileScrollSupport={true}
        className="text-center"
        style={{ backgroundColor: "black" }}
        // startPage={0}
        // minWidth={0}
        // maxWidth={0}
        // minHeight={0}
        // maxHeight={0}
        // drawShadow={false}
        // flippingTime={0}
        // usePortrait={false}
        // startZIndex={0}
        autoSize={true}
        // maxShadowOpacity={0}
        // clickEventForward={false}
        // useMouseEvents={false}
        // swipeDistance={30}
        // showPageCorners={false}
        // disableFlipByClick={true}
      >
        <IntroCoverPage>
          <h1 className="text-7xl">Rami Maalouf</h1>
        </IntroCoverPage>
        <TableOfContents book={book}>Table of Contents</TableOfContents>

        {/* loop through projects */}
        {projects.map((project, index: number) => (
          <Project
            key={index}
            number={index}
            name={project.name}
            image={project.image}
            github={project.github}
            website={project.website}
            description={project.description}
            languages={project.languages}
            technologies={project.technologies}
            wakatime={project.wakatime}
          />
        ))}

        <AboutMe>About Me</AboutMe>

        <OutroCoverPage>
          {/* <Image
            src="https://cliparting.com/wp-content/uploads/2018/03/cool-pictures-2018-32.jpg"
            layout="fill"
            alt="cover"
          /> */}
        </OutroCoverPage>
      </HTMLFlipBook>
    </div>
  );
}
