import React, { Component } from 'react'
import { Grid, Card, Dimmer, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import { updatePostState, updatePageState } from '../redux-actions'
import PageType from '../utils/pageType'
import LazyImage from './lazyImage'

class CodeCard extends Component {
  state = {
    hover: false,
  }

  setHover = bool => this.setState({ hover: bool })

  render({ Type, PageLink, ButtonTitle, ImgSrc } = this.props) {
    return (
      <Grid.Column
      mobile={16}
      tablet={8}
      computer={5}
      textAlign="center"
    >
      <Card style={{ width: '100%' }}>
        <Dimmer.Dimmable
          onMouseEnter={() => this.setHover(true)}
          onMouseLeave={() => this.setHover(false)}
          onClick={() => this.setHover(!this.state.hover)}
          blurring
          dimmed={this.state.hover}
        >
          <Dimmer active={this.state.hover}>
            <Button
              inverted
              content={ButtonTitle}
              onClick={() => {
                navigate(PageLink);
                this.props.dispatchPostState(ButtonTitle);
                }}
            />
          </Dimmer>
          <LazyImage
            centered
            style={{ height: '180px', padding: '20px', objectFit: 'contain' }}
            src={ImgSrc}
          />
        </Dimmer.Dimmable>
      </Card>
      </Grid.Column>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return { 
    dispatchPageState: type => dispatch(updatePageState(type)),
    dispatchPostState: page => dispatch(updatePostState(page)) 
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CodeCard) // passes dispatch to component.