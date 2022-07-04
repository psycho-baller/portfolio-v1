import { forwardRef } from "react";

interface outroCoverProps {
  children: React.ReactNode;
}

const OutroCoverPage = forwardRef((props: outroCoverProps, ref: any) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
OutroCoverPage.displayName = "OutroCoverPage";
export default OutroCoverPage;