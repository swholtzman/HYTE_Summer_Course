# utils — shared helper functions

"utils" is short for **utilities**: small, reusable JavaScript functions that
many parts of the app need. Writing them once here keeps our code **DRY**
(Don't Repeat Yourself).

Each file does **one job**:

| File                       | What it helps with                                   |
| -------------------------- | ---------------------------------------------------- |
| `storage.js`               | Remember the user in the browser (`localStorage`).   |
| `api.js`                   | Talk to our back-end to save / load a user.          |
| `components.js`            | Load a reusable HTML piece into a page.              |
| `keener-api.js`            | *Optional:* also save to an online database.          |
| `keener-config.example.js` | *Optional:* a template for keeners' secret settings. |

**How pages use them:** a page includes the util file with a `<script>` tag,
then calls the function by name, e.g. `saveCurrentUser(user)`.

**In your own project:** the moment you use the same helper in two files, move
it here and give it a clear name.
