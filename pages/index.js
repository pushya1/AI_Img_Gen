// landing page
import Head from "next/head";
import { Fragment } from "react";
import ImgGen from "@/components/generators/ImgGen";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>AI Image Gen</title>
        <meta
          name="description"
          content="Generate AI images instantly .uses DALLE model for image generation"
        />
      </Head>
      <ImgGen />
    </Fragment>
  );
}

export default HomePage;
