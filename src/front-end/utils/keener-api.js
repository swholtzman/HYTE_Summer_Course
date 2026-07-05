/*
  keener-api.js  —  OPTIONAL. Only for "keeners" who want extra challenge.

  Everything in the app already works without this file. This shows how you
  could ALSO send the profile to a free online database so it is saved on the
  internet instead of only on your computer.

  We use Upstash (https://upstash.com) as an example. It has a free Redis
  database you can talk to with plain fetch — no extra libraries.

  Setup (only if you want to try it):
    1. Make a free Upstash account and create a Redis database.
    2. Copy keener-config.example.js to keener-config.js
    3. Paste your database URL and token into keener-config.js
       (keener-config.js is git-ignored so your secret token stays private).

  If keener-config.js is missing, this function does nothing — that is fine.
*/

async function saveProfileToKeenerDatabase(user) {
  // KEENER_CONFIG is created by keener-config.js, if that file exists.
  if (typeof KEENER_CONFIG === "undefined" || !KEENER_CONFIG.url) {
    return; // not set up — skip quietly
  }

  try {
    // Store the whole profile as text under a key named after the GitHub user.
    const key = "hyte:user:" + user.githubUsername;
    const value = JSON.stringify(user);

    await fetch(KEENER_CONFIG.url + "/set/" + key, {
      method: "POST",
      headers: { Authorization: "Bearer " + KEENER_CONFIG.token },
      body: value,
    });
    console.log("Also saved your profile to the online database.");
  } catch (error) {
    console.log("Could not reach the online database (that is okay).");
  }
}
