import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jordan Justice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="font-extrabold text-3xl">Hi, I'm Jordan</h1>
    </Layout>
  );
}
