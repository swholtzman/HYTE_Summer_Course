# utils

"utils" is short for utilities: small, reusable JavaScript functions that many
parts of the app need. Writing them once here keeps the code from repeating
itself.

Each file does one job:

- `storage.js` remembers the user in the browser (localStorage).
- `api.js` talks to our back-end to save and load a user.
- `components.js` loads a reusable piece of HTML into a page.
- `keener-api.js` is optional; it also saves to an online database.
- `keener-config.example.js` is optional; it's a template for the secret
  settings a keener would add.

A page uses these by including the file with a `<script>` tag, then calling the
function by name, for example `saveCurrentUser(user)`.

Rule of thumb: the moment you use the same helper in two files, move it here and
give it a clear name.
