import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { rhythm } from '../utils/typography'

class ProjectIndex extends React.Component {
  render({ context } = this.props) {
    debugger
    const siteDescription = get(
      context,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(context, 'props.data.allMarkdownRemark.edges')
    debugger
    {
      posts.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })
    }
  }
}

export default ProjectIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "Project" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
