import React from "react";
import { Link } from "gatsby";
import headerStyles from "../styles/components/header.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Header = () => {
  // const links = ["about", "info", "codelab", "contact"];
  return (
    <Container>
      <Row className={headerStyles.header}>
        <Col md={5} className={headerStyles.title}>
          <Link to="/">
            <h1>NOZOMI ISHII</h1>
          </Link>
        </Col>
        <Col md={7} className={headerStyles.menu}>
          <Row>
            {/* {links.map((link) => (
              <Link to={`/${link}`} activeClassName={headerStyles.activeNavItem}>
                {link.toUpperCase()}
              </Link>
            ))} */}
            <Link to="/about" activeClassName={headerStyles.activeNavItem}>
              ABOUT
            </Link>
            <Link to="/info" activeClassName={headerStyles.activeNavItem}>
              INFO
            </Link>
            <Link to="/codelab" activeClassName={headerStyles.activeNavItem}>
              CODE LAB
            </Link>
            <Link to="/contact" activeClassName={headerStyles.activeNavItem}>
              CONTACT
            </Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
