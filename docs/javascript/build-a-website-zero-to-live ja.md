---
title: "Build a Website from Zero to Live"
sidebar_position: 93
---

# Build a Website from Zero to Live

## Theory

### What we will build

We will build a small **Task List** website. A visitor can add tasks, mark them as done, delete them, and the tasks stay saved after the page is closed. Then we will put the website online for free with GitHub Pages.

You will use everything you have learned: HTML for structure, CSS for design, and JavaScript for behavior.

### How the project is planned

Every project starts with a plan. Ask three questions:

1. **What does the visitor need to do?** Add, finish, and delete tasks.
2. **What data do we keep?** A list of tasks. Each task has a text and a done or not done state.
3. **Where do we keep it?** In the browser, using `localStorage`.

### What is localStorage?

`localStorage` is a small box inside the visitor's browser where you can save text. The text stays there after the page is closed. It can only keep text, so we change our list to text with `JSON.stringify` and back with `JSON.parse`.

### The folder

Make a new folder named `task-list` with three files:

```text
task-list/
  index.html
  style.css
  app.js
```

## Practical

### Step 1: index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task List</title>
  <meta name="description" content="A simple task list that saves your tasks in your browser.">
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>
  <main>
    <h1>My Task List</h1>

    <form id="taskForm">
      <label for="taskInput">New task</label>
      <input type="text" id="taskInput" required>
      <button type="submit">Add task</button>
    </form>

    <p id="status" aria-live="polite"></p>
    <ul id="taskList"></ul>
  </main>
</body>
</html>
```

### Step 2: style.css

```css
body {
  font-family: system-ui, sans-serif;
  background-color: #f4f7f7;
  margin: 0;
  padding: 24px;
}

main {
  max-width: 480px;
  margin: 0 auto;
}

h1 {
  color: #0e7c76;
}

form {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

label {
  width: 100%;
  font-weight: 600;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #999;
  border-radius: 6px;
}

button {
  padding: 10px 16px;
  border: 0;
  border-radius: 6px;
  background-color: #0e7c76;
  color: #fff;
  cursor: pointer;
}

button:hover,
button:focus-visible {
  background-color: #0b5f5a;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background-color: #fff;
  border-radius: 6px;
  margin-bottom: 8px;
}

li.done span {
  text-decoration: line-through;
  color: #777;
}

li span {
  flex: 1;
}
```

### Step 3: app.js

```javascript
const form = document.querySelector("#taskForm");
const input = document.querySelector("#taskInput");
const list = document.querySelector("#taskList");
const status = document.querySelector("#status");

const STORAGE_KEY = "tasks";

const loadTasks = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch (error) {
    return [];
  }
};

let tasks = loadTasks();

const saveTasks = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

const render = () => {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const item = document.createElement("li");
    if (task.done) {
      item.classList.add("done");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.setAttribute("aria-label", `Mark "${task.text}" as done`);
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      saveTasks();
      render();
    });

    const text = document.createElement("span");
    text.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      render();
      status.textContent = "Task deleted.";
    });

    item.append(checkbox, text, deleteButton);
    list.append(item);
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") {
    return;
  }

  tasks.push({ id: Date.now(), text, done: false });
  saveTasks();
  render();
  status.textContent = "Task added.";
  input.value = "";
  input.focus();
});

render();
```

Notice three good habits in this code: the task text is shown with `textContent` (safe), the list is saved with `try` and `catch` (it does not crash), and a message is given in the `aria-live` paragraph (screen readers are told).

### Step 4: Test it on your computer

Open `index.html` in your browser. Add two tasks, mark one as done, then refresh the page. The tasks must still be there. Press F12 and check that the Console shows no red errors.

### Step 5: Put it on GitHub

1. Create a free account on GitHub if you do not have one.
2. Click **New repository**. Name it `task-list` and keep it **Public**. Click **Create repository**.
3. Open a terminal in your `task-list` folder and run these commands one by one:

```text
git init
git add .
git commit -m "First version of task list"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/task-list.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your real GitHub username.

### Step 6: Turn on GitHub Pages

1. In your repository, open **Settings**, then **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose the branch `main` and the folder `/ (root)`, then click **Save**.
4. Wait one or two minutes. Your site will be at:

```text
https://YOUR-USERNAME.github.io/task-list/
```

Open it in a private (Incognito) window to see the newest version.

### Step 7: Check before you share

- Does it work on a phone screen?
- Can you use it with only the keyboard?
- Does it have a title and a description?
- Are there any errors in the Console?

### Your turn

1. Add a button "Clear finished tasks" that removes all done tasks.
2. Show a count such as "2 tasks left".
3. Change the colors in `style.css`, save, commit, and push. Check that the live site updates.

## Summary

- Plan first: what the visitor does, what data you keep, and where you keep it.
- Use `localStorage` with `JSON.stringify` and `JSON.parse` to save data in the browser.
- Show visitor text with `textContent`, wrap risky code in `try` and `catch`.
- Test on your computer before you publish.
- GitHub Pages hosts a website for free: push the code, then turn on Pages in the settings.
