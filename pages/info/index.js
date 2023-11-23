import Info from "@/components/info/Info";
import { Fragment } from "react";
import Head from "next/head";
function InfoPage() {
  return (
    <Fragment>
      <Head>
        <title>Info</title>
        <meta
          name="description"
          content="Know about this website and technologies used in building the app"
        />
      </Head>
      <Info />
    </Fragment>
  );
}

export default InfoPage;
