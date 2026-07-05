# sam-page: your example page and your first task

This is the simplest page in the project: one HTML file and one CSS file, and no
JavaScript. It's here for you to copy.

- `sam-page.html` is the content (headings, text, a list, a link).
- `sam-page.css` is the styles just for this page.

## Intro task: make your own page

Follow these steps to add your own page to the project.

### 1. Copy this folder

Copy the whole `sam-page` folder and rename the copy to your first name plus
`-page`. For example, if your name is Alex, name it `alex-page/`.

### 2. Rename the files inside

Inside your new folder, rename the two files to match:

- `sam-page.html` becomes `alex-page.html`
- `sam-page.css` becomes `alex-page.css`

### 3. Fix the CSS link

Open your `alex-page.html` and update this line so it points at your CSS file:

    <link rel="stylesheet" href="alex-page.css" />

Leave the `global.css` line exactly as it is.

### 4. Make it yours

Look through the HTML for the comments that say CHANGE THIS, and edit the parts
they point to: your name, your sentence, your list. Then try changing a color in
the CSS. Refresh your browser to see each change.

### 5. Add a link on the home page (bonus)

In `front-end/pages/main-page/main-page.html`, copy the example link line and
change it to point at your page so people can find it.

### 6. Save and share it with git

We don't push straight to `main`, which is the shared, official version. Instead
you make your own branch, then ask for it to be added with a pull request.

In the terminal, from the project folder:

1. Make a branch named after your page:

       git checkout -b alex-page

2. Save your work (this is called a commit):

       git add .
       git commit -m "Add alex-page"

3. Send your branch up to GitHub:

       git push -u origin alex-page

4. Go to the repo on GitHub. It will offer to open a pull request from your
   branch. Click it, add a short title, and submit. A pull request is just a
   request to add your changes into `main`. Your instructor will review it and
   merge it in.

That's it. You've created and shared your first web page.
