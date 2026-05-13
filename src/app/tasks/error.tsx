"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="max-w-lg mx-auto py-8 px-4">
      <h2 className="text-xl font-bold text-red-500 mb-2">
        Something went wrong
      </h2>
      <p className="text-gray-500 mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
      >
        Try again
      </button>
    </main>
  );
}
