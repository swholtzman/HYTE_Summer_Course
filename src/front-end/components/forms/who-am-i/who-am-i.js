/*
  who-am-i.js  —  makes the profile form work.

  Two jobs:
    fillProfileForm(user)  ->  put the user's saved answers into the boxes.
    setupProfileForm()     ->  save new answers when the form is submitted.

  profile-page.js calls both AFTER the form's HTML has been loaded.
*/

// Put existing answers into the form so the user can edit them.
function fillProfileForm(user) {
  document.querySelector("#profile-highschool").value = user.highSchool || "";
  document.querySelector("#profile-goal").value = user.hyteGoal || "";
}

// Make the form save when submitted.
function setupProfileForm() {
  const form = document.querySelector("#profile-form");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Start from the user we already know, then add the new answers to it.
    const user = getCurrentUser(); // from storage.js
    user.highSchool = form.querySelector("#profile-highschool").value.trim();
    user.hyteGoal = form.querySelector("#profile-goal").value.trim();

    // Save in three places (the last two are safe to fail):
    saveCurrentUser(user); //  1. the browser (always works)
    await saveUserToServer(user); //  2. our back-end JSON file
    await saveProfileToKeenerDatabase(user); // 3. optional online database (keeners)

    // Tell the user it worked.
    form.querySelector("#profile-message").textContent = "Saved! ✅";
  });
}
