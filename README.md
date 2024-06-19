# Task Management App

This is a task management app built with Nuxt 3, TypeScript, Pinia, and Bootstrap.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Features

- Add new tasks with a title and description.
- Validate task descriptions to ensure they contain at least 3 words.
- Disable the "Add Task" button until the form is correctly filled.
- Store task data using Pinia.
- View Task details.
- Update tasks details.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone [https://github.com/your-username/task-management-app.git](https://github.com/IdrisDY/TaskList-TS.git)
   cd task-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. You will see a button to add a new task and your current existing tasks if any.
3. Enter the title and description for the task.
4. Click the "Add Task" button to add the task to the list.

### Form Validation

- The "Add Task" button is disabled until the title is not empty and the description contains at least 3 words.

## Testing

### Unit Tests

This project includes unit tests for the Pinia store using Vitest. To run the tests:

1. **Install Vitest**:

   ```bash
   npm install vitest
   ```

2. **Run the tests**:
   ```bash
   npm run test
   ```
