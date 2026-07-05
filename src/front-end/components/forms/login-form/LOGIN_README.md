# login-form

A simple form that asks who you are (your name and GitHub username) and then
remembers you.

What it shows you:

- localStorage, the browser's small box for keeping bits of info even after you
  close the tab. We save you there so the other pages know who you are. See
  `utils/storage.js`.
- Saving a JSON file. We also send your info to the back-end, which saves it as a
  file like `back-end/data/users/yourname.json`. Those files are kept out of git
  so nobody commits someone's personal info by accident.

The files:

- `login-form.html` is the boxes and the button.
- `login-form.css` is the styles just for this form.
- `login-form.js` reads the boxes, saves you, and sends you to your profile.

One thing to be clear about: this is a friendly "who are you?" sign-in, not real
security. There's no password. Real logins are a much bigger topic for later.

For your own projects, start with a plain form and use localStorage to remember
simple things, like a name or a theme choice.
