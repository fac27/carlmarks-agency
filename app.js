// Get refs to page elements
const contactForm = document.querySelector("#contact-form");
const a11yIcon = document.querySelector("#a11y-icon");
const a11yTrigger = document.querySelector("#a11y-trigger");
const a11yLinks = document.querySelectorAll(".a11y-link");

// Change page theme from slide-out accessibility menu
function changeTheme(displayChange) {
  const bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.setAttribute("data-theme", displayChange);
}

// Increase/decrease page base font size
function changeFontSize(action) {
  // Set minumum font size constant to 10px
  const MIN_FONT_SIZE = 10;
  const rootElement = document.documentElement;

  const fontSizeString = window.getComputedStyle(rootElement, null).getPropertyValue('font-size');

  fontSize = parseFloat(fontSizeString);
  let baseFontSize = Math.floor(fontSize);

  if (action == "increase") {
    baseFontSize++;
  }

  if (action == "decrease" && fontSize >= MIN_FONT_SIZE) {
    baseFontSize--;
  }
  rootElement.style.fontSize = `${baseFontSize}px`;
}

// Simple form data processing
function processForm(event) {
  const name = contactForm["name"].value;
  const company = contactForm["company"].value;
  const email = contactForm["email"].value;
  const timeSubmitted = new Date().toLocaleString();

  console.log(`Name: ${name}\nCompany: ${company}\nEmail: ${email}`);
}

// Set up visibility of slide out menu items for screen reader and tab index
function openAccessibilityMenu(event) {
  event.preventDefault();

  if (event.code === "Enter") {
    a11yTrigger.checked = !a11yTrigger.checked;

    // Set tabIndex to 0 if menu active otherwise set to -1 to avoid tabbing into menu
    a11yLinks.forEach((link) => {
      link.tabIndex = (a11yTrigger.checked) ? 0 : -1;
      link.ariaHidden = (a11yTrigger.checked) ? "false" : "true";
    });
  }
}

contactForm.addEventListener("submit", processForm);
a11yIcon.addEventListener("keyup", openAccessibilityMenu);