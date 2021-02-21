import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import Prose from "../components/prose";
import Image from "next/image";

export default function Now() {
  return (
    <Layout>
      <Head>
        <title>Now | Jordan Justice</title>
      </Head>
      <Prose>
        <h1>Now</h1>
        <Image
          src="/toledo-sunday.png"
          width={3}
          height={1}
          layout="responsive"
          className="rounded-md"
          alt="The Toledo Sunday Magazine Logo"
        />
        <p>
          <strong>
            <em>The Toledo Sunday Magazine</em>
          </strong>{" "}
          is my latest collaboration project. I've had this idea for a bit, and
          finally found a partner to handle all the editorial work involved with
          it. From a design and development perspective, it gives me an
          opportunity to build something I've been curious in for a while. Most
          local news and editorial sites are either plagued by ads or use weird
          Wordpress themes or funky PDF magazine-like experience apps. This is
          using Next.js under the hood and a TBD headless-CMS (
          <Link href="https://www.sanity.io/">Sanity.io</Link> is the likely
          choice). <Link href="https://toledosunday.com">Subscribe here.</Link>
        </p>
        <h2>Wintering outside</h2>
        <div className="flex flex-wrap h-32 sm:h-60">
          <div className="relative box-border border-white border-2 w-2/3 rounded-md overflow-hidden">
            <Image
              src="/cohen-202101.jpeg"
              // width={4032}
              // height={3024}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Jordan's oldest child, Cohen, examining a snowy landscape."
            />
          </div>
          <div className="relative box-border border-white border-2 w-1/3 rounded-md overflow-hidden max-h-full">
            <Image
              src="/dana-leor-202101.jpeg"
              // width={3024}
              // height={4032}
              layout="fill"
              objectFit="cover"
              objectPosition="left"
              alt="Jordan's wife, Dana, and youngest child, Leor, hiking through snow."
            />
          </div>
        </div>
        <p>
          With social distancing still suggested in the U.S., we still find
          ourselves exploring outside, even with the cold Ohio winter. The kids
          love it, and my wife and I are constantly learning to embrace it.
        </p>
        <h2>Pizza and Bread</h2>
        <p>
          Like many others last year, I got (back) into sourdough. A few years
          ago a friend who sold loaves made with beer and cheese at our local
          farmers' market was kind enough to share the process with me and get
          me started. I stuck with it for a few months, but eventually moved on.
        </p>
        <p>
          But now with kids and weekly pizza night, I've kept a starter alive
          and enjoyed making pies every week. During the summer it was a great
          vehicle for all the amazing veggies we were getting from our{" "}
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
          planning/strategy, and UI/UX design and development. Still love
          working with React and GraphQL.
        </p>
        <p className="text-xs text-blue-900 bg-blue-50 inline-block p-1 rounded">
          Updated February 21st, 2021, from Toledo, Ohio
        </p>
      </Prose>
    </Layout>
  );
}
