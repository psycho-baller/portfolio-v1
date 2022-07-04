import { forwardRef } from "react";

interface ProjectProps {
//   children: React.ReactNode;
  number: number;
  name: string;
  image: string;
  github: string;
  website: string;
  description: string;
  tags: string[];
  technologies: string[];
}

const Project = forwardRef((props: ProjectProps, ref: any) => {
  return (
    <div className="project" ref={ref}>
      <div className="project-content" style={{ backgroundColor: "blue" }}>
        <h2 className="project-header">
          {props.name} - project #{props.number + 1}
        </h2>
        <div className="project-image">{props.image}</div>
        <div className="project-description">{props.description}</div>
        <div className="project-tags">
            {props.tags.map((tag, index: number) => (
                <span key={index}>{tag}</span>
            ))}
        </div>
        <div className="project-technologies">
            {props.technologies.map((technology, index: number) => (
                <span key={index}>{technology}</span>
            ))}
        </div>
        <div className="project-links">
            <a href={props.github}>Github</a>
            <a href={props.website}>Website</a>
        </div>
        {/* <div className="project-text">{props.children}</div> */}
        <div className="project-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});
Project.displayName = "Project";
export default Project;
