import React from "react";
import footerStyles from "../styles/components/footer.module.scss";
import LinkToSNS from "./PageLinks";

const Footer = () => (
  <div className={footerStyles.footer}>
    <div>
      <p>© 2020 NOZOMI ISHII</p>
    </div>
    <div className={footerStyles.links}>
      <LinkToSNS />
    </div>
  </div>
);

export default Footer;
