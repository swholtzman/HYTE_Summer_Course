/*
  login-form.js  —  makes the login form work.

  Steps when the user clicks "Sign in":
    1. Read what they typed.
    2. Remember them in the browser (localStorage) so other pages know them.
    3. Ask the back-end to save them as a JSON file (optional — works without it).
    4. Send them to their profile page.

  main-page.js calls setupLoginForm() AFTER the form's HTML has been loaded.
*/

function setupLoginForm() {
  const form = document.querySelector("#login-form");
  if (!form) return; // form not on the page, nothing to do

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // stop the browser from reloading the page

    // 1. Read the typed-in values.
    const user = {
      name: form.querySelector("#login-name").value.trim(),
      githubUsername: form.querySelector("#login-github").value.trim(),
    };

    // 2. Remember them in this browser.
    saveCurrentUser(user); // from storage.js

    // 3. Try to save them on the back-end too (a JSON file).
    await saveUserToServer(user); // from api.js

    // 4. Go to the profile page.
    window.location.href = "/front-end/pages/profile-page/profile-page.html";
  });
}
