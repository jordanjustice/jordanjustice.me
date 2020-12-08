import Link from "next/link";

export default function Layout({ home, children }) {
  return (
    <div className="container max-w-xl">
      <header className="flex items-center justify-between py-4 text-sm">
        {!home && (
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img
                className="w-12 -ml-3 transition-transform transform hover:rotate-12 hover:scale-110"
                src="/me.png"
              />
              Jordan Justice
            </div>
          </Link>
        )}
        <div className="ml-auto">
          <Link href="/work">Work</Link>
          <Link href="https://www.github.com/jordanjustice">GitHub</Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-8 py-8 text-xs">
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
