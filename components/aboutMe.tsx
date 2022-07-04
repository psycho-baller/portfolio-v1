import { forwardRef } from "react";

interface AboutMeProps {
  children: React.ReactNode;
}

const AboutMe = forwardRef((props: AboutMeProps, ref: any) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe;
