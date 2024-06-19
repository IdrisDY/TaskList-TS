import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTasksStore } from "./tasks";

describe("Tasks Store", () => {
  // set up pinia before accessing store
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
  });
  // testing for adding a task
  it("adds task", () => {
    const store = useTasksStore();
    expect(store.tasks).toHaveLength(0);
    store.addTask({ title: "New Task", description: "Task description" });
    // check to have an increased length for new items
    expect(store.tasks).toHaveLength(1);
    expect(store.tasks[0]).toEqual({
      id: 1,
      title: "New Task",
      description: "Task description",
      completed: false,
    });
  });
  // testing for deleting a task
  it("deletes a task", () => {
    const store = useTasksStore();
    store.addTask({ title: "New Task", description: "Task description" });
    // addding tasks initally
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
});
