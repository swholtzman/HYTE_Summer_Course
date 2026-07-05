# main-page — the home page

The first real page people see. It does one of two things:

- **Not signed in?** → shows a welcome and loads the **login form** into the page.
- **Already signed in?** → welcomes you back and links to your profile.

### The files

- `main-page.html` — the page's shell (header slot + a content box)
- `main-page.css` — styles just for this page
- `main-page.js` — decides what to show, and loads the login form when needed

### How it fits together

`main-page.js` uses the shared helpers: `getCurrentUser()` to check if you're
signed in, and `loadComponent()` to drop the login form into the page. Notice
the page itself stays short — the reusable parts live elsewhere and are pulled in.

**In your own project:** keep each page's job small and clear, and pull in
shared pieces (header, forms) instead of copying them.
