/*
  server.js  —  the "back-end" of our app.

  What is a back-end?
  ------------------
  The FRONT-END is everything you see in the browser (HTML, CSS, the buttons you click).
  The BACK-END is a program that runs on a computer (here, your laptop) and can do
  things the browser is not allowed to do — like save files.

  This tiny server does just TWO jobs:
    1. Hands your browser the front-end files (the HTML/CSS/JS pages).
    2. Saves each user's info into a JSON file when a form is submitted.

  It uses ONLY things that come built into Node.js, so there is nothing to install.

  How to run it:
    1. Install Node.js once (https://nodejs.org).
    2. In a terminal, from the project folder, run:   node src/back-end/server.js
    3. Open your browser to:                           http://localhost:3000
*/

// "require" loads a tool that comes with Node. We are not installing anything.
const http = require("http"); // lets us run a web server
const fs = require("fs"); // lets us read and write files
const path = require("path"); // helps build safe file paths

// The port is the "door number" our server listens on. 3000 is a common choice.
const PORT = 3000;

// Folders we care about, written as full paths so they always work.
const FRONT_END_ROOT = path.join(__dirname, ".."); // the "src" folder (holds the pages)
const USERS_FOLDER = path.join(__dirname, "data", "users"); // where user JSON files live

// A small table so the browser knows what kind of file it is receiving.
const FILE_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

// -------------------------------------------------------------------------
// Helper: turn a GitHub username into a safe file name.
// We only allow letters, numbers, and dashes so nobody can trick us into
// writing to a different folder on the computer.
// -------------------------------------------------------------------------
function safeUserId(githubUsername) {
  return String(githubUsername || "")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-") // swap anything unusual for a dash
    .slice(0, 40); // keep it short
}

// -------------------------------------------------------------------------
// Helper: send a JSON answer back to the browser.
// -------------------------------------------------------------------------
function sendJson(response, statusCode, dataObject) {
  response.writeHead(statusCode, { "Content-Type": "application/json" });
  response.end(JSON.stringify(dataObject));
}

// -------------------------------------------------------------------------
// Job 1: save (or update) one user's info as a JSON file.
// -------------------------------------------------------------------------
function saveUser(request, response) {
  let body = "";
  request.on("data", (chunk) => (body += chunk)); // collect the incoming text
  request.on("end", () => {
    try {
      const incoming = JSON.parse(body); // turn the text into an object
      const id = safeUserId(incoming.githubUsername);

      if (!id) {
        return sendJson(response, 400, { error: "A GitHub username is required." });
      }

      // Build the record we want to store. updatedAt is a simple timestamp.
      const record = {
        name: incoming.name || "",
        githubUsername: incoming.githubUsername || "",
        highSchool: incoming.highSchool || "",
        hyteGoal: incoming.hyteGoal || "",
        updatedAt: new Date().toISOString(),
      };

      // Make sure the folder exists, then write the file.
      fs.mkdirSync(USERS_FOLDER, { recursive: true });
      const filePath = path.join(USERS_FOLDER, id + ".json");
      fs.writeFileSync(filePath, JSON.stringify(record, null, 2)); // pretty JSON

      console.log("Saved user file:", filePath);
      sendJson(response, 200, record);
    } catch (err) {
      sendJson(response, 400, { error: "Could not read the submitted data." });
    }
  });
}

// -------------------------------------------------------------------------
// Job 2: load one user's info back from their JSON file.
// -------------------------------------------------------------------------
function getUser(request, response, githubUsername) {
  const id = safeUserId(githubUsername);
  const filePath = path.join(USERS_FOLDER, id + ".json");

  if (!id || !fs.existsSync(filePath)) {
    return sendJson(response, 404, { error: "No saved profile yet." });
  }

  const record = JSON.parse(fs.readFileSync(filePath, "utf8"));
  sendJson(response, 200, record);
}

// -------------------------------------------------------------------------
// Job 3: hand the browser a front-end file (HTML, CSS, JS, image...).
// -------------------------------------------------------------------------
function serveFile(request, response, urlPath) {
  // "/" means "give me the home page".
  let relativePath = urlPath === "/" ? "/index.html" : urlPath;

  // Never let anyone peek into the back-end folder (that is where saved data lives).
  if (relativePath.includes("/back-end/")) {
    response.writeHead(403);
    return response.end("Not allowed.");
  }

  // path.normalize + the check below stops tricks like "/../../secret".
  const filePath = path.normalize(path.join(FRONT_END_ROOT, relativePath));
  if (!filePath.startsWith(FRONT_END_ROOT)) {
    response.writeHead(403);
    return response.end("Not allowed.");
  }

  fs.readFile(filePath, (err, contents) => {
    if (err) {
      response.writeHead(404, { "Content-Type": "text/html" });
      return response.end("<h1>404 — page not found</h1>");
    }
    const type = FILE_TYPES[path.extname(filePath)] || "text/plain";
    response.writeHead(200, { "Content-Type": type });
    response.end(contents);
  });
}

// -------------------------------------------------------------------------
// The server itself: read each request and decide which job to do.
// -------------------------------------------------------------------------
const server = http.createServer((request, response) => {
  const parsedUrl = new URL(request.url, "http://localhost");
  const pathName = parsedUrl.pathname;

  if (request.method === "POST" && pathName === "/api/save-user") {
    return saveUser(request, response);
  }

  if (request.method === "GET" && pathName === "/api/get-user") {
    return getUser(request, response, parsedUrl.searchParams.get("githubUsername"));
  }

  // Anything else is a request for a front-end file.
  return serveFile(request, response, pathName);
});

server.listen(PORT, () => {
  console.log("HYTE app is running!  Open your browser to: http://localhost:" + PORT);
  console.log("Press Ctrl+C to stop the server.");
});
