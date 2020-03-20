import React from "react"
import { Link } from "gatsby"
import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => (
  <div className={headerStyles.header}>
    <Link to="/">
      <h1>NOZOMI ISHII</h1>
    </Link>
    <ul>
      <Link to="/blog" activeClassName={headerStyles.activeNavItem}>
        BLOG
      </Link>
      <Link to="/codelab" activeClassName={headerStyles.activeNavItem}>
        CODE LAB
      </Link>
      <Link to="/contact" activeClassName={headerStyles.activeNavItem}>
        CONTACT
      </Link>
      <a href="https://twitter.com/nozomiishii_jp" target="_brank">
        TWITTER
      </a>
      <a href="https://github.com/nozomiishii" target="_blank">
        GITHUB
      </a>
    </ul>
  </div>
)

export default Header
