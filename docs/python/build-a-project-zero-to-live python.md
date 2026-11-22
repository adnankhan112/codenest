---
title: "Build a Python Project from Zero to Live"
sidebar_position: 93
---

# Build a Python Project from Zero to Live

## Theory

### What we will build

We will build a small **Course List website with Python**. A Python script reads a list of courses and writes a complete HTML page from it. Then we will put the page online for free with GitHub Pages.

Python itself cannot run on GitHub Pages, because GitHub Pages only shows ready HTML, CSS, and JavaScript files. So the plan is: **Python builds the page on your computer, and GitHub Pages shows the result to the world.** This is a real method, called a *static site generator*, and many professional websites are made this way.

### How the project is planned

Every project starts with a plan. Ask three questions:

1. **What does the visitor see?** A page with a list of courses, where each course is a link.
2. **What data do we keep?** A list of courses. Each course has a name, a short text, and a link.
3. **Who makes the page?** A Python script, which we run each time the list changes.

### The folder

Make a new folder named `course-list` with these files. You will create `index.html` by running the script.

```text
course-list/
  build.py
  style.css
  index.html   (made by build.py)
```

## Practical

### Step 1: Check Python

Open a terminal and run:

```text
python --version
```

You should see a version number that starts with 3. If you see an error, install Python from [python.org](https://www.python.org/downloads/) and tick "Add Python to PATH" during the installation. Then close and open the terminal again.

### Step 2: build.py

```python
from html import escape
from pathlib import Path

COURSES = [
    {
        "name": "HTML",
        "text": "Web structure",
        "url": "https://adnankhan112.github.io/codenest/docs/html/intro",
    },
    {
        "name": "CSS",
        "text": "Design and layout",
        "url": "https://adnankhan112.github.io/codenest/docs/css/modern-css",
    },
    {
        "name": "JavaScript",
        "text": "Interactivity",
        "url": "https://adnankhan112.github.io/codenest/docs/javascript/intro",
    },
]


def make_card(course: dict[str, str]) -> str:
    """Return the HTML for one course."""
    name = escape(course["name"])
    text = escape(course["text"])
    url = escape(course["url"], quote=True)
    return f'<li><a href="{url}"><strong>{name}</strong><span>{text}</span></a></li>'


def build_page(courses: list[dict[str, str]]) -> str:
    """Return the complete HTML page."""
    cards = "\n      ".join(make_card(course) for course in courses)
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Course List</title>
  <meta name="description" content="A list of free programming courses, built with Python.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>My Course List</h1>
    <ul>
      {cards}
    </ul>
  </main>
</body>
</html>
"""


def main() -> None:
    output = Path(__file__).parent / "index.html"
    output.write_text(build_page(COURSES), encoding="utf-8")
    print(f"Page created: {output}")


if __name__ == "__main__":
    main()
```

Notice the good habits in this code: type hints, a docstring for each function, `escape` for all text, `pathlib` for the file, and `if __name__ == "__main__"` at the end.

### Step 3: style.css

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

ul {
  list-style: none;
  padding: 0;
}

li a {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px;
  margin-bottom: 8px;
  background-color: #fff;
  border: 1px solid #0e7c76;
  border-radius: 8px;
  color: #0b5f5a;
  text-decoration: none;
}

li a:hover,
li a:focus-visible {
  background-color: #e3f4f2;
}
```

### Step 4: Run the script

In the terminal, go into your `course-list` folder and run:

```text
python build.py
```

You should see the message `Page created:` followed by the file path. Now open `index.html` in your browser. You should see your three courses. Click each one to check that the links open.

### Step 5: Check the page

If you saved `audit.py` from the previous chapter in this folder, run it:

```text
python audit.py index.html
```

It should say `no problems found`.

### Step 6: Put it on GitHub

1. Create a free account on GitHub if you do not have one.
2. Click **New repository**. Name it `course-list` and keep it **Public**. Click **Create repository**.
3. Open a terminal in your `course-list` folder and run these commands one by one:

```text
git init
git add .
git commit -m "First version of course list"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/course-list.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your real GitHub username.

### Step 7: Turn on GitHub Pages

1. In your repository, open **Settings**, then **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose the branch `main` and the folder `/ (root)`, then click **Save**.
4. Wait one or two minutes. Your site will be at:

```text
https://YOUR-USERNAME.github.io/course-list/
```

Open it in a private (Incognito) window to see the newest version.

### Step 8: Update the page later

When you add a course to the `COURSES` list, run the script again, then send the new page to GitHub:

```text
python build.py
git add .
git commit -m "Add a new course"
git push
```

### Your turn

1. Add two more courses to the `COURSES` list and rebuild the page.
2. Change the colors in `style.css`, rebuild, commit, and push. Check that the live site changes.
3. Change `make_card` so that a course with the key `"soon"` set to `"yes"` shows the text "Coming soon" and is not a link.

## Summary

- Plan first: what the visitor sees, what data you keep, and who makes the page.
- Python can build a complete HTML page from a list of data.
- Use `escape` for text, `pathlib` for files, and type hints and docstrings for clean code.
- GitHub Pages shows ready HTML files for free. Python builds them on your computer first.
- To update the site: run the script, then `git add .`, `git commit`, and `git push`.
