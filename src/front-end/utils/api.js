/*
  api.js  —  helpers for talking to OUR back-end (server.js).

  The browser cannot save files by itself, so it asks the back-end to do it.
  "fetch" sends a message to the server and waits for an answer.

  Both functions return null if the server is not running, so the rest of the
  app can keep working with just the browser's localStorage.
*/

// Send a user's info to the server, which saves it as a JSON file.
// JSON = JavaScript Object Notation, a text format for storing objects. 
// Super easy to read and write, and works in every programming language.
// `user` is an object like { name, githubUsername, highSchool, hyteGoal }.
async function saveUserToServer(user) {
  try {
    const response = await fetch("/api/save-user", {
      method: "POST", // "POST" means "here is some data to save"
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user), // send the object as text
    });
    return await response.json(); // the saved record comes back
  } catch (error) {
    console.log("Server not reachable — using the browser only.");
    return null;
  }
}

// Ask the server for a user's saved info by their GitHub username.
async function getUserFromServer(githubUsername) {
  try {
    const response = await fetch("/api/get-user?githubUsername=" + encodeURIComponent(githubUsername));
    if (!response.ok) return null; // 404 = no saved profile yet
    return await response.json();
  } catch (error) {
    return null;
  }
}
