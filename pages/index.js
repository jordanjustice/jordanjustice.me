import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Prose from "../components/prose";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>
          Jordan Justice | Designer, developer, leader, and community advocate
        </title>
        <meta
          name="description"
          content="Designer, developer, leader, and community advocate living in Toledo,
          Ohio."
        />
      </Head>

      <div className="w-1/2 mx-auto">
        <Image
          height="272px"
          width="272px"
          priority={true}
          src="/thumbs-up.png"
          alt="Jordan Justice thumbs up memoji"
        />
      </div>

      <Prose>
        <h1>Hi, I'm Jordan!</h1>

        <p className="text-2xl">
          I <Link href="/work">work</Link> as a designer, developer, leader, and
          community advocate.
        </p>

        <p>
          Want to learn more? See what I'm up to <Link href="/now">now</Link>,
          or explore my tools and processes on my <Link href="/uses">uses</Link>{" "}
          page.
        </p>
      </Prose>
    </Layout>
  );
}
