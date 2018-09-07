import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Projects from '../../pages/projects';
import Resume from '../../pages/resume';
import Experience from '../../pages/experience';
import PageType from '../../utils/pageType';
import { red, blue, orange } from '../../utils/colors';

const LineBreak = styled.div`
  width: 100%;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: ${orange};
  transform: skew(1.5deg, -1.5deg);
`;

class CustomRouter extends React.Component {
  getComponent() {
    if (this.props.currentLivePage === PageType.index) return <div />;
    if (this.props.currentLivePage === PageType.projects) return <Projects />;
    if (this.props.currentLivePage === PageType.experience)
      return <Experience />;
    if (this.props.currentLivePage === PageType.resume) return <Resume />;
  }

  render() {
    return (
      <div style={{ margin: '15px 0' }}>
        <LineBreak />
        {this.props.currentLivePage && this.getComponent()}
        <LineBreak
          style={{ borderTopColor: blue, transform: 'skew(-1.5deg, 1.5deg)' }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentLivePage: state.page,
  };
};

export default connect(
  mapStateToProps,
  null,
)(CustomRouter); // passes dispatch to component.
