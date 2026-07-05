/*
  main-page.js  —  the code for the home page.

  If you are already signed in, it welcomes you.
  If not, it shows the login form.
*/

async function startMainPage() {
  const content = document.querySelector("#main-content");
  const user = getCurrentUser(); // from storage.js

  if (user) {
    // Already signed in — show a welcome and a link to the profile.
    content.innerHTML =
      "<h1 class='welcome-title'>Welcome back, " + user.name + "!</h1>" +
      "<p class='muted'>You are signed in.</p>" +
      "<a class='button' href='/front-end/pages/profile-page/profile-page.html'>Go to my profile</a>";
  } else {
    // Not signed in — show a heading, then load the login form into the page.
    content.innerHTML =
      "<h1 class='welcome-title'>Welcome to HYTE</h1>" +
      "<p class='muted'>Sign in to get started.</p>" +
      "<div id='login-form-slot'></div>";

    await loadComponent(
      "/front-end/components/forms/login-form/login-form.html",
      "#login-form-slot"
    );
    setupLoginForm(); // from login-form.js — now that the form exists, make it work
  }
}

document.addEventListener("DOMContentLoaded", startMainPage);
