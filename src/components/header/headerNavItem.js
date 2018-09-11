import React from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import ReactCardFlip from 'react-card-flip'
import { connect } from 'react-redux'
import PageType from '../../utils/pageType'
import { updatePageState } from '../../redux-actions'
import { store } from '../../redux-reducers'

class NavItem extends React.Component {
  state = {}

  render({ type, title, color } = this.props) {
    if (type) {
      return (
        <ReactCardFlip
          isFlipped={this.props.currentLivePage === this.props.type}
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
              this.props.dispatchPageState(type)
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
              this.props.dispatchPageState(PageType.index)
            }}
          >
            {title}
          </Button>
        </ReactCardFlip>
      )
    }
    return <div />
  }
}

const mapStateToProps = state => {
  return {
    currentLivePage: state.page,
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatchPageState: page => dispatch(updatePageState(page)) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavItem) // passes dispatch to component.
