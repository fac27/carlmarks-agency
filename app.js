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
  
  rootElement.style.fontSize=`${baseFontSize}px`;
}