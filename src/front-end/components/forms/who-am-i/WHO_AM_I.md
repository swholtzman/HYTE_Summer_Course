# who-am-i — the profile form

The **profile form** shown on the profile page. It asks two questions:

- Which high school do you attend?
- What is your goal for completing HYTE?

Unlike the login form, these answers are **editable** — you can change and
re-save them any time.

### What it teaches

- **Loading saved data back into a form** so you can edit it (not just type it
  once).
- **Saving in more than one place**: the browser (`localStorage`), our back-end
  (a JSON file), and — *for keeners* — an online database (see below).

### The files

- `who-am-i.html` — the form's boxes and button
- `who-am-i.css` — styles just for this form
- `who-am-i.js` — fills the form with saved answers, and saves new ones

### 🌟 Optional keener challenge

Want your profile saved on the internet, not just your computer? See
`utils/keener-api.js` for how to connect a free online database (Upstash Redis)
using nothing but `fetch`. This is completely optional.

**In your own project:** use this pattern whenever a user should be able to
**edit** their info, not just enter it once.
