/*
  profile-page.js  —  the code for the profile page.

  What it does:
    1. If nobody is signed in, send them to the home page to sign in.
    2. Show their name and GitHub username (from the login form).
    3. Load the editable profile form and fill it with saved answers.
*/

async function startProfilePage() {
  let user = getCurrentUser(); // from storage.js

  // 1. Must be signed in to see a profile.
  if (!user) {
    window.location.href = "/front-end/pages/main-page/main-page.html";
    return;
  }

  // If the back-end has a newer, more complete record, use it.
  const savedUser = await getUserFromServer(user.githubUsername); // from api.js
  if (savedUser) {
    user = savedUser;
    saveCurrentUser(user); // keep the browser copy up to date
  }

  // 2. Show the name and GitHub username.
  document.querySelector("#profile-name").textContent = user.name;
  document.querySelector("#profile-github").textContent = "@" + user.githubUsername;

  // 3. Load the profile form, fill it in, and make it save.
  await loadComponent(
    "/front-end/components/forms/who-am-i/who-am-i.html",
    "#profile-form-slot"
  );
  fillProfileForm(user); // from who-am-i.js
  setupProfileForm(); // from who-am-i.js
}

document.addEventListener("DOMContentLoaded", startProfilePage);
