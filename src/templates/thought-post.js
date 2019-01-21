import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from '../components/SEO'

export default ({ data }) => {
    const post = data.markdownRemark;
    console.log('the data: ', data);
    return (
        <Layout>
            <SEO title={post.frontmatter.title} article={true} />
            <div>
                <h1>{post.frontmatter.title}</h1>
                <h5>{post.frontmatter.date}</h5>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
 `;