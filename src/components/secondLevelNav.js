import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import ReactCardFlip from 'react-card-flip';
import { connect } from 'react-redux';
import PageType from '../utils/pageType';

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
