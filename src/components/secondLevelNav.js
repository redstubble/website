import React from 'react';
import ReactCardFlip from 'react-card-flip';

class NavItem extends React.Component {
  state = {};

  render() {
    const childHeight = 500;
    return (
      <ReactCardFlip isFlipped={false}>
        {React.cloneElement(this.props.children, { key: 'front' })}
        <div key="back" style={{ height: childHeight }} />
      </ReactCardFlip>
    );
  }
}

export default NavItem;
