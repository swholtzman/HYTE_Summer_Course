# styles

This folder holds the styles used across the whole app. The main one is
`global.css`: colors, fonts, page spacing, and the shared look of buttons and
forms.

Where does a style go?

- If more than one page uses it, put it in `global.css` here. Examples: the
  button color, the page width.
- If only one page or component uses it, put it in that page or component's own
  `.css` file, right next to it. Examples: `main-page.css`, `login-form.css`.

Splitting styles this way keeps the shared ones in a single place and keeps
page-only styles out of the way.

One tip: `global.css` lists our colors and sizes as variables at the top (things
like `--brand`). Use them with `var(--brand)` so the whole app stays consistent
and is easy to recolor later.

For your own projects, start with a single `global.css` and add a scoped `.css`
file next to any page or component that needs something special.
