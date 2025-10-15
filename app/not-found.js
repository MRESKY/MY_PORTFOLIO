export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-900 text-slate-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-slate-200">Page Not Found</h2>
        <p className="text-slate-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  )
}