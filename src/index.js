/*
  index.js  —  the shared "start-up" script that EVERY page runs first.

  What does it do?
    1. Loads the shared header into the top of the page.
    2. Shows the signed-in user's name (and a Log out button) in that header.

  Why have one shared file?
    Every page needs the same header, so we write this once here instead of
    copying it into every page. (In bigger apps built with tools, "index.js"
    is often the single starting point the whole app is launched from.)

  Each page includes this with:  <script src="/index.js"></script>
  after the util files, so the helpers it uses already exist.
*/

// "async" lets us wait for the header file to load before we fill it in.
async function startPage() {
  // 1. Put the shared header at the top of the page.
  await loadComponent("/front-end/common/header/header.html", "#site-header");

  // 2. Show who is signed in.
  refreshHeaderUser();
}

// Fill the header's user area based on localStorage.
function refreshHeaderUser() {
  const userArea = document.querySelector("#header-user");
  if (!userArea) return;

  const user = getCurrentUser(); // from storage.js

  if (user) {
    userArea.innerHTML =
      "Hi, " + user.name + " &nbsp; <a href='#' id='log-out-link' style='color:#fff'>Log out</a>";

    document.querySelector("#log-out-link").addEventListener("click", (event) => {
      event.preventDefault();
      clearCurrentUser(); // forget the user (from storage.js)
      window.location.href = "/front-end/pages/main-page/main-page.html"; // back to home
    });
  } else {
    userArea.textContent = ""; // nobody signed in, so show nothing
  }
}

// Run our start-up as soon as the page's HTML is ready.
document.addEventListener("DOMContentLoaded", startPage);
