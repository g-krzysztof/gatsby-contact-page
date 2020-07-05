import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import parse from 'html-react-parser'

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
query IndexPageQuery {
  wordpressPost(categories: {elemMatch: {name: {eq: "about-me"}}}) {
    content
    title
  }
}
`
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="Content__about">
      {parse(data.wordpressPost.content)}

      <p>
        Ta strona została zbudowana przy pomocy: <br/>
        <strong>GatsbyJs</strong>, <strong>Wordpress</strong> (dane z headless CMS), Netlify & Git (deployment).
      </p>
    </div>
  </Layout>
)

export default IndexPage
