import BlogPreviewList from "components/blog/BlogPreviewList";
import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>makeItYes</title>
      </Head>
      <title>Ozan coding</title>

      <BlogPreviewList />
    </>
  );
};

export default Home;
