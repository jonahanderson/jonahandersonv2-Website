import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-20">
      <div className="max-w-lg text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">404</p>
        <h1 className="mb-4 text-4xl text-gray-900 dark:text-white">This page took a wrong turn.</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
          The route could not be found, but the portfolio is still right where you left it.
        </p>
        <Link
          to="/"
          className="inline-flex rounded-xl bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
