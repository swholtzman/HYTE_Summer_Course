# who-am-i

The profile form shown on the profile page. It asks two questions:

- Which high school do you attend?
- What is your goal for completing HYTE?

Unlike the login form, these answers can be changed and saved again any time.

What it shows you:

- Loading saved data back into a form so you can edit it, instead of typing it
  fresh each time.
- Saving in more than one place: the browser (localStorage), our back-end (a JSON
  file), and, for keeners, an online database (see below).

The files:

- `who-am-i.html` is the boxes and the button.
- `who-am-i.css` is the styles just for this form.
- `who-am-i.js` fills the form with saved answers and saves new ones.

Optional keener challenge: want your profile saved on the internet instead of
only on your computer? `utils/keener-api.js` shows how to connect a free online
database (Upstash Redis) using nothing but fetch. It's entirely optional.

Use this pattern in your own projects whenever someone should be able to edit
their info, not just enter it once.
