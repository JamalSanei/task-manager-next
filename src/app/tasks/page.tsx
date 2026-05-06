import TaskForm from "@/components/taskFrom";

export default async function TasksPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );
  const tasks = await res.json();
  return (
    <main className="max-w-lg mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <TaskForm />
      <ul className="flex flex-col gap-3">
        {tasks.map(
          (task: { id: number; title: string; completed: boolean }) => (
            <li
              key={task.id}
              className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <span
                className={
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-700"
                }
              >
                {task.title}
              </span>
            </li>
          ),
        )}
      </ul>
    </main>
  );
}
