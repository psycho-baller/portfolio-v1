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
import { useCallback, useRef, useState } from "react";
      import Head from "next/head";

import Contact from "../components/contact";

export default function Home() {
  const book = useRef();
  // @ts-ignore
  const [currentPage, setCurrentPage] = useState(0);
  const [favicon, setFavicon] = useState(true);


  return (
    <div>
      <div
        onClick={() => {
          setFavicon((favicon) => !favicon);
        }}
      >
        <Head>
          <link rel="icon" href={favicon ? "/logo/r.svg" : "/logo/u.svg"} />
          <title>Rami Maalouf&apos;s portfolio</title>
        </Head>
        <Navbar book={book} currentPage={currentPage}></Navbar>
        {/* https://github.com/Nodlik/react-pageflip */}
        {/* @ts-ignore*/}
        <HTMLFlipBook
          width={400}
          height={400}
          size="stretch"
          ref={book}
          onFlip={useCallback((e: Event) => {
            {    
              /* @ts-ignore*/}
            setCurrentPage(e.data as number);
          }, [])}
          // minWidth={315}
          // maxWidth={1000}
          // minHeight={400}
          // maxHeight={1533}
          maxShadowOpacity={0}
          // showCover={true}
          // mobileScrollSupport={false}
          className="text-center"
          style={{ backgroundColor: "black" }}
          // startPage={0}
          minWidth={400}
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
          useMouseEvents={false}
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
              aim={project.aim}
              impact={project.impact}
              learned={project.learned}
              languages={project.languages}
              technologies={project.technologies}
              wakatime={project.wakatime}
            />
          ))}

          <AboutMe>About Me</AboutMe>

          {/* <Contact/> */}

          <OutroCoverPage>
            {/* <Image
            src="https://cliparting.com/wp-content/uploads/2018/03/cool-pictures-2018-32.jpg"
            layout="fill"
            alt="cover"
          /> */}
          </OutroCoverPage>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
