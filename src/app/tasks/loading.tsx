export default function Loading() {
  return (
    <main className="max-w-lg mx-auto py-8 px-4">
      <div className="animate-pulse flex flex-col gap-3">
        <div className="h-8 bg-gray-200 rounded w-32" />
        <div className="h-12 bg-gray-200 rounded" />
        <p>test loading......</p>
        <div className="h-16 bg-gray-200 rounded" />
        <div className="h-16 bg-gray-200 rounded" />
        <div className="h-16 bg-gray-200 rounded" />
      </div>
    </main>
  );
}
