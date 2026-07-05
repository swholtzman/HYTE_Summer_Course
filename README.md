# HYTE Summer Course starter app

A small HTML, CSS, and JavaScript app that shows how a real project is put
together. It has a home page, a simple sign-in, and an editable profile.

The point isn't the features. It's to show you a tidy way to organize a project
so it's easy to add to later. As you look around, read the short README files
inside each folder. They explain what that folder is for.

Doing this as a class? Start with WALKTHROUGH.md. It's the step-by-step lesson,
from running the app to building your own page.

## Running it

There are two ways. Start with the easy one.

### Easy way: Live Server (nothing to install beyond VS Code)

1. In VS Code, install the "Live Server" extension (by Ritwick Dey).
2. Open this whole project folder in VS Code.
3. Open `src/index.html` and click "Go Live" in the bottom-right corner.

The app opens in your browser and the login page works. Saving a profile to a
file needs the back-end below, so that part won't work this way. That's fine for
now. (A settings file, `.vscode/settings.json`, tells Live Server to start from
the `src` folder so the addresses line up.)

### Full way: the Node back-end (so profiles save to a file)

1. Install Node.js once from https://nodejs.org.
2. In a terminal, from this folder, run:

       node src/back-end/server.js

3. Open your browser to http://localhost:3000. Stop the server with Ctrl+C.

There are no packages to install. The back-end only uses what comes with Node.

## What each part does

- Home page: welcomes you and shows the sign-in form.
- Sign in: you type your name and GitHub username. The app remembers you two
  ways, in the browser (localStorage) and as a small JSON file on your computer.
- Profile page: asks which high school you attend and your goal for HYTE. You can
  edit and save these any time.

The saved JSON files hold people's info, so they are kept out of git on purpose
(see `.gitignore`). Don't commit them.

## Folder map

```
HYTE_Summer_Course/
  README.md            you are here
  WALKTHROUGH.md       the guided lesson
  .gitignore           files git should never save
  public/              images and other public files
  src/                 all of our source code
    index.html         the first page the browser opens
    index.js           shared start-up script (adds the header)
    front-end/         everything you see (pages, styles, buttons)
      pages/           one folder per page (home, profile, sam-page example)
      components/      reusable pieces (the forms)
      common/          pieces shared across pages (the header)
      utils/           shared helper functions
      styles/          shared styles (global.css)
    back-end/          the small server that saves data
```

Every folder has its own short README explaining what belongs there and, where
it helps, how to do the same thing in your own project.

## Your first task

Build your own page. `src/front-end/pages/sam-page/` is a simple example made of
only HTML and CSS. Follow the steps in that folder's SAM_README.md to copy it
into your own `{yourname}-page/` and share it with a pull request.

## Two habits worth copying

1. Keep things separate. The front-end (what you see) is apart from the back-end
   (what saves data), and each page and component has its own folder.
2. Don't repeat yourself. Anything used in more than one place, like the header,
   the colors, or a helper function, is written once and shared.
