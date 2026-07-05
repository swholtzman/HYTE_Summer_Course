# back-end — the small server that SAVES data

The browser (front-end) is not allowed to save files on its own. So we run a
tiny program — a **back-end** — that can. Ours has just one file: `server.js`.

### What it does

1. **Hands the browser the front-end files** (the pages, styles, scripts).
2. **Saves each user** as a JSON file when a form is submitted, and can read it
   back later.

It uses **only** tools built into Node.js, so there is **nothing to install**.

### Run it

```
node src/back-end/server.js
```

Then open **http://localhost:3000**. Stop it with `Ctrl + C`.

### The data folder

Saved users go in `data/users/` as files like `octocat.json`. These hold real
people's info, so they are **git-ignored** (see the project's `.gitignore`) —
we never want to commit them. The empty `.gitkeep` file just keeps the folder
around in git.

### The two web addresses ("endpoints") it answers

| Method + address                | What it does                       |
| ------------------------------- | ---------------------------------- |
| `POST /api/save-user`           | Save (or update) a user as JSON.   |
| `GET  /api/get-user?githubUsername=…` | Read a saved user back.       |

**In your own project:** you only need a back-end once the browser has to *save*
things for real. Start with `localStorage` (front-end only); add a small server
like this when you outgrow it.
