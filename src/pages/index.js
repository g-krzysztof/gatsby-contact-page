import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Content__about">
      <h2>Front-end Developer</h2>
      <p>
        Moim celem zawodowym jest praca <br /> na stanowisku Front-end Developera.
      </p>
      <p>
        Na co dzień pracuję z HTML i CSS. <br />
        Rozwijam umiejętności Java Script.<br />
        W ostatnim czasie pracuję głównie z <span className="Content__strong-span">framework React JS.</span></p>
      <div className="Content__spacer"></div>
      <div className="Content__border-gradient"></div>
      <div className="Content__spacer"></div>
      <p>
        Od ponad dziesięciu lat zajmuję się projektowaniem graficznym. <br />Tworzę prace na potrzeby poligrafii oraz projekty stron internetowych.
      </p>
      <p>
        Pracuję także z CMS Joomla i Wordpress.
      </p>

    </div>
  </Layout>
)

export default IndexPage
