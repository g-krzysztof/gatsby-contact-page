/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Scrollbars from 'react-custom-scrollbars'
import { useMediaQuery } from 'react-responsive'

import Header from "./Header"
import ProfileCard from "./ProfileCard"

import "./layout.css"
import "../scss/index.scss"

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

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
        <Desktop>
          <div className="Content">
            <div className="Content__wrapper">
              <Scrollbars>
              <div style={{ paddingRight: "20px" }}>
                <main>{children}</main>
              </div>
              </Scrollbars>
            </div>
          </div>
        </Desktop>
        <Mobile>
          <div className="Content">
            <div className="Content__wrapper">
              <div style={{ paddingRight: "20px" }}>
                <main>{children}</main>
              </div>
            </div>
          </div>
        </Mobile>
      </div>

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
