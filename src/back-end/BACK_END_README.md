# back-end

The browser (the front-end) isn't allowed to save files on its own, which is a
good thing for safety. So we run a small program, a back-end, that can. Ours is
one file: `server.js`.

What it does:

1. Hands the browser the front-end files (the pages, styles, and scripts).
2. Saves each user as a JSON file when a form is submitted, and can read it back
   later.

It uses only what's built into Node.js, so there's nothing to install.

Running it:

    node src/back-end/server.js

Then open http://localhost:3000. Stop it with Ctrl+C.

The data folder: saved users go in `data/users/` as files like `octocat.json`.
These hold real people's info, so they are kept out of git (see `.gitignore`). We
never want to commit them. The empty `.gitkeep` file just keeps the folder around
in git even when it has no user files in it.

The two addresses (endpoints) it answers:

- `POST /api/save-user` saves or updates a user as JSON.
- `GET /api/get-user?githubUsername=NAME` reads a saved user back.

For your own projects, you only need a back-end once the browser has to save
things for real. Start with localStorage on the front-end, and add a small server
like this when you outgrow it.
