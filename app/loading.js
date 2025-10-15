export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-200">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400 mx-auto mb-4"></div>
        <p className="text-lg text-slate-400">Loading...</p>
      </div>
    </div>
  )
}