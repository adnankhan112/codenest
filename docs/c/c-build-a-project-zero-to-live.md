---
title: "Build a C Project from Zero to Live"
sidebar_position: 93
---

# Build a C Project from Zero to Live

We will build a small **Course List website with C**. A C program reads a list of courses and writes a complete HTML page from it. Then we will put the page online for free with GitHub Pages.

C itself cannot run on GitHub Pages, because GitHub Pages only shows ready HTML, CSS, and JavaScript files. So the plan is: **C builds the page on your computer, and GitHub Pages shows the result to the world.** This is a real method, called a static site generator.

## How the project is planned

Every project starts with a plan. Ask three questions:

1. **What does the visitor see?** A page with a list of courses, where each course is a link.
2. **What data do we keep?** A list of courses. Each course has a name, a short text, and a link.
3. **Who makes the page?** A C program, which we run each time the list changes.

## The folder

Make a new folder named `course-list` with these files. You will create `index.html` by running the program.

```text
course-list/
  build.c
  style.css
  index.html   (made by the program)
```

## Step 1: Check the compiler

Open a terminal and run:

```text
gcc --version
```

If you see a version number, go to Step 2. If you see an error, install a compiler:

- **Windows:** Install MSYS2 from [msys2.org](https://www.msys2.org/). Open the "MSYS2 UCRT64" program and run `pacman -S mingw-w64-ucrt-x86_64-gcc`. Then add the folder `C:\msys64\ucrt64\bin` to your Windows PATH, close your terminal, open it again, and run `gcc --version`.
- **Linux:** Install it with your package manager, for example `sudo apt install gcc`.
- **Mac:** Run `xcode-select --install`.

## Step 2: build.c

```c
#include <stdio.h>

typedef struct {
    const char *name;
    const char *text;
    const char *url;
} Course;

// Write text to the file, with special HTML characters made safe.
static void write_escaped(FILE *out, const char *text) {
    for (const char *p = text; *p != '\0'; p++) {
        switch (*p) {
            case '&':  fputs("&amp;", out);  break;
            case '<':  fputs("&lt;", out);   break;
            case '>':  fputs("&gt;", out);   break;
            case '"':  fputs("&quot;", out); break;
            case '\'': fputs("&#39;", out);  break;
            default:   fputc(*p, out);
        }
    }
}

// Write the HTML for one course.
static void write_card(FILE *out, const Course *course) {
    fputs("      <li><a href=\"", out);
    write_escaped(out, course->url);
    fputs("\"><strong>", out);
    write_escaped(out, course->name);
    fputs("</strong><span>", out);
    write_escaped(out, course->text);
    fputs("</span></a></li>\n", out);
}

int main(void) {
    const Course courses[] = {
        {"HTML", "Web structure",
         "https://adnankhan112.github.io/codenest/docs/html/intro"},
        {"CSS", "Design and layout",
         "https://adnankhan112.github.io/codenest/docs/css/modern-css"},
        {"JavaScript", "Interactivity",
         "https://adnankhan112.github.io/codenest/docs/javascript/intro"},
    };
    const size_t count = sizeof courses / sizeof courses[0];

    FILE *out = fopen("index.html", "w");
    if (out == NULL) {
        fprintf(stderr, "ERROR: cannot create index.html\n");
        return 1;
    }

    fputs("<!DOCTYPE html>\n", out);
    fputs("<html lang=\"en\">\n", out);
    fputs("<head>\n", out);
    fputs("  <meta charset=\"UTF-8\">\n", out);
    fputs("  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n", out);
    fputs("  <title>My Course List</title>\n", out);
    fputs("  <meta name=\"description\" content=\"A list of free programming courses, built with C.\">\n", out);
    fputs("  <link rel=\"stylesheet\" href=\"style.css\">\n", out);
    fputs("</head>\n", out);
    fputs("<body>\n", out);
    fputs("  <main>\n", out);
    fputs("    <h1>My Course List</h1>\n", out);
    fputs("    <ul>\n", out);

    for (size_t i = 0; i < count; i++) {
        write_card(out, &courses[i]);
    }

    fputs("    </ul>\n", out);
    fputs("  </main>\n", out);
    fputs("</body>\n", out);
    fputs("</html>\n", out);

    fclose(out);
    printf("Page created: index.html\n");
    return 0;
}
```

Notice the good habits: `int main(void)`, `const`, a check for `NULL` after `fopen`, a function for each small job, escaping of all text, and error messages sent to `stderr`.

## Step 3: style.css

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

## Step 4: Compile and run

In the terminal, go into your `course-list` folder. Compile the program:

```text
gcc -std=c17 -Wall -Wextra build.c -o build
```

Run it. On Windows:

```text
.\build.exe
```

On Linux and Mac:

```text
./build
```

You should see the message `Page created: index.html`. Now open `index.html` in your browser. You should see your three courses. Click each one to check that the links open.

## Step 5: Check the page

If you built `audit.c` from the previous chapter in this folder, run it on your page. It should say `no problems found`.

## Step 6: Put it on GitHub

1. Create a free account on GitHub if you do not have one.
2. Click **New repository**. Name it `course-list` and keep it **Public**. Click **Create repository**.
3. Open a terminal in your `course-list` folder and run these commands one by one:

```text
git init
git add build.c style.css index.html
git commit -m "First version of course list"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/course-list.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your real GitHub username. We add only the three source files. The compiled program (`build.exe` or `build`) does not need to go to GitHub.

## Step 7: Turn on GitHub Pages

1. In your repository, open **Settings**, then **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose the branch `main` and the folder `/ (root)`, then click **Save**.
4. Wait one or two minutes. Your site will be at:

```text
https://YOUR-USERNAME.github.io/course-list/
```

Open it in a private (Incognito) window to see the newest version.

## Step 8: Update the page later

When you add a course to the list in `build.c`, compile and run the program again, then send the new page to GitHub:

```text
gcc -std=c17 -Wall -Wextra build.c -o build
```

```text
.\build.exe
```

```text
git add build.c index.html
git commit -m "Add a new course"
git push
```

On Linux and Mac use `./build` in the second command.

## Try it yourself

1. Add two more courses to the list and rebuild the page.
2. Change the colors in `style.css`, then commit and push. Check that the live site changes.
3. Add a fourth field `soon` to the `Course` struct. For a course that is not ready, write the text "Coming soon" instead of a link.

## Quick summary

- Plan first: what the visitor sees, what data you keep, and who makes the page.
- A C program can write a complete HTML page from a list of data.
- Escape all text, check `fopen` for `NULL`, and keep each function small.
- GitHub Pages shows ready HTML files for free. C builds them on your computer first.
- To update the site: compile, run, then `git add`, `git commit`, and `git push`.
