import "./scss/index.scss";

import * as React from "react";

import { MetaWrapper } from "../../../components";
import Page from "./Page";

const View: React.FC = () => (
  <div className="home-page">
    <MetaWrapper
      meta={{
        description: "Leather designs",
        title: "Cuerex",
      }}
    >
      <Page />
    </MetaWrapper>
  </div>
);

export default View;
