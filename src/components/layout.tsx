import React from "react";
import "semantic-ui-css/semantic.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { colors } from "../utils/colors";
import styled from "styled-components";

type MainLayoutProps = {
  children: React.ReactNode;
  location: Location | undefined;
};

const LineBreak = styled.div`
  width: 100%;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: ${colors.orange};
  transform: skew(1.5deg, -1.5deg);
`;

const MainLayout = ({ children, location }: MainLayoutProps): JSX.Element => {
  // const rootPat/h = `${__PATH_PREFIX__}/`
  return (
    <div style={{ marginBottom: "20px" }}>
      <Header />
      <div style={{ margin: "15px 0" }}>
        <LineBreak />
        {children}
        <LineBreak
          style={{ borderTopColor: "blue", transform: "skew(-1.5deg, 1.5deg)" }}
        />
      </div>
      <Footer />
    </div>
  );
};

export { MainLayout };
