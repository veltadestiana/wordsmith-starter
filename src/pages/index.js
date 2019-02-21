import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../css/index.css';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="wordsmith"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <h2
          style={{ textAlign: 'right', fontWeight: '500' }}
        >{new Date().getFullYear()}</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="blog-list" key={node.fields.slug}>
              <p className="blog-title">
                <Link style={{
                  boxShadow: `none`,
                  color: 'black',
                  textDecoration: 'none',
                }} to={node.fields.slug}>
                  {title}
                </Link>
              </p>
              <hr className="blog-line" />
              <p className="blog-date">
                {node.frontmatter.date}
              </p>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD")
            title
          }
        }
      }
    }
  }
`
