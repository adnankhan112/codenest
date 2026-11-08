---
title: "Bootstrap Best Practices"
sidebar_position: 26
---

# Bootstrap Best Practices

## Theory

Bootstrap is easy, but good habits keep your pages clean, fast and easy to use for everyone.

## Practical

- Always add the `viewport` meta tag.
- Put the page content inside a `.container`, then use `.row` and `.col`.
- Design for phones first, then add `md` and `lg` classes for bigger screens.
- Use utility classes (`mt-3`, `d-flex`, `text-center`) instead of writing many custom styles.
- Put your own CSS in a **separate file** loaded after Bootstrap.
- Do not edit Bootstrap's own files. Override them.
- Add `alt` text to images and `label` tags to inputs (accessibility).
- Use semantic tags (`nav`, `main`, `footer`).
- Load the JavaScript bundle at the end of the page.
- Use the same Bootstrap version everywhere on a site.
- Test your page on real phones.
