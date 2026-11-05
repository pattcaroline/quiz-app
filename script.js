const themeCheckbox = document.getElementById("theme-checkbox");
const questionsTheme = document.getElementById("questions-theme");
const subjectFieldset = document.getElementById("subject-theme-fieldset");

//////////////////// LIGHT and DARK THEME //////////////////////////////////////////
function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeCheckbox.checked = true; // Moves slider to the right
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeCheckbox.checked = false; //Moves slider to the left
  }
}

themeCheckbox.addEventListener("change", (e) => {
  const newTheme = e.target.checked ? "dark" : "light";
  setTheme(newTheme);
});

//////////////////////////// Hide Welcome Quiz Start Page////////////////////////////
const quizWelcome = document.getElementById("quiz-menu");
const questionsDisplay = document.getElementById("questions");

function hideWelcomePage(e) {
  quizWelcome.classList.toggle("visually-hidden");
  questionsDisplay.classList.toggle("visually-hidden");
}

// Display Header Subject Selected

function setQuestionThemeHeader(subject) {
  const themeHeaderContainer = document.getElementById("theme__container");
  const themeHeaderContent = document.createElement("div");
  themeHeaderContent.className = "theme__container";
  themeHeaderContent.id = "questions-theme";
  const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
  themeHeaderContent.innerHTML = `
       <div class="theme-image-bg ${subject}">
          <img src="./assets/images/icon-${subject}.svg" alt="" />
       </div>
      <p class="preset-4">${capitalizedSubject}</p>
  `;

  themeHeaderContainer.insertAdjacentElement("afterbegin", themeHeaderContent);
}

subjectFieldset.addEventListener("change", (e) => {
  if (e.target.type === "radio") {
    const subjectSelected = e.target.value;

    setQuestionThemeHeader(subjectSelected);
    hideWelcomePage(subjectSelected);
  }
});
