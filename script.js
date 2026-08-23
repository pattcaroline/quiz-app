const themeCheckbox = document.getElementById("theme-checkbox");

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
