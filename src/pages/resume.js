import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import pdf from '../utils/krzysztofgryc.pdf';
import { graphql} from "gatsby"
import parse from 'html-react-parser'

export const query = graphql`
query ResumePageQuery {  
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "resume"}}}}) {
    edges {
      node {
        content
        title
      }
    }
  }
}
`
const ResumePage = ({data}) => (
  <Layout>
    <SEO title="Resume" />
    <div className="Content__about">

      {data.allWordpressPost.edges.map(post => post.node.title === "Resume" ? parse(post.node.content) : null)}
      {data.allWordpressPost.edges.map(post => post.node.title === "Education" ? parse(post.node.content) : null)}

      <div className="Content__spacer"></div>
      <h4>Link do pełnego CV w formacie pdf</h4>
      <div className="Content__border-gradient"></div>
      <div className="Content__spacer"></div>
      <p><a href={pdf} target="_blank" rel="noopener noreferrer"><span className="Content__strong-span">Krzysztof Gryc - plik pdf z CV</span></a></p>
      <div className="Content__spacer"></div>
    </div>
  </Layout>
)

export default ResumePage
