<template>
  <div class="container mt-5">
    <div class="card  p-4">
      <h2 class="text-primary mb-4">Task Details</h2>
      <div v-if="task">
        <form @submit.prevent="updateTask">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input
              type="text"
              id="title"
              v-model="task.title"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea
              id="description"
              v-model="task.description"
              rows="3"
              class="form-control"
              required
            ></textarea>
          </div>
          <div class="form-check mb-3">
            <input
              type="checkbox"
              id="completed"
              v-model="task.completed"
              class="form-check-input"
            />
            <label for="completed" class="form-check-label"> Completed </label>
          </div>
          <button type="submit" class="btn btn-primary">Update Task</button>
        </form>
      </div>
      <div v-else>
        <p>Task not found.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTasksStore } from "~/store/tasks";
import { type Task } from "~/utils/types/Task";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const tasksStore = useTasksStore();

const task = ref<Task | undefined>();
const taskId = computed(() => parseInt(route.params.id as string, 10));

task.value = tasksStore.getTaskById(taskId.value);

const updateTask = () => {
  if (task.value) {
    tasksStore.updateTask(task.value);
    router.push("/");
  }
};
</script>
