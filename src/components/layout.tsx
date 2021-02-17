import React from "react";
import { Header } from "./header";

import { rhythm } from "../utils/typography";

type MainLayoutProps = {
  children: React.ReactNode;
  location: Location;
};

const MainLayout = ({ children, location }: MainLayoutProps): JSX.Element => {
  // const rootPat/h = `${__PATH_PREFIX__}/`
  return (
    <div style={{ marginBottom: "20px" }}>
      <Header />
      <div style={{ margin: "15px 0" }}>
        {/* <LineBreak /> */}
        {children}
        {/* <LineBreak */}
        {/* style={{ borderTopColor: 'blue', transform: "skew(-1.5deg, 1.5deg)" }}
        /> */}
      </div>
      {/* <Footer /> */}
    </div>

    // <div
    //   style={{
    //     margin: `0 auto`,
    //     marginBottom: rhythm(1.5),
    //     marginTop: rhythm(1.5),
    //     maxWidth: 650,
    //     paddingLeft: rhythm(3 / 4),
    //     paddingRight: rhythm(3 / 4),
    //   }}
    // >
    //   {children}
    // </div>
  );
};

export { MainLayout };
