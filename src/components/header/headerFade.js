import React from 'react';

const NoDecorationLink = {
  textDecoration: 'none',
  color: 'inherit',
};

export default ({ children } = this.props) => (
  <div
    style={{
      backgroundImage: 'linear-gradient(rgb(208, 240, 255), #fff)',
      // maxHeight: '80px',
    }}
  >
    {children}
  </div>
);
