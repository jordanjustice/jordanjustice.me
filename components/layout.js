import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
              <div className="w-8 -ml-1 mr-2 transition-transform transform hover:rotate-12 hover:scale-110">
                <Image width={32} height={32} priority={true} src="/me.png" />
              </div>
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
