import React from "react"
import Layout from "../components/Layout"
import "../styles/pages/about.module.scss"
import aboutStyles from "../styles/pages/about.module.scss"

const About = () => (
  <Layout className={aboutStyles.about}>
    <h1>Who's Nozomi Ishii??</h1>
    <a
      href="https://twitter.com/nozomiishii_jp"
      target="_blank"
      rel="noopener noreferrer"
    >
      TWITTER
    </a>
    <a
      href="https://github.com/nozomiishii"
      target="_blank"
      rel="noopener noreferrer"
    >
      GITHUB
    </a>
  </Layout>
)

export default About
