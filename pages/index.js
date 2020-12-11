import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>
          Jordan Justice | Designer, developer, leader, and community advocate
        </title>
      </Head>

      <img className="w-1/2 mx-auto" src="/thumbs-up.png" />

      <h1>Hi, I'm Jordan!</h1>

      <p className="text-2xl">
        I <Link href="/work">work</Link> as a designer, developer, leader, and
        community advocate.
      </p>

      <p>
        Want to learn more? See what I'm up to <Link href="/now">now</Link>, or
        explore my tools and processes on my <Link href="/uses">uses</Link>{" "}
        page.
      </p>
    </Layout>
  );
}
