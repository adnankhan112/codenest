---
title: "Bootstrap Project: Landing Page for CodeNest"
sidebar_position: 27
---

# Bootstrap Project: Landing Page for CodeNest

## Theory

We will build a complete, responsive **landing page** for a programming tutorial website. It uses a navbar, a hero section, feature cards, an FAQ accordion, a contact form and a footer.

Parts of the page and the Bootstrap tools we use:

| Part | Bootstrap tools |
| --- | --- |
| Top menu | Navbar |
| Hero | Utilities, buttons |
| Languages | Grid and cards |
| Questions | Accordion |
| Contact | Forms |
| Bottom | Utilities |

## Practical

Save as `index.html` and open it in the browser:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CodeNest - Learn Programming</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">CodeNest</a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#languages">Languages</a></li>
          <li class="nav-item"><a class="nav-link" href="#faq">FAQ</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <header class="bg-primary text-white text-center py-5">
    <div class="container py-4">
      <h1 class="display-4 fw-bold">Learn Programming Step by Step</h1>
      <p class="lead">Free tutorials in easy English for every beginner.</p>
      <a href="#languages" class="btn btn-light btn-lg me-2">Start Learning</a>
      <a href="#contact" class="btn btn-outline-light btn-lg">Contact Us</a>
    </div>
  </header>

  <!-- Languages -->
  <section id="languages" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Choose a Language</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">HTML</h5>
              <p class="card-text">Build the structure of web pages.</p>
              <span class="badge bg-success">26 lessons</span>
            </div>
            <div class="card-footer bg-white border-0">
              <a href="#" class="btn btn-primary w-100">Open</a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Python</h5>
              <p class="card-text">A friendly language for everything.</p>
              <span class="badge bg-success">57 lessons</span>
            </div>
            <div class="card-footer bg-white border-0">
              <a href="#" class="btn btn-primary w-100">Open</a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">JavaScript</h5>
              <p class="card-text">Make websites interactive.</p>
              <span class="badge bg-success">25 lessons</span>
            </div>
            <div class="card-footer bg-white border-0">
              <a href="#" class="btn btn-primary w-100">Open</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="bg-light py-5">
    <div class="container" style="max-width: 800px;">
      <h2 class="text-center mb-4">Questions</h2>
      <div class="accordion" id="faqList">
        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#a1">
              Is it free?
            </button>
          </h3>
          <div id="a1" class="accordion-collapse collapse show" data-bs-parent="#faqList">
            <div class="accordion-body">Yes. Every tutorial is free.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#a2">
              Do I need experience?
            </button>
          </h3>
          <div id="a2" class="accordion-collapse collapse" data-bs-parent="#faqList">
            <div class="accordion-body">No. We start from zero.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-5">
    <div class="container" style="max-width: 600px;">
      <h2 class="text-center mb-4">Contact Us</h2>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea class="form-control" id="message" rows="4"></textarea>
        </div>
        <button class="btn btn-primary w-100" type="submit">Send Message</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-dark text-white-50 text-center py-3">
    <small>&copy; 2026 CodeNest. All rights reserved.</small>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Ideas to improve it

- Add a hero image with a carousel.
- Add a dark mode switch.
- Add icons from Bootstrap Icons.
- Connect the contact form to a PHP or Node.js server.
