"use client";

import { useRef } from "react";
import { addTask } from "../actions/taskActions";

export default function TaskForm() {
  const ref = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    await addTask(formData);
    ref.current?.reset();
  }

  return (
    <form ref={ref} action={handleSubmit} className="flex gap-2 mb-6">
      <input
        name="title"
        placeholder="New task..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </form>
  );
}
