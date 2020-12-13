import Head from "next/head";
import Link from "next/link";
import Gig from "../components/gig";
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Work | Jordan Justice</title>
        </Head>
        <h1 className="font-extrabold text-3xl">Work</h1>
        <p className="text-2xl">
          Doing work—the hard and generous work—has been a great gift to me. I
          can only hope the things I produce are gifts to others.
        </p>
        <Gig
          title={
            <>
              Director of UX at{" "}
              <span style={{ color: "#ea002a" }}>Concentrek</span>
            </>
          }
          date="2020 - Present"
          description={
            <>
              Back at Concentrek (same agency new name)! This time I'm working
              on their SaaS product offering,{" "}
              <Link href="https://konvertapp.com/">
                <a style={{ color: "#39b54a" }}>Konvert™</a>
              </Link>
              . With a small in-house team, my day to day involves product
              management/strategy/design, and extends to UI design and
              development. Our platform is built with React, Styled Components,
              GraphQL, and more!
            </>
          }
        />
        <Gig
          title={
            <>
              Co-founder at <span style={{ color: "#414DA0" }}>Kinship</span>
            </>
          }
          date="2018 - 2020"
          description="My first attempt to build a business. Started with a few other Toledo-based developers, we were attempting to create a few products of our own while consulting and building them for others. While we failed to do the former, we had a lot of fun helping others. Many lessons from many failures, but had a blast making things better by making better things."
        />
        <Gig
          title={
            <>
              Product and Platform Manager at{" "}
              <span style={{ color: "#A2B625" }}>Root Inc.</span>
            </>
          }
          date="2014 - 2018"
          description="Worked to build a digital product strategy and a team culture to execute on it, helped change the method and quality of projects for Root clients, and shipped Root's first three digital products."
        />
        <Gig
          title={
            <>
              Web Developer at{" "}
              <span style={{ color: "#ea002a" }}>Concentrek Group</span>
            </>
          }
          date="2012 - 2014"
          description="Led our team into building responsive sites (we had no idea of how much the web was really changing), wrangled svg browser compatibility and @2x assets (thanks Retina displays)."
        />

        <h3>Additional ruckus making...</h3>
        <p>
          Outside of my "professional career" I'm always tinkering with a side
          project, whether it be building out an app idea or advocating for
          pedestrian safety in my beloved City of Toledo. You can see what I've
          been up to most recently on my <Link href="/now">now</Link> page.
        </p>
        <h3>Education</h3>
        <p>
          Being in software development has afforded me with constant continuing
          education. One bit that I'm most proud of is being an{" "}
          <Link href="https://altmba.com/">altMBA</Link> alumni. It's helped me
          learn to know what I see, rather than seeing what I know.
        </p>
        <hr />
        <p>
          <Link href="https://www.linkedin.com/in/jordanjustice21/">
            Super Official™ LinkedIn Profile
          </Link>
        </p>
      </Layout>
    </>
  );
}
