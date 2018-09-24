import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import get from 'lodash/get'
import PageType from '../utils/pageType'
import { Grid, Container } from 'semantic-ui-react'
import PreviewItem from '../components/menuPreviewItem'

export default () => (
  <StaticQuery
    query={graphql`
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
                linkImage {
                  absolutePath
                  relativePath
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const content = data.allMarkdownRemark.edges.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug
        return (
            <PreviewItem
              ButtonTitle={title}
              ImgSrc={node.frontmatter.linkImage.publicURL}
              PageLink={node.fields.slug}
              type={PageType['projects']}
              key={node.fields.slug}
            />
        )
      })

      return (
        <Container style={{ margin: '20px 0' }}>
        <h3 style={{textAlign:'center'}}>Projects</h3>
          <Grid centered>{content}</Grid>
        </Container>
      )
    }}
  />
)
