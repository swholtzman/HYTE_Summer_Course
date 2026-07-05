# front-end — everything you SEE

The front-end is the part that runs **in the browser**: the pages, the styles,
the buttons, the forms. (The part that *saves* data is the separate
`back-end` folder.)

It is split into folders by **what kind of thing** each file is:

| Folder        | What lives here                                   |
| ------------- | ------------------------------------------------- |
| `pages/`      | One folder per page (home, profile).              |
| `components/` | Reusable pieces used inside pages (the forms).    |
| `common/`     | Shared pieces used on many pages (the header).    |
| `utils/`      | Shared helper **functions** (small JS tools).     |
| `styles/`     | Shared styles (`global.css`).                     |

**Why so many folders?** So you always know where to find (and where to put)
things. A page's code, styles, and markup stay together; anything shared lives
in a shared folder so it is written only once.

**In your own project:** start with `pages/` and `styles/`. Add `components/`,
`common/`, and `utils/` the first time you catch yourself copying the same code
into two places.
