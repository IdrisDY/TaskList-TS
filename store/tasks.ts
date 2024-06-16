import { defineStore } from "pinia";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as Task[],
    nextId: 1,
  }),
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getTaskById: (state) => (id: number) => {
      return state.tasks.find((task) => task.id === id);
    },
  },
  actions: {
    addTask(newTask: Omit<Task, "id" | "completed">) {
      this.tasks.push({ ...newTask, id: this.nextId++, completed: false });
    },
    updateTask(updatedTask: Task) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
      }
    },
    deleteTask(id: number) {
      console.log(this.tasks);
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
});
