# common

A "common" piece is something that appears on lots of pages and should look the
same everywhere. Here that's the header, the blue bar at the top.

We write the header once, in `header/`, and `index.js` loads it onto every page.
Change it in one place and it changes everywhere, which saves work and avoids
mistakes.

```
common/
  header/
    header.html    what the header looks like
    header.css     styles just for the header
```

Common versus components: both are reusable. Common is for site-wide furniture
like a header, footer, or nav bar. Components are pieces you drop into a page
when a particular page needs them, like a form.

In your own projects, put your header, footer, and nav here so every page shares
the exact same one.
