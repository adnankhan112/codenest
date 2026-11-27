---
title: "Accessibility and SEO with C"
sidebar_position: 92
---

# Accessibility and SEO with C

C programs run on your computer, not inside the browser. But a C program can **write** web pages, **check** them, and **build** files that search engines read. In this chapter you will learn the basics of accessibility and SEO, and how a small C program can help you follow them.

## What is accessibility?

Accessibility means that everyone can use your website. This includes people who use a screen reader (a tool that reads the page aloud), people who cannot use a mouse, and people who need larger text. If your C program writes HTML, the HTML must be correct, because screen readers depend on it.

## What is SEO?

SEO means Search Engine Optimization. It helps Google and other search engines understand your page, so they can show it to the right people. Many accessibility rules also help SEO.

## The basic rules for every page

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

## Write safe HTML from C

When your C program puts text into HTML, the text may contain characters like `<` and `&`. If you do not escape them, the page can break, or harmful code can run. This small function writes text safely:

```c
#include <stdio.h>

void write_escaped(FILE *out, const char *text) {
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

int main(void) {
    write_escaped(stdout, "<script>alert(\"hi\")</script>");
    printf("\n");
    return 0;
}
```

The output is:

```text
&lt;script&gt;alert(&quot;hi&quot;)&lt;/script&gt;
```

Always escape text that comes from visitors, files, or the internet before you put it into HTML.

## Check your pages with a C program

This program reads an HTML file and looks for the most common problems. Save it as `audit.c`:

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static char *read_file(const char *path) {
    FILE *file = fopen(path, "rb");
    if (file == NULL) {
        return NULL;
    }

    fseek(file, 0, SEEK_END);
    long size = ftell(file);
    rewind(file);

    char *text = malloc((size_t)size + 1);
    if (text == NULL) {
        fclose(file);
        return NULL;
    }

    size_t count = fread(text, 1, (size_t)size, file);
    text[count] = '\0';
    fclose(file);
    return text;
}

static int count_images_without_alt(const char *html) {
    int problems = 0;
    const char *p = html;

    while ((p = strstr(p, "<img")) != NULL) {
        const char *end = strchr(p, '>');
        if (end == NULL) {
            break;
        }
        const char *alt = strstr(p, "alt=");
        if (alt == NULL || alt > end) {
            problems++;
        }
        p = end;
    }
    return problems;
}

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("Usage: audit page.html\n");
        return 1;
    }

    for (int i = 1; i < argc; i++) {
        char *html = read_file(argv[i]);
        if (html == NULL) {
            printf("%s: cannot open the file\n", argv[i]);
            continue;
        }

        int problems = 0;
        printf("%s:\n", argv[i]);

        if (strstr(html, "lang=") == NULL) {
            printf("  - The html tag has no lang attribute\n");
            problems++;
        }
        if (strstr(html, "<title") == NULL) {
            printf("  - The page has no title\n");
            problems++;
        }
        if (strstr(html, "name=\"description\"") == NULL) {
            printf("  - The page has no meta description\n");
            problems++;
        }

        int images = count_images_without_alt(html);
        if (images > 0) {
            printf("  - %d image(s) have no alt text\n", images);
            problems += images;
        }

        if (problems == 0) {
            printf("  no problems found\n");
        }
        free(html);
    }
    return 0;
}
```

Compile and run it:

```text
gcc -std=c17 -Wall -Wextra audit.c -o audit
```

On Windows run `.\audit.exe index.html`. On Linux and Mac run `./audit index.html`.

This program is a simple helper. It searches for words in the text and is not a full HTML reader, so it does not find every problem. You should also test your page with the keyboard and a screen reader.

## Make a sitemap with C

A sitemap is a file that lists the pages of your website. It helps search engines find all your pages.

```c
#include <stdio.h>

int main(void) {
    const char *urls[] = {
        "https://example.com/",
        "https://example.com/about",
        "https://example.com/contact",
    };
    const size_t count = sizeof urls / sizeof urls[0];

    FILE *out = fopen("sitemap.xml", "w");
    if (out == NULL) {
        fprintf(stderr, "ERROR: cannot create sitemap.xml\n");
        return 1;
    }

    fputs("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n", out);
    fputs("<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n", out);
    for (size_t i = 0; i < count; i++) {
        fprintf(out, "  <url><loc>%s</loc></url>\n", urls[i]);
    }
    fputs("</urlset>\n", out);

    fclose(out);
    printf("Created sitemap.xml\n");
    return 0;
}
```

Replace `https://example.com` with your real website address, and put `sitemap.xml` in the main folder of your website.

## Accessible output in the terminal

- Do not use color as the only way to show something. Write words like `ERROR` or `OK` too.
- Write clear messages that say what went wrong and what to do next.
- Send error messages to `stderr` with `fprintf(stderr, ...)`.

```c
fprintf(stderr, "ERROR: The file notes.txt was not found. Check the name and try again.\n");
```

## Readable code is accessible code

- Use clear names: `total_price` is better than `tp`.
- Write a short comment above each function that says what it does.
- Keep functions small, so each one does one job.

## Try it yourself

1. Save this bad page as `bad.html`:

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

2. Compile `audit.c` and run it on `bad.html`. You should see four problems: no `lang`, no title, no meta description, and one image with no alt text. The link text "Click here" is also a problem, but this program cannot find it. You must find it yourself.
3. Fix the page: add `lang="en"` to the `html` tag, a `title`, a `meta` description, an `alt` text for the image, and change the link text to "See our sale items". Run the program again. It should say "no problems found".
4. Add a new check to `audit.c`: report a problem if the page has no `<h1`.

## Quick summary

- C can write, check, and build files for the web.
- Every page needs `lang`, a `title`, a meta description, and `alt` text for images.
- Escape outside text before you put it into HTML.
- A simple checker helps, but you must also test by hand.
- A sitemap helps search engines find your pages.
- Write clear, readable code and clear messages.
