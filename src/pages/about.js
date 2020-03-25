import React from "react";
import Layout from "../components/Layout";
import aboutStyles from "../styles/pages/about.module.scss";
import Head from "../components/Head";
import LinkToSNS from "../components/LinkToSNS";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="ABOUT" />
      <div className={aboutStyles.about}>
        <h2>Who's Nozomi Ishii??</h2>
        <LinkToSNS />
      </div>
      <div>privious webpage</div>
      <div>works</div>
    </Layout>
  );
};

export default AboutPage;
