/*
  storage.js  —  helpers for remembering the user IN THE BROWSER.

  "localStorage" is a tiny box the browser gives every website to keep small
  bits of text, even after you close the tab. It is perfect for remembering
  "who is signed in on this computer".

  localStorage can ONLY store text, so we use:
    JSON.stringify(object)  ->  turn an object into text  (to save)
    JSON.parse(text)        ->  turn text back into an object  (to read)

  Every function below has a clear name and does ONE job. Other files call
  these instead of writing localStorage code over and over (that is "DRY":
  Don't Repeat Yourself).
*/

// The "key" is just the label localStorage files this text under.
const CURRENT_USER_KEY = "hyte.currentUser";

// Save the signed-in user. `user` is an object like { name, githubUsername }.
function saveCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

// Get the signed-in user back as an object, or null if nobody is signed in.
function getCurrentUser() {
  const text = localStorage.getItem(CURRENT_USER_KEY);
  return text ? JSON.parse(text) : null;
}

// Forget the signed-in user (this is our "log out").
function clearCurrentUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}
