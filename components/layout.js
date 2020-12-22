import Head from "next/head";
import Link from "next/link";

export default function Layout({ home, children }) {
  return (
    <div className="container max-w-xl">
      <Head>
        <link rel="icon" href="/me.png" alt="Jordan Justice grinning memoji" />
      </Head>
      <header className="h-12 flex items-center justify-between mb-8 py-4 text-sm">
        {!home && (
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img
                className="w-8 -ml-1 mr-2 transition-transform transform hover:rotate-12 hover:scale-110"
                src="/me.png"
              />
              Jordan Justice
            </div>
          </Link>
        )}
        <div className="ml-auto">
          <span className="mx-2">
            <Link href="/work">Work</Link>
          </span>
          <span className="mx-2">
            <Link href="https://www.github.com/jordanjustice">GitHub</Link>
          </span>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-8 py-8 text-xs text-gray-500">
        <p>
          Built with Next.js & Tailwind CSS •{" "}
          <Link href="https://www.github.com/jordanjustice/jordanjustice.me">
            View on GitHub
          </Link>
        </p>
      </footer>
    </div>
  );
}
