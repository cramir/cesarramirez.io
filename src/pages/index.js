import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/SEO"

export default (props) => (
    <Layout>
        <SEO />
        <h1>Welcome</h1>
        <p>
            I'm a web developer, real estate investor, and security enthusiast.
        </p>
        <p>
            I tend to keep my personal projects rather minimalistic. Over time I'll add a few here.
        </p>
    </Layout>
)