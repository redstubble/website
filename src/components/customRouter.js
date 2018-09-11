import React from 'react'
import { connect } from 'react-redux'
import Projects from '../pages/projects'
import Resume from '../pages/resume'
import Experiences from '../pages/experiences'
import PageType from '../utils/pageType'
import { red, blue, orange } from '../utils/colors'

class CustomRouter extends React.Component {
  getComponent() {
    if (this.props.currentLivePage === PageType.index) return <div />
    if (this.props.currentLivePage === PageType.projects) return <Projects />
    if (this.props.currentLivePage === PageType.experiences)
      return <Experiences />
    if (this.props.currentLivePage === PageType.resume) return <Resume />
  }

  render = () =>  (this.props.currentLivePage && this.getComponent())
}

const mapStateToProps = state => {
  return {
    currentLivePage: state.page,
  }
}

export default connect(
  mapStateToProps,
  null
)(CustomRouter) // passes dispatch to component.
