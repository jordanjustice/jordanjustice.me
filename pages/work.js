import Head from "next/head";
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Work</title>
        </Head>
        <h1 className="font-extrabold text-3xl">Work</h1>
      </Layout>
    </>
  );
}
