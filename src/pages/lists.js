import React from "react";
import Layout from "../components/Layout";
import tutorials from "../data/tutorials";
import events from "../data/events";
import articles from "../data/articles";
import PageLinks from "../components/PageLinks";
import classes from "../styles/pages/lists.module.scss";

const ListsPage = () => {
  console.log(tutorials);
  console.log(events);
  console.log(articles);

  return (
    <Layout>
      <h2>Lists</h2>
      <p>個人的に今キテいるWebpages</p>
      <div className={classes.lists}>
        <PageLinks data={tutorials} />
      </div>
    </Layout>
  );
};

export default ListsPage;
