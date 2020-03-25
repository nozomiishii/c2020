import React from "react";
import { Link } from "gatsby";
import headerStyles from "../styles/components/header.module.scss";
import Container from "react-bootstrap/Container";
const Header = () => (
  <Container className={headerStyles.header}>
    <Link to="/">
      <h1>NOZOMI ISHII</h1>
    </Link>
    <ul>
      <Link to="/about" activeClassName={headerStyles.activeNavItem}>
        ABOUT
      </Link>
      <Link to="/blog" activeClassName={headerStyles.activeNavItem}>
        INFO
      </Link>
      <Link to="/codelab" activeClassName={headerStyles.activeNavItem}>
        CODE LAB
      </Link>
      <Link to="/contact" activeClassName={headerStyles.activeNavItem}>
        CONTACT
      </Link>
    </ul>
  </Container>
);

export default Header;
