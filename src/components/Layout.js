import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "./layout.module.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header />
      {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout
