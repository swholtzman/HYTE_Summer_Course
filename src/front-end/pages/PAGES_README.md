# pages

## What are pages?

A page is one full screen of the app with its own web address, like the home page
or the profile page. Each page here gets its own folder with three files:

```
pages/
  main-page/         the home page
    main-page.html   the content
    main-page.css    styles just for this page
    main-page.js     what this page does
  profile-page/      the profile page (same three files)
  sam-page/          a simple example page (HTML and CSS, no JS)
```

New to this? Start with `sam-page/`. It's the simplest page here, and it comes
with a step-by-step task (SAM_README.md) for making your very own.

## Why is each page in its own folder?

So a page's HTML, CSS, and JS stay together and separate from the other pages.
When you work on the profile page, everything you need is in one place, and you
can't accidentally break the home page.

## How do I make a new one?

1. Make a new folder in here, for example `about-page/`.
2. Add `about-page.html`, `about-page.css`, and `about-page.js` inside it.
3. In the HTML, link the shared styles and scripts. Copying the top of
   `main-page.html` is the easiest way to start.
4. Link to your new page from the header or another page:
   `<a href="/front-end/pages/about-page/about-page.html">About</a>`

One folder per page keeps a growing app easy to move around in.
