---
title: "TypeScript Project: Task Manager"
sidebar_position: 37
---

# TypeScript Project: Task Manager

## Theory

A **project** puts many ideas together. We will build a small **task manager** that runs in the terminal. It uses interfaces, enums, classes, generics, modules and file saving.

Plan:

1. A `Task` interface describes a task.
2. A `TaskManager` class adds, completes, removes and lists tasks.
3. A small program uses the class.
4. Tasks are saved in a JSON file.

## Practical

**Setup**

```
mkdir task-manager
cd task-manager
npm init -y
npm install --save-dev typescript @types/node tsx
npx tsc --init
```

**src/task.ts**

```typescript
export enum Priority {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH"
}

export interface Task {
  id: number;
  title: string;
  done: boolean;
  priority: Priority;
}
```

**src/manager.ts**

```typescript
import { readFileSync, writeFileSync, existsSync } from "fs";
import { Task, Priority } from "./task";

export class TaskManager {
  private tasks: Task[] = [];

  constructor(private file: string) {
    if (existsSync(file)) {
      this.tasks = JSON.parse(readFileSync(file, "utf8")) as Task[];
    }
  }

  private save(): void {
    writeFileSync(this.file, JSON.stringify(this.tasks, null, 2));
  }

  add(title: string, priority: Priority = Priority.Medium): Task {
    const task: Task = { id: Date.now(), title, done: false, priority };
    this.tasks.push(task);
    this.save();
    return task;
  }

  complete(id: number): boolean {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) return false;
    task.done = true;
    this.save();
    return true;
  }

  remove(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.save();
  }

  list(onlyPending = false): Task[] {
    return onlyPending ? this.tasks.filter((t) => !t.done) : [...this.tasks];
  }
}
```

**src/index.ts**

```typescript
import { TaskManager } from "./manager";
import { Priority } from "./task";

const manager = new TaskManager("tasks.json");

const first = manager.add("Learn TypeScript", Priority.High);
manager.add("Build a website");
manager.complete(first.id);

for (const t of manager.list()) {
  console.log(`[${t.done ? "x" : " "}] ${t.title} (${t.priority})`);
}
```

Run:

```
npx tsx src/index.ts
```

## Ideas to improve it

- Read commands from the terminal (`process.argv`).
- Add due dates with the `Date` type.
- Turn it into a web API with Express.
