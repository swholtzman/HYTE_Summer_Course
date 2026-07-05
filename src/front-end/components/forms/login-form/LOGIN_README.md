# login-form — the sign-in form

A simple form that asks **who you are** (your name + GitHub username), then
remembers you.

### What it teaches

- **`localStorage`** — the browser's little box for keeping small bits of info,
  even after you close the tab. We save you there so other pages know who you
  are. (See `utils/storage.js`.)
- **Saving a JSON file** — we also send your info to the back-end, which saves it
  as a file like `back-end/data/users/yourname.json`. Those files are
  **git-ignored** so you never commit someone's info by accident.

### The files

- `login-form.html` — the form's boxes and button
- `login-form.css` — styles just for this form
- `login-form.js` — reads the boxes, saves you, sends you to your profile

> ⚠️ This is a friendly "who are you?" sign-in, **not real security** — there is
> no password. Real logins are a much bigger topic for later.

**In your own project:** start with a plain form, then use `localStorage` to
remember simple things (like a name or a theme choice).
