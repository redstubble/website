import React from "react";

const NoDecorationLink = {
  textDecoration: "none",
  color: "inherit",
};

type HeaderFadeProps = {
  children: JSX.Element;
};

const HeaderFade = ({ children }: HeaderFadeProps) => (
  <div
    style={{
      backgroundImage: "linear-gradient(rgb(208, 240, 255), #fff)",
      // maxHeight: '80px',
    }}
  >
    {children}
  </div>
);

export { HeaderFade };
