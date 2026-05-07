"use server";

import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {
  const title = formData.get("title") as string;
  if (!title?.trim()) return;
  console.log("Adding Task: ", title);
  revalidatePath("/tasks");
}
