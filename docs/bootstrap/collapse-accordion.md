---
title: "Bootstrap Collapse and Accordion"
sidebar_position: 21
---

# Bootstrap Collapse and Accordion

## Theory

**Collapse** shows and hides content with a click. An **accordion** is a group of collapsible panels where opening one closes the others. It is great for FAQs (frequently asked questions).

## Practical

```html
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#more">
  Show more
</button>
<div class="collapse mt-2" id="more">
  <div class="card card-body">Hidden content appears here.</div>
</div>

<div class="accordion mt-4" id="faq">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#q1">
        Is the website free?
      </button>
    </h2>
    <div id="q1" class="accordion-collapse collapse show" data-bs-parent="#faq">
      <div class="accordion-body">Yes, all tutorials are free.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q2">
        Can beginners learn here?
      </button>
    </h2>
    <div id="q2" class="accordion-collapse collapse" data-bs-parent="#faq">
      <div class="accordion-body">Yes, every lesson uses easy English.</div>
    </div>
  </div>
</div>
```
