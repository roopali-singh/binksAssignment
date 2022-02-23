import React from "react";
import "../../style/sharedComponetsStyle/PageTitle.css";

function PageTitle({ title }) {
  return (
    <header className="pageTitle">
      <h1>{title}</h1>
    </header>
  );
}

export default PageTitle;
