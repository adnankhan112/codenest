---
title: "Accessibility and SEO Basics"
sidebar_position: 93
---

# Accessibility and SEO Basics

## Theory

### What is accessibility?

Accessibility means that **everyone** can use your website. This includes people who are blind or have low vision, people who cannot use a mouse, people who are deaf, and people with slow internet or small screens.

Good news: most accessibility comes from writing normal, correct HTML. You do not need special tools to start.

### The main accessibility rules for beginners

**1. Use the right element for the job.**
Native elements such as `button`, `a`, and `label` already work with the keyboard and with screen readers. A screen reader is a program that reads the page aloud.

```html
<!-- Bad: a div pretending to be a button -->
<div onclick="send()">Send</div>

<!-- Good: a real button -->
<button type="button" onclick="send()">Send</button>
```

**2. Write good alt text.**
If an image carries meaning, describe it. If an image is only decoration, use an empty `alt` so screen readers skip it.

```html
<img src="chart.png" alt="Bar chart showing sales growing every month in 2026">
<img src="divider.png" alt="">
```

**3. Keep headings in order.**
Use one `h1`, then `h2` for sections, then `h3` for parts of a section. Do not skip levels and do not choose a heading only because of its size. Use CSS to change the size.

**4. Connect every form field to a label.**
A placeholder is not a label because it disappears when you type.

```html
<label for="email">Email address</label>
<input type="email" id="email" name="email">
```

**5. Write clear link text.**
Screen reader users often jump from link to link. "Click here" means nothing out of context.

```html
<!-- Bad -->
<a href="guide.html">Click here</a>

<!-- Good -->
<a href="guide.html">Read the beginner HTML guide</a>
```

**6. Set the page language.**

```html
<html lang="en">
```

**7. Use enough color contrast.**
Text must be easy to read against its background. The WCAG AA standard asks for a contrast ratio of at least **4.5 to 1** for normal text and **3 to 1** for large text. Do not use color as the only way to show something, such as a red border for errors with no message.

**8. Make everything work with the keyboard.**
Press the **Tab** key to move through your page. You should always see where you are (the focus outline), and you should be able to use every link and button. Never remove the focus outline without adding a clear replacement.

**9. Help keyboard users skip the menu.**
A skip link lets them jump straight to the main content.

```html
<a class="skip-link" href="#main">Skip to main content</a>
<main id="main">
  <h1>Welcome</h1>
</main>
```

**10. Use ARIA only when needed.**
ARIA is a set of extra attributes that give more information to screen readers. The first rule of ARIA is: if a normal HTML element can do the job, use it instead. Two common, useful examples:

```html
<!-- An icon-only button needs a name -->
<button type="button" aria-label="Close menu">X</button>

<!-- Hide a purely decorative icon from screen readers -->
<span aria-hidden="true">★</span>
```

**11. Make tables understandable.**

```html
<table>
  <caption>Monthly sales</caption>
  <tr>
    <th scope="col">Month</th>
    <th scope="col">Sales</th>
  </tr>
  <tr>
    <td>January</td>
    <td>120</td>
  </tr>
</table>
```

**12. Give video and audio alternatives.**
Add captions for people who are deaf or hard of hearing, using the `track` element inside `video`.

### What is SEO?

SEO stands for **Search Engine Optimization**. It means helping search engines such as Google understand your page, so the right people can find it. Search engines first **crawl** your page, then **index** it, then **rank** it. Nobody can promise a number one position, but clear, honest pages help a lot.

Good news again: accessibility and SEO overlap. Clear headings, alt text, and good link text help both people and search engines.

### The main SEO rules for beginners

**1. Give every page a unique, clear title.**
The `title` appears in search results and in the browser tab. Keep it short, around 50 to 60 characters, so it is not cut off.

```html
<title>HTML Headings Explained for Beginners | CodeNest</title>
```

**2. Write a meta description.**
This short summary often appears under your title in search results. It does not directly raise your ranking, but a good one makes more people click. Aim for about 150 to 160 characters.

```html
<meta name="description" content="Learn how HTML headings work, with simple examples and practice exercises for beginners.">
```

**3. Use headings and semantic elements.**
One clear `h1`, then logical `h2` and `h3` headings, help search engines understand your content.

