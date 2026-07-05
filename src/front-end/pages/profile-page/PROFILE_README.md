# profile-page — your profile

Shows your name and GitHub username (from sign-in) and the **editable profile
form** below them.

### How it works

1. You click **Profile** in the header.
2. If you're not signed in, the page sends you back home to sign in first.
3. Your name and GitHub username appear at the top.
4. The profile form loads below, already filled with anything you saved before.
5. When you press **Save profile**, your answers are stored (and the form shows
   "Saved!").

### Where does the info get saved?

- Always: your browser (`localStorage`) and a JSON file on the back-end.
- Optionally (keeners): a free online database — see the profile form's README
  and `utils/keener-api.js`. We suggest **Upstash Redis** because you can use it
  with plain `fetch` and no extra libraries.

### The files

- `profile-page.html` — the page shell
- `profile-page.css` — styles just for this page
- `profile-page.js` — checks you're signed in, then loads and fills the form

**Goal:** show a simple form that saves info **and can be edited later** (the
login form, by contrast, is filled once at sign-in).
