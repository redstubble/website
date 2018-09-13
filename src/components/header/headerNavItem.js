import React from 'react'
import styled from 'styled-components'
import { Button, Icon } from 'semantic-ui-react'
import ReactCardFlip from 'react-card-flip'
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import PageType from '../../utils/pageType'
import { updatePageState, updatePostState } from '../../redux-actions'

const CustomIcon = styled(Icon)`
  background-color:'#fff'
`;

class NavItem extends React.Component {
  render({ post, type, title, color } = this.props) {
    if (!post) {
      return (
        <ReactCardFlip
          isFlipped={this.props.page === this.props.type}
        >
          <Button
            key="front"
            style={{
              borderRadius: '3.5rem',
              color: 'white',
              backgroundColor: color,
            }}
            size="large"
            onClick={() => {
              this.props.dispatchPostState(null)
              this.props.dispatchPageState(type)
              if (window.location.pathname !== '/') {
                navigate('/');
              }
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
              if (!this.props.post) {
                this.props.dispatchPageState(PageType.index)
              }
              this.props.dispatchPostState(null)
              if (window.location.pathname !== '/') {
                navigate('/');
              }
            }}
          >
            {title}
          </Button>
        </ReactCardFlip>
      )
    }
    return   <Button
                inverted
            style={{
              borderRadius: '3.5rem',
              color: color,
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: color,
              backgroundColor: '#fff'
            }}
            size="large"
    onClick={() => {
      this.props.dispatchPostState(null)
              if (!this.props.post) {
                this.props.dispatchPageState(PageType.index)
              }
              if (window.location.pathname !== '/') {
                navigate('/');
              }
            }}
    labelPosition="left"
    icon
  >
    {title}
    <CustomIcon style={{    backgroundColor: '#fff'
}} name="left arrow" />
  </Button>
  }
}

const mapStateToProps = state => {
  return {
    page: state.page,
    post: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    dispatchPageState: page => dispatch(updatePageState(page)),
    dispatchPostState: page => dispatch(updatePostState(page)) 
   }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavItem) // passes dispatch to component.
