import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center p-8 text-center">
      <h1 className="text-6xl font-bold text-black">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-black">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-700">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Go back home
      </Link>
    </main>
  )
}