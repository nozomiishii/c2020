import React from "react"
import { Link } from "gatsby"
import "../styles/components/header.module.scss"
import headerStyles from "../styles/components/header.module.scss"

const Header = () => (
  <div className={headerStyles.header}>
    <Link to="/">
      <h1>NOZOMI ISHII</h1>
    </Link>
    <ul>
      <Link to="/about" activeClassName={headerStyles.activeNavItem}>
        ABOUT
      </Link>
      <Link to="/blog" activeClassName={headerStyles.activeNavItem}>
        BLOG
      </Link>
      <Link to="/codelab" activeClassName={headerStyles.activeNavItem}>
        CODE LAB
      </Link>
      <Link to="/contact" activeClassName={headerStyles.activeNavItem}>
        CONTACT
      </Link>
    </ul>
  </div>
)

export default Header
