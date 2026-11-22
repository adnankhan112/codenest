---
title: "Accessibility and SEO with Python"
sidebar_position: 92
---

# Accessibility and SEO with Python

## Theory

### Python and the web

Python does not run inside the browser. But Python is often used to **make** web pages, to **check** them, and to **build** files that search engines read. In this chapter you will learn the basics of accessibility and SEO, and how a Python script can help you follow them.

### What is accessibility?

Accessibility means that everyone can use your website. This includes people who use a screen reader (a tool that reads the page aloud), people who cannot use a mouse, and people who need larger text. The page that Python makes must have the right HTML, because screen readers depend on it.

### What is SEO?

SEO means Search Engine Optimization. It helps Google and other search engines understand your page, so they can show it to the right people. Many accessibility rules also help SEO.

### The basic rules for every page

| Rule | Why it matters |
| --- | --- |
| The `html` tag has a `lang` attribute | Screen readers choose the right voice and search engines know the language |
| Every page has a clear `title` | It shows in the browser tab and in search results |
| Every page has a `meta` description | Search engines often show it under the title |
| Every image has an `alt` text | Screen readers read it aloud and it shows if the image fails to load |
| There is one `h1` and headings follow in order | It gives a clear outline of the page |
| Links have meaningful text, not just "click here" | Screen reader users often listen to a list of links |

:::note
A decorative image that adds no meaning should have an empty alt text, written as `alt=""`. Then screen readers skip it. This is different from having no `alt` at all.
:::

### Make safe HTML with Python

When Python puts text into HTML, the text may contain characters like `<` and `&`. If you do not escape them, the page can break, or harmful code can run. Use `html.escape`.

```python
from html import escape

user_text = '<script>alert("hi")</script>'

print(escape(user_text))
# &lt;script&gt;alert(&quot;hi&quot;)&lt;/script&gt;
```

Always escape text that comes from visitors, files, or the internet before you put it into HTML.

### Check your pages with a Python script

Python has a built-in tool called `HTMLParser` that reads HTML. You can use it to find common problems. Save this as `audit.py`:

```python
import sys
from html.parser import HTMLParser
from pathlib import Path


class Checker(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.problems: list[str] = []
        self.has_lang = False
        self.has_title = False
        self.has_description = False

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)

        if tag == "html" and attributes.get("lang"):
            self.has_lang = True
        if tag == "title":
            self.has_title = True
        if tag == "meta" and attributes.get("name") == "description":
            self.has_description = True
        if tag == "img" and "alt" not in attributes:
            self.problems.append("An image has no alt text")


def check_file(path: Path) -> list[str]:
    checker = Checker()
    checker.feed(path.read_text(encoding="utf-8"))

    problems = list(checker.problems)
    if not checker.has_lang:
        problems.append("The html tag has no lang attribute")
    if not checker.has_title:
        problems.append("The page has no title")
    if not checker.has_description:
        problems.append("The page has no meta description")
    return problems


def main() -> None:
    if len(sys.argv) < 2:
        print("Usage: python audit.py page.html")
        return

    for name in sys.argv[1:]:
        problems = check_file(Path(name))
        if problems:
            print(f"{name}: {len(problems)} problem(s)")
            for problem in problems:
                print(f"  - {problem}")
        else:
            print(f"{name}: no problems found")


if __name__ == "__main__":
    main()
```

Run it on any HTML file:

```text
python audit.py index.html
```

This script is a simple helper. It does not find every problem, so you should also test your page with the keyboard and a screen reader.

### Make a sitemap with Python

A **sitemap** is a file that lists the pages of your website. It helps search engines find all your pages. Python can write it for you.

```python
from pathlib import Path
from xml.sax.saxutils import escape

urls = [
    "https://example.com/",
    "https://example.com/about",
    "https://example.com/contact",
]

lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
]
for url in urls:
    lines.append(f"  <url><loc>{escape(url)}</loc></url>")
lines.append("</urlset>")

Path("sitemap.xml").write_text("\n".join(lines) + "\n", encoding="utf-8")
```

Replace `https://example.com` with your real website address, and put `sitemap.xml` in the main folder of your website.

### Accessible output in the terminal

Programs that run in the terminal can also be accessible.

- Do not use color as the only way to show something. Write words like `ERROR` or `OK` too.
- Write clear messages that say what went wrong and what to do next.
- Do not print a very long block of text. Use short lines.

```python
print("ERROR: The file notes.txt was not found. Check the file name and try again.")
```

### Readable code is accessible code

Other people (and you, next month) must be able to read your code.

- Use clear names: `total_price` is better than `tp`.
- Write a short docstring (a text in triple quotes) under each function.
- Keep functions small, so each one does one job.

```python
def total_price(prices: list[float]) -> float:
    """Return the sum of all prices."""
    return sum(prices)
```

## Practical

### Exercise: find and fix problems in a page

Save this bad page as `bad.html`:

```html
<html>
<head>
</head>
<body>
  <h1>My Shop</h1>
  <img src="shop.jpg">
  <a href="/sale">Click here</a>
</body>
</html>
```

Run the audit script on it:

```text
python audit.py bad.html
```

You should see four problems: no `lang`, no title, no meta description, and an image with no alt text. The link text "Click here" is also a problem, but the script cannot find that one. You must find it yourself.

Here is the fixed page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Shop</title>
  <meta name="description" content="A small shop with products at fair prices.">
</head>
<body>
  <main>
    <h1>My Shop</h1>
    <img src="shop.jpg" alt="The front of our small shop" width="400" height="300">
    <a href="/sale">See our sale items</a>
  </main>
</body>
</html>
```

### Your turn

1. Save the fixed page as `good.html` and run `python audit.py good.html`. It should say "no problems found".
2. Run `python audit.py bad.html good.html` to check both files in one command.
3. Add a new check to `audit.py`: report a problem if the page has no `h1` tag.
4. Make a `sitemap.xml` for your own website using the sitemap code.

## Summary

- Python can make, check, and build files for the web.
- Every page needs `lang`, a `title`, a meta description, and `alt` text for images.
- Use `html.escape` before you put outside text into HTML.
- `HTMLParser` can find common problems, but you must also test by hand.
- A sitemap helps search engines find your pages.
- Write clear, readable code and clear messages.
