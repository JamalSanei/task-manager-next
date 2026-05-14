import TaskForm from "@/components/taskFrom";
import { db } from "../../../prisma/prisma.client";
import { Task } from "@/generated/prisma/client";

async function getTasks() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // dummy delay for testing loading state

  const res = await db.task.findMany({ take: 5 });
  // if (res) throw new Error("Test error... not Attention"); // dummy error for testing error page

  if (!res) throw new Error("Failed to fetch data");
  return res;
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
