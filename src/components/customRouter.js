import React from 'react'
import { connect } from 'react-redux'
import Projects from '../pages/projects'
import Resume from '../pages/resume'
import Experiences from '../pages/experiences'
import PageType from '../utils/pageType'
import { red, blue, orange } from '../utils/colors'

class CustomRouter extends React.Component {
  getComponent() {
    if (this.props.page === PageType.index) return <div />
    if (this.props.page === PageType.projects) return <Projects />
    if (this.props.page === PageType.experiences)
      return <Experiences />
    if (this.props.page === PageType.resume) return <Resume />
  }

  render = () =>  (this.props.page && this.getComponent())
}

const mapStateToProps = state => {
  return {
    page: state.page,
    post: state.post
  }
}

export default connect(
  mapStateToProps,
  null
)(CustomRouter) // passes dispatch to component.