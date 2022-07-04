import { forwardRef } from "react";

interface introCoverProps {
  children: React.ReactNode;
}

const IntroCoverPage = forwardRef((props: introCoverProps, ref: any) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
IntroCoverPage.displayName = "IntroCoverPage";
export default IntroCoverPage;