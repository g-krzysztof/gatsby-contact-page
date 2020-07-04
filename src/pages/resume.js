import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import pdf from '../utils/krzysztofgryc.pdf';

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Content__about">
      <h2>Doświadczenie zawodowe</h2>
      <h4>od 2014<br />freelancer<br />
        <span className="Content__job-title">front-end developer / grafik komputerowy</span></h4>
      <ul className="Content__list">
        <li>tworzenie stron internetowych: html, css [scss], js [react.js]</li>
        <li>tworzenie stron www z wykorzystaniem CMS: Joomla, Wordpress</li>
        <li>projektowanie layoutów stron www oraz elementów graficznych</li>
        <li>projektowanie grafik na potrzeby poligrafii oraz reklamy zewnętrznej</li>
      </ul>
      <div className="Content__spacer"></div>
      <div className="Content__border-gradient"></div>
      <h4>2012-2014 <br />Infomax E. Marasik - Bielejec & G. Bielejec Sp. j.<br />
        <span className="Content__job-title">grafik komputerowy DTP / montażysta CTP</span></h4>
      <ul className="Content__list">
        <li>tworzenie projektów, m.in. ulotki, plakaty, foldery, logotypy, bannery</li>
        <li>sprawdzanie poprawności plików, usuwanie błędów, komputerowy montaż</li>
      </ul>

      <div className="Content__spacer"></div>
      <div className="Content__border-gradient"></div>

      <h4>2010-2012<br />freelancer<br />
        <span className="Content__job-title">grafik komputerowy</span></h4>
      <ul className="Content__list">
        <li>tworzenie stron www z wykorzystaniem systemów CMS: Joomla, Wordpress</li>
        <li>projektowanie grafik na potrzeby poligrafii oraz reklamy zewnętrznej</li>
      </ul>

      <div className="Content__spacer"></div>
      <div className="Content__border-gradient"></div>

      <h4>2007-2010<br />Drukarnia Offsetowa PRYM S.C. <br />
        <span className="Content__job-title">grafik komputerowy DTP / montażysta CTP</span></h4>
      <ul className="Content__list">
        <li>tworzenie projektów, m.in. ulotki, plakaty, foldery, gazetki produktowe</li>
        <li>sprawdzanie poprawności plików, usuwanie błędów, komputerowy montaż</li>
      </ul>


      <div className="Content__spacer"></div>
      <h3>Umiejętności i znajomość technologii</h3>
      <div className="Content__border-gradient"></div>
      <div className="Content__spacer"></div>
      <ul className="Content__list">
        <li>html</li>
        <li>css (sass, bem)</li>
        <li>java script (ES6)</li>
        <li>react.js</li>
        <li>git</li>
        <li>webpack</li>
        <li>npm</li>
        <li>wordpress</li>
        <li>joomla</li>
        <li>photoshop</li>
      </ul>
      <div className="Content__spacer"></div>
      <h3>Link do pełnego CV w formacie pdf</h3>
      <div className="Content__border-gradient"></div>
      <div className="Content__spacer"></div>
      <p><a href={pdf} target="_blank" rel="noopener noreferrer"><span className="Content__strong-span">Krzysztof Gryc - plik pdf z CV</span></a></p>
      <div className="Content__spacer"></div>
    </div>
  </Layout>
)

export default ContactPage
