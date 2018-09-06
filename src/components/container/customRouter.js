import React from 'react';
import { connect } from 'react-redux';
import Projects from '../../pages/projects';
import Resume from '../../pages/resume';
import PageType from '../../utils/pageType';
import { red, blue, orange } from '../../utils/colors';

class CustomRouter extends React.Component {
  getComponent() {
    if (this.state.currentLivePage === PageType.index) return <div />;
    if (this.state.currentLivePage === PageType.projects) return <Projects />;
    if (this.state.currentLivePage === PageType.experience) return null;
    if (this.state.currentLivePage === PageType.resume) return <Resume />;
  }

  render() {
    return (
      <div style={{ marginTop: '10px' }}>
        <div
          style={{
            width: '100%',
            borderTopWidth: '2px',
            borderTopStyle: 'solid',
            borderTopColor: orange,
            borderTopWidth: '2px',
            borderTopStyle: 'solid',
            borderTopColor: orange,
          }}
        />
        {this.state && this.state.currentLivePage && this.getComponent()}
        <div
          style={{
            width: '100%',
            borderTopWidth: '2px',
            borderTopStyle: 'solid',
            borderTopColor: orange,
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return {
    currentLivePage: state.page,
  };
};

export default connect(
  mapStateToProps,
  null,
)(CustomRouter); // passes dispatch to component.