**4. Write for people, not for robots.**
Repeating the same keyword again and again (called keyword stuffing) hurts you. Search engines ignore the old `meta` keywords tag, so do not waste time on it.

**5. Use short, readable web addresses.**
For example, `/html/headings` is better than `/page?id=4837`.

**6. Link your pages together.**
Links between your own pages help visitors and search engines find content.

**7. Make the page mobile friendly and fast.**
Use the viewport tag, size your images properly, and use `loading="lazy"` for images far down the page.

**8. Add social sharing tags (Open Graph).**
These control how your link looks when someone shares it on social media.

```html
<meta property="og:title" content="HTML Headings Explained for Beginners">
<meta property="og:description" content="Learn how HTML headings work, with simple examples.">
<meta property="og:image" content="https://example.com/images/headings-preview.png">
<meta property="og:url" content="https://example.com/html/headings">
```

**9. Tell search engines the main address of a page.**
If the same content can be reached at more than one address, point to the main one.

```html
<link rel="canonical" href="https://example.com/html/headings">
```

**10. Keep private pages out of search.**

```html
<meta name="robots" content="noindex">
```

**11. Structured data (advanced, optional).**
Structured data is extra information written in a format called JSON-LD. It helps search engines understand what a page is.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "HTML Headings Explained for Beginners",
  "author": {
    "@type": "Person",
    "name": "Your Name"
  },
  "datePublished": "2026-01-15"
}
</script>
```

**12. Two helper files.**
A `sitemap.xml` file lists the pages of your site. A `robots.txt` file tells search engines which parts they may visit. Many website builders create them for you.

## Practical

### Before and after

Here is a weak page:

```html
<html>
<head>
  <title>Page</title>
</head>
<body>
  <div style="font-size: 30px">Welcome</div>
  <img src="photo1.jpg">
  <div onclick="go()">Click here</div>
  <input placeholder="Email">
  <a href="contact.html">Click here</a>
</body>
</html>
```

Here is the improved page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Green Cafe | Fresh Coffee in Islamabad</title>
  <meta name="description" content="Green Cafe serves fresh coffee and homemade cakes in Islamabad. See our menu and opening hours.">
</head>
<body>
  <main>
    <h1>Welcome to Green Cafe</h1>
    <img src="cafe-front.jpg" alt="The front of Green Cafe with outdoor tables" width="600" height="400">

    <button type="button" onclick="go()">Order now</button>

    <form action="#" method="post">
      <label for="email">Email address</label>
      <input type="email" id="email" name="email">
    </form>

    <a href="contact.html">Contact Green Cafe</a>
  </main>
</body>
</html>
```

What we fixed:

- Added the doctype, `lang`, charset, and viewport.
- Wrote a clear title and meta description.
- Used a real `h1` and a real `button`.
- Added alt text, width, and height to the image.
- Added a label to the input.
- Replaced "Click here" with clear link text.

### Your turn

1. Take any page you wrote in the earlier exercises.
2. Check it against the checklist below.
3. Fix everything that is missing.

### Final checklist

**Accessibility**

- [ ] The `html` element has a `lang` attribute.
- [ ] Every meaningful image has alt text. Decorative images have `alt=""`.
- [ ] There is one `h1`, and headings are in order.
- [ ] Every form field has a label.
- [ ] Link text makes sense on its own.
- [ ] Text has enough contrast.
- [ ] You can use the whole page with only the Tab key.

**SEO**

- [ ] The page has a unique, clear `title`.
- [ ] The page has a meta description.
- [ ] The viewport tag is present.
- [ ] Images have width, height, and sensible file sizes.
- [ ] The page uses semantic elements.

### Free tools to test

- **Lighthouse** is built into Chrome. Open DevTools (press F12), choose the Lighthouse tab, and run a report for Accessibility, SEO, and Performance.
- **WAVE** is a free browser extension that shows accessibility problems on the page.
- **NVDA** is a free screen reader for Windows. Listening to your page for two minutes teaches a lot.

## Summary

- Accessibility means everyone can use your page, and good HTML gives you most of it for free.
- SEO means helping search engines understand your page, and clear titles, descriptions, and headings are the foundation.
- Write for people first. That is good for accessibility and for search engines.
