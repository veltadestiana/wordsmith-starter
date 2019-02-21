/* eslint-disable */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import '../css/index.css';
import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className="stabilo"
            style={{
              display: `block`,
              marginBottom: rhythm(2.5),
            }}
          >
            <h4 className="description">
              <a>{author}</a> is a writer from New York City that wants to keep her blog simple and clean.
              {` `}
              You can <a href={`https://twitter.com/${social.twitter}`}>follow her Twitter</a> if you feel like it.
            </h4>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
