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


class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    if (this.props.page === PageType.index && this.props.post === null) {
      // loaded from url set state
      this.props.dispatchPageState(PageType[post.frontmatter.type]);
      this.props.dispatchPostState(post.frontmatter.title);
    }

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Container>
        {/* <h1 style={{textAlign:'center', margin: '15px 0' }}>{post.frontmatter.title}</h1> */}
        <div style={{margin: '20px 0'}}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

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
)(PostTemplate) // passes dispatch to component.


export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        type
        title
      }
    }
  }
`
