import TaskForm from "@/components/taskFrom";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

async function getTasks() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // dummy delay for testing loading state
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );
  if (res.ok) throw new Error("Test error... not Attention"); // dummy error for testing error page

  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
export default async function TasksPage() {
  const tasks: Task[] = await getTasks();
  return (
    <main className="max-w-lg mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <TaskForm />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </main>
  );
}
