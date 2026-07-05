# src

Almost every project keeps its code in a folder called `src` (short for source).
It keeps the top level of the project uncluttered.

Inside, we split things into front-end (what you see) and back-end (what saves
data).

## What is index.html?

It's the first page a web server shows. When you visit a site, the server looks
for `index.html` automatically. Ours is tiny: it just sends you on to the real
home page in `front-end/pages/main-page`.

## What is index.js?

It's a shared start-up script that every page runs first. Ours loads the header
onto each page, so we write the header once instead of repeating it on every
page. In bigger apps, `index.js` is often the single file the whole app starts
from.

## What is global.css?

It's the one stylesheet shared by every page: colors, fonts, and buttons. It
lives in `front-end/styles/global.css`. Put a style there when more than one page
needs it (see `front-end/styles/STYLES_README.md`).

For your own projects, this is the usual starting shape: a `src` folder with an
`index.html` inside, and everything grows from there.
