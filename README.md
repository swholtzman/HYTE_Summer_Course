# HYTE Summer Course — Starter App

A tiny **HTML / CSS / JavaScript** app that shows how a real project is put
together. It has a home page, a simple sign-in, and an editable profile.

The goal is **not** fancy features — it is to show you a clean, tidy way to
organise a project so it is easy to build on. Read the folders and the little
`README` files inside them as you go. 🙂

---

## Run it

There are two ways. Start with the easy one.

### Easy way: Live Server (no install of Node needed)

1. In VS Code, install the **Live Server** extension (by Ritwick Dey).
2. Open **this whole project folder** in VS Code.
3. Open `src/index.html`, then click **Go Live** (bottom-right of VS Code).

The app opens in your browser and the **login page works**. Saving a profile to
a file won't work this way (that needs the back-end below) — and that's totally
fine for now.

> A settings file (`.vscode/settings.json`) tells Live Server to start from the
> `src` folder, so everything lines up.

### Full way: the Node back-end (so profiles save to a file)

1. Install **Node.js** once from <https://nodejs.org>.
2. In a terminal, from this folder, run:

   ```
   node src/back-end/server.js
   ```

   Then open your browser to **http://localhost:3000**. Stop it with `Ctrl + C`.

> No packages to install — the back-end uses only what comes with Node.

---

## What each part does

- **Home page** — welcomes you and shows a sign-in form.
- **Sign in** — you type your name + GitHub username. We remember you two ways:
  in the browser (`localStorage`) and as a small JSON file on your computer.
- **Profile page** — asks which high school you attend and your goal for HYTE.
  You can edit and save these any time.

The saved JSON files hold people's info, so they are **git-ignored** on purpose
(see `.gitignore`) — never commit them.

---

## Folder map

```
HYTE_Summer_Course/
├── README.md            ← you are here
├── .gitignore           ← files git should never save
├── public/              ← images and other public files
└── src/                 ← all our source code lives here
    ├── index.html       ← the first page the browser opens
    ├── index.js         ← shared start-up script (adds the header)
    ├── front-end/       ← everything you SEE (pages, styles, buttons)
    │   ├── pages/        ← one folder per page (home, profile, sam-page example)
    │   ├── components/   ← reusable pieces (the forms)
    │   ├── common/       ← shared pieces used on many pages (the header)
    │   ├── utils/        ← shared helper functions (small JS tools)
    │   └── styles/       ← shared styles (global.css)
    └── back-end/        ← the small server that SAVES data
```

Every folder has its own short `README` explaining what belongs there and how
to make one in your own project.

---

## ⭐ Your first task

Make your own page! `src/front-end/pages/sam-page/` is a super-simple example
page (just HTML + CSS, no JavaScript). Follow the steps in that folder's
`SAM_README.md` to copy it into your own `{yourname}-page/` and push it.

---

## The two big habits this project teaches

1. **Keep things separate.** Front-end (what you see) is apart from back-end
   (what saves data). Each page and component has its own folder.
2. **Don't repeat yourself (DRY).** Anything used in more than one place — the
   header, colours, helper functions — is written **once** and shared.
