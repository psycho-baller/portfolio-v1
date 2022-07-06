import { Markup } from "interweave";
import { forwardRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
interface ProjectProps {
//   children: React.ReactNode;
  number: number;
  name: string;
  image: string;
  github: string;
  website: string;
  description: string;
  languages: string[];
  technologies: string[];
  wakatime: string;
}

const Project = forwardRef((props: ProjectProps, ref: any) => {

  return (
    <div className="project" ref={ref}>
      <Navbar></Navbar>
      <div className="project-content" style={{ backgroundColor: "blue" }}>
        <h2 className="project-header">
          {props.name} - project #{props.number + 1}
        </h2>
        <div className="project-image">{props.image}</div>
        <div className="project-description">{props.description}</div>
        <div className="project-tags">
          {props.languages.map((language, index: number) => (
            <span key={index}>{language}</span>
          ))}
        </div>
        <div className="project-technologies">
          {props.technologies.map((technology, index: number) => (
            <span key={index}>{technology}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={props.github}>Github</a>
          {props.website ? <a href={props.website}>Website</a> : null}
        </div>
        <div className="project-wakatime">
          <Markup content={props.wakatime} />
        </div>
        {/* <div className="project-text">{props.children}</div> */}
        <div className="project-footer">{props.number + 1}</div>
      </div>
      <Footer></Footer>
    </div>
  );
});
Project.displayName = "Project";
export default Project;