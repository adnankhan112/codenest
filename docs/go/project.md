---
title: "Go Project: Task REST API"
sidebar_position: 37
---

# Go Project: Task REST API

## Theory

We will build a small **REST API** for tasks, using only the Go standard library. It shows structs, JSON, handlers, a mutex and error handling together.

The API will support:

- `GET /tasks` to list tasks
- `POST /tasks` to add a task
- `PUT /tasks/{id}` to mark a task done
- `DELETE /tasks/{id}` to remove a task

(The `{id}` style of route needs Go 1.22 or newer.)

## Practical

**Setup**

```
mkdir taskapi
cd taskapi
go mod init taskapi
```

**main.go**

```go
package main

import (
    "encoding/json"
    "log"
    "net/http"
    "strconv"
    "sync"
)

type Task struct {
    ID    int    `json:"id"`
    Title string `json:"title"`
    Done  bool   `json:"done"`
}

type Store struct {
    mu     sync.Mutex
    tasks  []Task
    nextID int
}

var store = &Store{nextID: 1}

func writeJSON(w http.ResponseWriter, status int, v any) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(status)
    json.NewEncoder(w).Encode(v)
}

func listTasks(w http.ResponseWriter, r *http.Request) {
    store.mu.Lock()
    defer store.mu.Unlock()
    writeJSON(w, http.StatusOK, store.tasks)
}

func addTask(w http.ResponseWriter, r *http.Request) {
    var input struct {
        Title string `json:"title"`
    }
    if err := json.NewDecoder(r.Body).Decode(&input); err != nil || input.Title == "" {
        writeJSON(w, http.StatusBadRequest, map[string]string{"error": "title is required"})
        return
    }

    store.mu.Lock()
    defer store.mu.Unlock()
    t := Task{ID: store.nextID, Title: input.Title}
    store.nextID++
    store.tasks = append(store.tasks, t)
    writeJSON(w, http.StatusCreated, t)
}

func completeTask(w http.ResponseWriter, r *http.Request) {
    id, err := strconv.Atoi(r.PathValue("id"))
    if err != nil {
        writeJSON(w, http.StatusBadRequest, map[string]string{"error": "bad id"})
        return
    }

    store.mu.Lock()
    defer store.mu.Unlock()
    for i := range store.tasks {
        if store.tasks[i].ID == id {
            store.tasks[i].Done = true
            writeJSON(w, http.StatusOK, store.tasks[i])
            return
        }
    }
    writeJSON(w, http.StatusNotFound, map[string]string{"error": "not found"})
}

func deleteTask(w http.ResponseWriter, r *http.Request) {
    id, _ := strconv.Atoi(r.PathValue("id"))

    store.mu.Lock()
    defer store.mu.Unlock()
    for i, t := range store.tasks {
        if t.ID == id {
            store.tasks = append(store.tasks[:i], store.tasks[i+1:]...)
            w.WriteHeader(http.StatusNoContent)
            return
        }
    }
    writeJSON(w, http.StatusNotFound, map[string]string{"error": "not found"})
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("GET /tasks", listTasks)
    mux.HandleFunc("POST /tasks", addTask)
    mux.HandleFunc("PUT /tasks/{id}", completeTask)
    mux.HandleFunc("DELETE /tasks/{id}", deleteTask)

    log.Println("Server running on http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", mux))
}
```

**Try it**

```
go run main.go

curl -X POST localhost:8080/tasks -d "{\"title\":\"Learn Go\"}"
curl localhost:8080/tasks
curl -X PUT localhost:8080/tasks/1
curl -X DELETE localhost:8080/tasks/1
```

## Ideas to improve it

- Save tasks in a JSON file or a MySQL database.
- Add tests for the handlers.
- Add logging and a timeout.
