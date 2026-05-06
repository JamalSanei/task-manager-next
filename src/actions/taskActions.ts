export async function addTask(formData: FormData) {
  const title = formData.get("title") as string;
  if (!title?.trim()) return;
}
