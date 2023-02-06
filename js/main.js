// Dark Mode Detect
function isDarkActive() {
  const isDarkModeActivated = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let darkSwitch = null;
  let savedDarkMode = localStorage["savedDarkMode"];
  if (savedDarkMode == null) {
      if (isDarkModeActivated) {
          document.getElementById("stylesheetDoc").href = "/css/styles-dark.css";
          darkSwitch = 1;
      } else {
          document.getElementById("stylesheetDoc").href = "/css/styles.css";
          darkSwitch = 0;
      }
  } else {
      darkSwitch = savedDarkMode;
      if (darkSwitch == 1) {
          document.getElementById("stylesheetDoc").href = "/css/styles-dark.css";
      } else {
          document.getElementById("stylesheetDoc").href = "/css/styles.css";
      }
  }
  localStorage["savedDarkMode"] = darkSwitch;
}


// Switch Function
let btn = document.getElementsByClassName('btn')[0];
btn.addEventListener("click", event => {
  let darkSwitch = localStorage["savedDarkMode"];
  if (darkSwitch == 1) {
      document.getElementById("stylesheetDoc").href = "/css/styles.css";
      darkSwitch = 0;
      btn.innerHTML = 'ON';
  } else {
      document.getElementById("stylesheetDoc").href = "/css/styles-dark.css";
      darkSwitch = 1;
      btn.innerHTML = 'OFF';
  }
  localStorage["savedDarkMode"] = darkSwitch;
});

isDarkActive();