import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTasksStore } from "./tasks";

describe("Tasks Store", () => {
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
  });

  it("adds task", () => {
    const store = useTasksStore();
    expect(store.tasks).toHaveLength(0);
    store.addTask({ title: "New Task", description: "Task description" });
    expect(store.tasks).toHaveLength(1);
    expect(store.tasks[0]).toEqual({
      id: 1,
      title: "New Task",
      description: "Task description",
      completed: false,
    });
  });

  it("deletes a task", () => {
    const store = useTasksStore();
    store.addTask({ title: "New Task", description: "Task description" });
    store.addTask({
      title: "Another Task",
      description: "Another description",
    });
    expect(store.tasks).toHaveLength(2);
    store.deleteTask(1);
    expect(store.tasks).toHaveLength(1);
    expect(store.tasks[0]).toEqual({
      id: 2,
      title: "Another Task",
      description: "Another description",
      completed: false,
    });
  });

  //   it('toggles task completion', () => {
  //     const store = useTasksStore();

  //     store.addTask({ title: 'New Task', description: 'Task description' });

  //     expect(store.tasks[0].completed).toBe(false);

  //     store.toggleTaskCompletion(1);

  //     expect(store.tasks[0].completed).toBe(true);

  //     store.toggleTaskCompletion(1);

  //     expect(store.tasks[0].completed).toBe(false);
  //   });
});
