import React from "react";
import { Link } from "gatsby";
import headerStyles from "../styles/components/header.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Linklist = () => {
  const links = ["about", "info", "codelab", "contact"];
  return links.map((link) => (
    <Link
      to={`/${link}`}
      key={link}
      activeClassName={headerStyles.activeNavItem}
    >
      {link.toUpperCase()}
    </Link>
  ));
};

const Header = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("hit");

    const linklist = document.querySelector("#headerLinkList");
    linklist.classList.toggle(headerStyles.show);
  };
  return (
    <Container>
      <Row className={headerStyles.header}>
        <Col xs={7} md={5} className={headerStyles.title}>
          <Link to="/">
            <h1>NOZOMI ISHII</h1>
          </Link>
        </Col>
        <Col xs={5} md={7} className={headerStyles.menu}>
          <button onClick={handleClick}>MENU</button>
          <div id="headerLinkList">
            <Linklist />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
