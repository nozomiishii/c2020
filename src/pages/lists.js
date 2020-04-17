import React from "react";
import Layout from "../components/Layout";
import tutorials from "../data/tutorials";
import events from "../data/events";
import articles from "../data/articles";

const ListsPage = () => {
  console.log(tutorials);
  console.log(events);
  console.log(articles);

  return (
    <Layout>
      <h1>Lists</h1>
      <p>個人的に今キテいるWebpages</p>
    </Layout>
  );
};

export default ListsPage;
