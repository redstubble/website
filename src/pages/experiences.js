import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { rhythm } from '../utils/typography'
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
          filter: { frontmatter: { type: { eq: "Experience" } } }
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
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={5}
            textAlign="center"
            key={node.fields.slug}
          >
            <PreviewItem
              ButtonTitle={title}
              ImgSrc={node.frontmatter.linkImage.publicURL}
              PageLink={node.fields.slug}
            />
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </Grid.Column>
        )
      })

      return (
        <Container style={{ margin: '20px 0' }}>
          <Grid centered>{content}</Grid>
        </Container>
      )
    }}
  />
)
