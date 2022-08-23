import HTMLFlipBook from "react-pageflip";
import { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import projects from "../public/data/projects";

// Components:
import Project from "../components/projects";
import IntroCoverPage from "../components/introCoverPage";
import AboutMe from "../components/aboutMe";
import TableOfContents from "../components/tableOfContents";
import Navbar from "../components/navbar";
import ContactForm from "../components/contactForm";

export default function Home() {
  const book = useRef();
  const router = useRouter();

  const goTo = router.query.goTo as string | undefined;
  var goToPage: number = 0 as number;
  if (goTo !== undefined && book !== undefined) {
    if (goTo === "toc") {
      goToPage = 1;
    }
    else if (goTo === "projects") {
      goToPage = 2;
    }
    else if (goTo === "about") {
      goToPage = projects.length + 2;
    }
    else if (goTo === "contact") {
      goToPage = projects.length + 3;
    }
    //@ts-ignore
    book.current.pageFlip().turnToPage(goToPage);
    router.query = {};
  }
  const [currentPage, setCurrentPage] = useState(goToPage);


  const [favicon, setFavicon] = useState(true);

  useEffect(() => {
    // book?.current?.pageFlip().flipTo(currentPage);
    setFavicon((favicon) => !favicon);
  }, [currentPage]);

  return (
    <div>
      <div>
        <Head>
          <link rel="icon" href={favicon ? "/logo/r.svg" : "/logo/u.svg"} />
          <title>Rami Maalouf&apos;s portfolio</title>
        </Head>
        <Navbar
          book={book}
          currentPage={currentPage}
        ></Navbar>
        {/* https://github.com/Nodlik/react-pageflip */}
        {/* @ts-ignore*/}
        <HTMLFlipBook
          width={400}
          height={500}
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
              video={project.video}
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

          <ContactForm>Contact Me</ContactForm>

          {/* <OutroCoverPage>
          </OutroCoverPage> */}
        </HTMLFlipBook>
      </div>
    </div>
  );
}
