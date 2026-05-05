export default function TaskDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="max-w-lg mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold">Task {params.id}</h1>
    </main>
  );
}
