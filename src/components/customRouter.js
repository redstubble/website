import React from 'react'
import { connect } from 'react-redux'
import MDProjects from '../pages/projects'
import Resume from '../pages/resume'
import Experiences from '../pages/experiences'
import PageType from '../utils/pageType'
import SandboxProject from '../components/sandbox-projects'

class CustomRouter extends React.Component {
  getComponent() {
    if (this.props.page === PageType.index) return <div />
    if (this.props.page === PageType.projects) return (
      <React.Fragment>
    <MDProjects />
    <SandboxProject />
      </React.Fragment>
    )
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
