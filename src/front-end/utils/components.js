/*
  components.js  —  one helper that lets us REUSE pieces of HTML.

  Our header and our forms live in their own small files so we only write them
  once. This function fetches one of those files and drops it into a page.

  Example:
    loadComponent("/front-end/common/header/header.html", "#site-header");

  ("fetch" asks the server for a file. This is why we run the app through the
  server instead of double-clicking the HTML file.)
*/

async function loadComponent(fileUrl, targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return; // nothing to fill, so quietly stop

  try {
    const response = await fetch(fileUrl); // ask the server for the file
    target.innerHTML = await response.text(); // put its HTML inside the target
  } catch (error) {
    target.innerHTML = "<p>Could not load this section. Is the server running?</p>";
  }
}
