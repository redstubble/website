import React from 'react'
import styled from 'styled-components'
import { Button, Icon } from 'semantic-ui-react'
import ReactCardFlip from 'react-card-flip'
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import PageType from '../../utils/pageType'
import { updatePageState, updatePostState } from '../../redux-actions'

const CustomIcon = styled(Icon)`
  background-color:'#fff';
  border-bottom-left-radius:3.5rem;
  border-top-left-radius:3.5rem;
`;

const ButtonFront = styled(Button)`
&&& {
  border-radius: 3.5rem;
  color: #fff;
  background-color: ${props => props.colorprop};
  &:hover {
    background-color: ${props => props.colorprop};
    color:#fff;
}
}
`

const ButtonBack = styled(ButtonFront)`
&&& {
border-width: 3px;
border-style: solid;
border-color: ${props => props.colorprop};
color:  ${props => props.colorprop};
background-color: #fff;
&:hover {
  color:  ${props => props.colorprop};
  background-color: #fff;
  }
  }
`

class NavItem extends React.Component {
  render({ post, type, title, color } = this.props) {
    if (!post) {
      return (
        <ReactCardFlip
          isFlipped={this.props.page === this.props.type}
        >
          <ButtonFront colorprop={color}
            key="front"
            size="large"
            onClick={() => {
              this.props.dispatchPostState(null)
              this.props.dispatchPageState(type)
            }}
          >
            {title}
          </ButtonFront>
          <ButtonBack colorprop={color}
            key="back"
            size="large"
            onClick={() => {
              if (!this.props.post) {
                this.props.dispatchPageState(PageType.index)
              }
              this.props.dispatchPostState(null)
            }}
          >
            {title}
          </ButtonBack>
        </ReactCardFlip>
      )
    }
    return   <ButtonBack colorprop={color}
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
  </ButtonBack>
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
