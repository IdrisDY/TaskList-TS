<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center mb-4 text-primary">
              Add New Task
            </h2>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input
                  type="text"
                  id="title"
                  v-model="title"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea
                  id="description"
                  v-model="description"
                  rows="4"
                  class="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Add Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useTasksStore } from "~/store/tasks";
import { type Task } from "~/utils/types/Task";

const title = ref("");
const description = ref("");
const tasksStore = useTasksStore();
const router = useRouter();

const submitForm = () => {
  tasksStore.addTask({ title: title.value, description: description.value });
  router.push("/");
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
