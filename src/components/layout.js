import React from "react"
import {css} from "@emotion/core"
import {StaticQuery, Link, graphql} from "gatsby"

import {rhythm} from "../utils/typography"

const navLinkStyle = css`margin: 0px 10px;
            float: right;`;

export default ({children}) => (
    <StaticQuery
        query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
        }
        render={data => (
            <div
                css={css`
          margin: 0 auto;
          max-width: 1200px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
            >
                <nav><Link to={`/`}>
                    <h3
                        css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
                    >
                        {data.site.siteMetadata.title}
                    </h3>
                </Link>
                    <Link
                        to={`/contact/`}
                        css={navLinkStyle}
                    >
                        Contact
                    </Link>
                    <Link
                        to={`/blog/`}
                        css={navLinkStyle}
                    >
                        Blog
                    </Link></nav>
                <main>{children}</main>
            </div>
        )}
    />
)