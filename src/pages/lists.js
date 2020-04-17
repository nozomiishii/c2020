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
    <Layout title="Lists">
      <p>個人的に今キテいるWebpages</p>
      <h2>tutorials</h2>
      <div className={classes.lists}>
        <PageLinks data={tutorials} />
      </div>

      <h2>events</h2>
      <div className={classes.lists}>
        <PageLinks data={events} />
      </div>

      <h2>articles</h2>
      <div className={classes.lists}>
        <PageLinks data={articles} />
      </div>
    </Layout>
  );
};

export default ListsPage;
