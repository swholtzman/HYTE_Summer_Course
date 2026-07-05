# styles — shared CSS

This folder holds styles used across the **whole app**. The main one is
`global.css`: colours, fonts, page spacing, and the shared look of buttons and
forms.

### Two kinds of CSS — where does a style go?

- **Used on many pages?** → put it in `global.css` here.
  (Example: our button colour, our page width.)
- **Used by only one page or component?** → put it in that page/component's own
  `.css` file, right next to it.
  (Example: `main-page.css`, `login-form.css`.)

This split keeps shared styles in one place and page-only styles out of the way.

**Tip:** `global.css` names our colours and sizes as *variables* at the top
(like `--brand`). Use them with `var(--brand)` so the whole app stays
consistent and is easy to re-colour later.

**In your own project:** start with one `global.css` here, and add a scoped
`.css` file next to any page/component that needs its own special styles.
