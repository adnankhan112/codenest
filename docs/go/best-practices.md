---
title: "Go Best Practices"
sidebar_position: 36
---

# Go Best Practices

## Theory

Go has a strong style. Following it makes your code look like everyone else's, so teams can read it easily.

## Practical

- Always run `gofmt` (or `go fmt ./...`). Most editors do it when you save.
- Check every `error`. Do not ignore it.
- Keep functions small and packages focused.
- Use short names for short scopes (`i`, `r`, `err`) and clear names for big ones.
- Use `defer` to close files and unlock mutexes.
- Prefer composition over big class-like designs.
- Keep interfaces small (one or two methods).
- Do not start a goroutine without a plan for how it will stop.
- Share data with channels, or protect it with a mutex.
- Use `go vet` and a linter such as `golangci-lint`.
- Write tests next to your code.
- Use `context` for timeouts and cancel signals.
