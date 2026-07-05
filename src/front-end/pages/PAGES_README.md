# pages — the screens people visit

### What are pages?

A **page** is one full screen of the app that has its own web address, like the
home page or the profile page. Each page here gets its own folder with three
files:

```
pages/
├── main-page/       ← the home page
│   ├── main-page.html   ← the page's content
│   ├── main-page.css    ← styles just for this page
│   └── main-page.js     ← what this page does
├── profile-page/    ← the profile page (same three files)
└── sam-page/        ← a super-simple EXAMPLE page (HTML + CSS, no JS)
```

> 🌟 **New coder? Start with `sam-page/`.** It's the simplest page here and it
> comes with a step-by-step task (`SAM_README.md`) for making your very own page.

### Why are they in their own folder?

So each page's HTML, CSS, and JS stay **together and separate from other
pages**. When you work on the profile page, everything you need is in one place,
and you can't accidentally break the home page.

### How do I create a new one?

1. Make a new folder in here, e.g. `about-page/`.
2. Add `about-page.html`, `about-page.css`, and `about-page.js` inside it.
3. In the HTML, link the shared styles and scripts (copy the top of
   `main-page.html` as a starting point).
4. Link to your new page from the header or another page with
   `<a href="/front-end/pages/about-page/about-page.html">About</a>`.

**In your own project:** one folder per page keeps a growing app easy to
navigate.
