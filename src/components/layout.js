import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, Link, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

const navLinkStyle = css`
  margin: 0px 10px;
`

const navLinkBar = css`
  display: flex;
  justify-content: flex-end;
  padding-top: ${rhythm(0.2)};
`

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        css={css`
          margin: 0 auto;
          max-width: 1024px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <nav
          css={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: ${rhythm(1)};
          `}
        >
          <Link to="/">
            <h3
              css={css`
                display: inline-block;
                font-style: normal;
              `}
            >
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <div css={navLinkBar}>
            <Link to="/resume/" css={navLinkStyle}>
              Resume
            </Link>
            <Link to="/projects/" css={navLinkStyle}>
              Projects
            </Link>
            <Link to="/realestate-investing/" css={navLinkStyle}>
              Real Estate Investing
            </Link>
            <Link to="/thoughts/" css={navLinkStyle}>
              Thoughts
            </Link>
            <Link to="/contact/" css={navLinkStyle}>
              Contact
            </Link>
          </div>
        </nav>
        <main>{children}</main>
      </div>
    )}
  />
)
