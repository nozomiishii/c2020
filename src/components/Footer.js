import React from "react";
import footerStyles from "../styles/components/footer.module.scss";
import LinkToSNS from "./LinkToSNS";

const Footer = () => (
  <div className={footerStyles.footer}>
    <LinkToSNS />
    <p>© 2020 NOZOMI ISHII</p>
  </div>
);

export default Footer;
