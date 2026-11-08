---
title: "Go Installation and Setup"
sidebar_position: 2
---

# Go Installation and Setup

## Theory

To write Go you need the **Go toolchain**. It includes the compiler, a formatter, a test runner and a package manager.

A **module** is a Go project. It has a `go.mod` file that stores the project name and the libraries it uses.

## Practical

1. Go to **go.dev/dl** and download the installer for your system.
2. Install it with the default options.
3. Open a new terminal and check:

```
go version
```

Create a project:

```
mkdir hello
cd hello
go mod init hello
```

Create `main.go`, then run it:

```
go run main.go
go build            (creates an executable file)
```

In VS Code, install the **Go** extension for help and formatting.
