import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/SEO"

export default ({ data }) => (
    <Layout>
        <SEO title={data.siteMetadata.title} />
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
            I'm a web developer, real estate investor, and security enthusiast.
        </p>
    </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;