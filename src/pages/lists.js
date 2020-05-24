import React from "react";
import { Layout, SEO } from "../components";
import tutorials from "../data/tutorials";
import events from "../data/events";
import articles from "../data/articles";
import PageLinks from "../components/PageLinks";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  a {
    display: block;
    background: #f4f4f4;
    color: #19181a;
    padding: 1rem;
    text-decoration: none;
  }
  a:hover {
    background: #e4e4e4;
  }
`;

const ListsPage = () => {
  return (
    <Layout title="Lists">
      <SEO title="LISTS" />
      <p>個人的に今キテいるWebpages</p>
      <h2>tutorials</h2>
      <Div>
        <PageLinks data={tutorials} />
      </Div>
      <h2>events</h2>
      <Div>
        <PageLinks data={events} />
      </Div>

      <h2>articles</h2>
      <Div>
        <PageLinks data={articles} />
      </Div>
    </Layout>
  );
};

export default ListsPage;
