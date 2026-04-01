export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page content">
      <div className="text-center">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="w-8 h-8 border-[3px] border-gray-200 dark:border-gray-700 border-t-red-500 rounded-full animate-spin" />
        </div>
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  )
}
