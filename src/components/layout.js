/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header2 from "./header2"
import Header from "./Header"
import ProfileCard from "./ProfileCard"
import Content from "./Content"


import "./layout.css"
import "../scss/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

    <div className="App">
      <div className="App__layout">
        <Header />
        <ProfileCard />
        <Content />
      </div>
      {/*<Header2 siteTitle={data.site.siteMetadata.title} />*/}
      {/*<div*/}
      {/*  style={{*/}
      {/*    margin: `0 auto`,*/}
      {/*    maxWidth: 960,*/}
      {/*    padding: `0 1.0875rem 1.45rem`,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <main>{children}</main>*/}
      {/*  <footer>*/}
      {/*    © {new Date().getFullYear()}, Built with*/}
      {/*    {` `}*/}
      {/*    <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
      {/*  </footer>*/}
      {/*</div>*/}
      <ul className="App__squares">
        <li className="fa fa-stop" aria-hidden="true"></li>
        <li className="fa fa-stop" aria-hidden="true"></li>
        <li className="fa fa-stop" aria-hidden="true"></li>
        <li className="fa fa-stop" aria-hidden="true"></li>
        <li className="fa fa-stop" aria-hidden="true"></li>
        <li className="fa fa-stop" aria-hidden="true"></li>
        <li className="fa fa-stop" aria-hidden="true"></li>
        <li className="fa fa-stop" aria-hidden="true"></li>
        <li className="fa fa-stop" aria-hidden="true"></li>
        <li className="fa fa-stop" aria-hidden="true"></li>
        <li className="fa fa-stop" aria-hidden="true"></li>
        <li className="fa fa-stop" aria-hidden="true"></li>
      </ul>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
