import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import ReactCardFlip from 'react-card-flip';
import { connect } from 'react-redux';
import PageType from '../utils/pageType';
import { updatePageState } from '../actions';

class NavItem extends React.Component {
  state = {
    currentLivePage: null,
    isFlipped: false,
    pageType: null,
  };

  componentDidUpdate() {
    this.setState({
      isFlipped: this.state.currentLivePage === this.state.pageType,
    });
  }

  setFlip = (bool) =>
    this.setState({
      isFlipped: bool,
    });

  render({ type, title, color } = this.props) {
    console.log(type);
    // if (!this.pageType) {
    //   this.setState({
    //     pageType: type,
    //   });
    // }
    console.log(this.props);
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <Button
          key="front"
          style={{
            borderRadius: '3.5rem',
            color: 'white',
            backgroundColor: color,
          }}
          size="large"
          onClick={() => {
            this.props.dispatchPageState(PageType.index);
          }}
        >
          {title}
        </Button>
        <Button
          key="back"
          inverted
          style={{
            borderRadius: '3.5rem',
            color: color,
            backgroundColor: 'white',
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: color,
          }}
          size="large"
          onClick={() => {
            this.props.dispatchPageState(PageType.index);
          }}
        >
          {title}
        </Button>
      </ReactCardFlip>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return {
    currentLivePage: state.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger;
  return { dispatchPageState: (state) => dispatch(updatePageState(state)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavItem); // passes dispatch to component.
