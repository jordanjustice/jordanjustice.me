import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Now() {
  return (
    <Layout>
      <Head>
        <title>Now | Jordan Justice</title>
      </Head>
      <h1>Now</h1>
      <h2>At home and outside (a lot)</h2>
      <p>
        Living in the U.S. this year has meant staying home often. While I miss
        some more community focused events and advocacy work that have been a
        large part of my life for the past decade, there is definitely joy and
        hope in being around my wife and kids so much. We've gone for walks
        pretty much every day, explored new parks, and my oldest child got
        interested in mountain biking. Now that winter is setting in, we're
        learning new card games, snuggling for movies, and embracing video
        games. We're lucky to have stability in work and finances and to have
        had close family and friends all in good health. Occasionally I miss
        having a lunch hour to myself... 🤷🏼‍♂️
      </p>
      <h2>Pizza and Bread</h2>
      <p>
        Like many others this year, I got (back) into sourdough. A few years ago
        a friend who sold loaves made with beer and cheese at our local farmers'
        market was kind enough to share the process with me and get me started.
        I stuck with if for a few months, but eventually moved on.
      </p>
      <p>
        But now with kids and weekly pizza night, I've kept a starter alive and
        enjoyed making pies every week. During the summer it was a great vehicle
        for all the amazing veggies we were getting from our{" "}
        <Link href="http://www.sharedlegacyfarms.com/">CSA share</Link>.
      </p>
      <p>
        Once I had pizza down I started working on bread again and picked up{" "}
        <Link href="https://www.artisanbryan.com/cookbook">
          Bryan Ford's new book
        </Link>{" "}
        and I've been working through it ever since.
      </p>
      <h2>Konvert™ App</h2>
      <p>
        My day job at <Link href="https://concentrek.io/">Concentrek</Link>{" "}
        provides me with the opportunity to work on their SaaS offering,{" "}
        <Link href="https://konvertapp.com/">Konvert™</Link>. With a small
        nimble team I'm enjoying the daily tasks that go into product
        planning/strategy, and UI/UX design and development. Still love working
        with React and GraphQL.
      </p>
      <p className="italic text-xs text-blue-500">
        Updated December 10th, 2020 from Toledo, Ohio
      </p>
    </Layout>
  );
}
