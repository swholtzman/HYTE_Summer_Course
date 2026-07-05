# main-page

The first real page people see. It does one of two things:

- Not signed in: shows a welcome and loads the login form into the page.
- Already signed in: welcomes you back and links to your profile.

The files:

- `main-page.html` is the page's shell (a spot for the header and a content box).
- `main-page.css` is the styles just for this page.
- `main-page.js` decides what to show, and loads the login form when needed.

How it fits together: `main-page.js` uses the shared helpers `getCurrentUser()`
to check whether you're signed in and `loadComponent()` to drop the login form
into the page. Notice how short the page stays. The reusable parts live elsewhere
and are pulled in when needed.

For your own projects, keep each page's job small and clear, and pull in shared
pieces like the header and forms instead of copying them.
