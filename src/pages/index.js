import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import parse from 'html-react-parser'

import Layout from "../components/layout"
import SEO from "../components/seo"

import scoreSrc from '../images/score.jpg';

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
        <strong>GatsbyJs</strong>, <strong>headless CMS (Wordpress)</strong>, Netlify & Github (deployment).
      </p>
      <p>
        <img width="242px" src={scoreSrc} alt="wynik testu Lighthouse" />
      </p>
    </div>
  </Layout>
)

export default IndexPage
