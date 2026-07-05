# common — pieces shared by many pages

A "common" piece is something that shows up on lots of pages and should look
the same everywhere. In this app that is the **header** (the blue bar at the
top).

We write the header **once** in `header/` and load it onto every page with
`index.js`. Change it here, and it changes everywhere. That saves work and
avoids mistakes.

```
common/
└── header/
    ├── header.html   ← what the header looks like
    └── header.css    ← styles just for the header
```

**common vs components:** both are reusable, but `common` is for site-wide
furniture (header, footer, nav). `components` is for pieces you drop into a
page when you need them (like a form).

**In your own project:** put your header/footer/nav here so every page shares
the exact same one.
