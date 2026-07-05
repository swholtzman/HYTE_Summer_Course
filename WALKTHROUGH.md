# Walkthrough

This is the guide we'll follow together during the lesson. Work through it from
top to bottom, one checkbox at a time. There's no rush, and it's fine to get
stuck. Getting stuck and then figuring it out is most of what coding actually
is.

You can tick a box by changing `- [ ]` to `- [x]` if you're reading this in an
editor, or just keep track in your head.

The whole point of today is not to memorize anything. It's to see how a small,
tidy project is put together so that when you build your own, you know roughly
where things go.


## First, what are all these README and .md files?

You'll notice files ending in `.md` all over this project. That ending stands
for Markdown. Markdown is just plain text with a few simple symbols that add
formatting: a `#` makes a heading, a `-` makes a bullet point, backticks show
`code`. That's basically it. GitHub reads those symbols and shows the file as a
nicely formatted page.

We use them because they're the easiest way to leave notes for whoever opens the
project next, including you a week from now. Every folder in this project has a
short `.md` file explaining what that folder is for, so you're never lost.

They also matter for a reason that's newer: AI coding tools (like Claude,
ChatGPT, or Copilot) read these files to understand your project. When you ask
an AI assistant for help, it does a much better job if there's a clear README
telling it how the project is organized and what you're trying to do. So writing
plain, honest notes in your `.md` files isn't busywork. It's one of the simplest
ways to make both people and AI more useful to you later.

- [ ] Open `README.md` at the top of the project and skim it.
- [ ] Notice that most folders have their own small `.md` file. You'll read a few
      of these as we go.


## Part 1: Get the app running

We'll use the "Live Server" method today because it's the quickest. It lets you
see the app in a browser without installing anything heavy.

- [ ] Open the whole project folder in VS Code (File, then Open Folder).
- [ ] Install the "Live Server" extension (search for it in the Extensions
      panel; it's by Ritwick Dey).
- [ ] Open the file `src/index.html`.
- [ ] Click "Go Live" in the bottom-right corner of VS Code.
- [ ] Your browser should open the app. You should see a welcome screen with a
      sign-in form.

If it opened, you're running a real web app. That's the hard part done.


## Part 2: Use the app the way a visitor would

Before we look at any code, let's just use it.

- [ ] Sign in with your name and your GitHub username.
- [ ] Notice your name now shows up in the blue bar at the top.
- [ ] Click "Profile".
- [ ] Fill in your high school and your goal for HYTE, then click "Save profile".
- [ ] Refresh the page. Your answers are still there.

That "still there after a refresh" part is the browser remembering you. We'll
see how that works in a minute.


## Part 3: Look at how the project is organized

Now open the folders on the left side of VS Code and poke around. Don't try to
understand every file. Just get a feel for the shape of it.

- [ ] Open `src`. This is where all the code lives.
- [ ] Open `src/front-end`. This is everything you can see in the browser: pages,
      styles, and reusable pieces.
- [ ] Open `src/back-end`. This is the small program that saves data. We'll come
      back to it at the very end (it's optional).
- [ ] Read `src/front-end/FRONT_END_README.md`. It explains what each folder in
      there is for.

The big idea to take away: things are grouped by what they are. Pages live in
`pages`, reusable pieces live in `components`, shared styles live in `styles`.
When you need to find or add something, you always know where it goes.


## Part 4: Read a real page (HTML and CSS)

The simplest page in the project is the example page. It's made of just HTML and
CSS, with no JavaScript, so it's the best one to learn from.

- [ ] Open `src/front-end/pages/sam-page/sam-page.html`. This is the content:
      the heading, the paragraph, the list.
- [ ] Open `src/front-end/pages/sam-page/sam-page.css`. This is the styling: the
      colors and shapes.
- [ ] Change a word in the HTML, save, and watch the browser update.
- [ ] Change a color in the CSS, save, and watch it update.

That's the core of front-end work: HTML says what's on the page, CSS says what
it looks like.


## Part 5: Make your own page (your first task)

This is the main task for the lesson. You'll copy the example page and make it
your own.

Full step-by-step instructions are in
`src/front-end/pages/sam-page/SAM_README.md`. Follow them there. The short
version is:

- [ ] Copy the `sam-page` folder and rename the copy to `{your first name}-page`.
- [ ] Rename the two files inside to match your folder name.
- [ ] Update the CSS link inside your HTML file so it points at your CSS file.
- [ ] Change the content and a color or two so the page is about you.
- [ ] Add a link to your page on the home page (this one is a bonus, try it if
      you have time).
- [ ] Save your work with git: make a branch, commit, push, and open a Pull
      Request. The exact commands are in that same `SAM_README.md`.

When your Pull Request is open, you're done with the main lesson. You've built a
page and shared it the same way real teams do.


## Optional: the back-end and a simple API

Everything above runs entirely in the browser. That's plenty for a first app.
This last part is for anyone who's curious about how apps save information for
real, on a computer instead of just in one browser. It's completely optional.

### What a back-end is

The browser isn't allowed to save files on your computer directly. That's a good
thing, for safety. So when an app needs to save something permanently, it sends
the information to a separate program called a back-end, which runs on a computer
and is allowed to save files. Our back-end is one small file:
`src/back-end/server.js`.

- [ ] Read `src/back-end/BACK_END_README.md`.
- [ ] If you have Node.js installed, stop Live Server, then run this in the
      terminal from the project folder: `node src/back-end/server.js`
- [ ] Open `http://localhost:3000` and sign in again.
- [ ] Look in `src/back-end/data/users/`. There's now a file named after your
      GitHub username, with your info inside it.

### What an API endpoint is

An API endpoint is just a web address that a program talks to instead of a
person. When you saved your profile, the browser quietly sent your info to the
address `/api/save-user`, and the back-end saved it. When the profile page
loads, it asks `/api/get-user` for your saved info. Those two addresses are the
whole API for this app.

- [ ] Open `src/front-end/utils/api.js` and read it. This is the front-end side:
      the code that sends info to those addresses.
- [ ] Open `src/back-end/server.js` and find where `/api/save-user` and
      `/api/get-user` are handled. This is the back-end side that answers them.

Notice that the files those saves create are ignored by git on purpose (see the
`.gitignore` file). They hold people's personal info, so they should stay on the
computer that made them and never be uploaded. Keeping private data out of git is
a habit worth building early.

### Going further: saving to an online database

Saving to a file on your own computer is fine for learning, but real apps
usually save to a database on the internet so the data is available anywhere.
There's an optional example of this in `src/front-end/utils/keener-api.js`,
which shows how to send a profile to a free online database using nothing but
the same kind of web request you already used. Try it only if you're interested;
nothing else depends on it.
