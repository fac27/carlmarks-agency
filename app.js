const contactForm = document.querySelector("#contact-form");

function changeTheme(displayChange) {
  const bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.setAttribute("data-theme", displayChange);
}

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

function processForm(event) {
  const name = contactForm["name"].value;
  const company = contactForm["company"].value;
  const email = contactForm["email"].value;
  const timeSubmitted = new Date().toLocaleString();

  console.log(`Name: ${name}\nCompany: ${company}\nEmail: ${email}`);
  
}

contactForm.addEventListener("submit", processForm);