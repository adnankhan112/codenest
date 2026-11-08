---
title: "TypeScript Async, Promises and Fetch"
sidebar_position: 30
---

# TypeScript Async, Promises and Fetch

## Theory

Some tasks take time, such as loading data from the internet. A **Promise** represents a value that will arrive later. `async` and `await` let you write this kind of code in a simple, top-to-bottom style.

In TypeScript, a promise has a type: `Promise<string>` means "a promise that will give a string".

## Practical

```typescript
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getTodo(id: number): Promise<Todo> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!response.ok) {
    throw new Error("Request failed");
  }
  return (await response.json()) as Todo;
}

async function main() {
  try {
    await wait(500);
    const todo = await getTodo(1);
    console.log(todo.title);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
```
