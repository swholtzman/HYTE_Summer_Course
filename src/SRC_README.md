# src — where all our code lives

Almost every project keeps its source code in a folder called `src` (short for
"source"). It keeps the messy project root clean.

Inside here we split things into **front-end** (what you see) and **back-end**
(what saves data).

---

### What is `index.html`?

It is the **first page a web server shows**. When you visit a site, the server
looks for `index.html` automatically. Ours is tiny — it just sends you to our
real home page in `front-end/pages/main-page`.

### What is `index.js`?

It is a **shared start-up script that every page runs first**. Ours loads the
header onto each page, so we write the header code once instead of on every
page. (In bigger apps, `index.js` is often the single file the whole app starts
from.)

### What is `global.css`?

It is the **one stylesheet shared by every page** (colours, fonts, buttons).
It now lives in `front-end/styles/global.css`. Put a style there when more than
one page needs it — see `front-end/styles/STYLES_README.md`.

---

**In your own project:** make a `src` folder, put an `index.html` inside, and
grow from there.
