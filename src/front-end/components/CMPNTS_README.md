# components

A component is a small piece of a page that you can reuse, like a form, a card,
or a menu. Keeping each one in its own folder makes it easy to find and easy to
drop into any page.

In this app the components are the two forms:

```
components/
  forms/
    login-form/    the "who are you?" sign-in form
    who-am-i/      the editable profile form
```

Each component folder keeps its three files together:

- `something.html` is what it looks like (the markup).
- `something.css` is the styles just for this component.
- `something.js` is what it does (the behavior).

A page loads a component with `loadComponent(...)` (see `utils/components.js`).

Any time you build a piece you'll use more than once, give it its own folder in
here.
