<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="text-primary">Task List</h1>
      <button class="btn btn-primary" @click="navigateToAddTask">
        Add Task
      </button>
    </div>
    <div v-if="tasks.length === 0" class="alert alert-info">
      No tasks available. Click "Add Task" to create one.
    </div>
    <div v-else class="">
      <div v-for="task in tasks" :key="task.id" class="mb-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <router-link :to="`/task/${task.id}`">
              <h5 class="card-title">{{ task.title }}</h5>
            </router-link>

            <p class="card-text">{{ task.description }}</p>
            <p class="card-text">
              <small class="text-muted">{{
                task.completed ? "Completed" : "Pending"
              }}</small>
            </p>
            <div class="d-flex justify-content-between">
              <button
                class="btn btn-sm btn-outline-primary mr-2"
                @click="markAsCompleted(task.id)"
              >
                {{
                  task.completed ? "Mark as Incomplete" : "Mark as Completed"
                }}
              </button>
              <button
                class="btn btn-sm btn-outline-danger"
                @click="deleteTask(task.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTasksStore } from "~/store/tasks";
import { useRouter } from "vue-router";

const tasksStore = useTasksStore();
const router = useRouter();

// get all tasks from store
const tasks = computed(() => tasksStore.getTasks);
// go to add task page
const navigateToAddTask = () => {
  router.push("/add-task");
};

// toggle between completed and incomplete status
const markAsCompleted = (id: number) => {
  const task = tasksStore.getTaskById(id);
  if (task) {
    tasksStore.updateTask({ ...task, completed: !task.completed });
  }
};
// delete tasks
const deleteTask = (id: number) => {
  tasksStore.deleteTask(id);
};
</script>

<style scoped>
.shadow-sm {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
