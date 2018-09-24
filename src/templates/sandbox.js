import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Container } from 'semantic-ui-react';
import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import { connect } from 'react-redux'
import PageType from '../utils/pageType'
import { updatePageState, updatePostState } from '../redux-actions'


class SandboxTemplate extends React.Component {
  render({title, type, description} = this.props) {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    debugger;
    if (this.props.page === PageType.index && this.props.sandbox === null) {
      // loaded from url set state
      this.props.dispatchPageState(PageType[type]);
      this.props.dispatchPostState(title);
    }

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: description }]}
          title={title}
        />
        <Container>
        <div style={{margin: '20px 0'}}>
        {this.props.children}
        </div>
        </Container>
      </Layout>
    )
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
)(SandboxTemplate) // passes dispatch to component.
