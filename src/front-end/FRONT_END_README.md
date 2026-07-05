# front-end

The front-end is the part that runs in the browser: the pages, the styles, the
buttons, the forms. The part that saves data lives separately in the `back-end`
folder.

Files are grouped by what kind of thing they are:

- `pages/` is one folder per page (home, profile).
- `components/` is reusable pieces used inside pages (the forms).
- `common/` is pieces shared across many pages (the header).
- `utils/` is shared helper functions (small JavaScript tools).
- `styles/` is shared styles (global.css).

Why the folders? So you always know where to find something, and where to put
something new. A page keeps its own code, styles, and markup together, and
anything shared lives in a shared folder so it's only written once.

If you're starting your own project, begin with `pages/` and `styles/`. Add the
others the first time you notice yourself copying the same code into two places.
