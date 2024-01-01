// Get the HTML element with the id "main" and store it in the variable named "main"
var main = document.querySelector("#main");

// Get the HTML element with the class "cursor" and store it in the variable named "crsr"
var crsr = document.querySelector(".cursor");

// Add an event listener to the "main" element, which listens for mouse movement
main.addEventListener("mousemove", function (details) {
  // Update the left position of the "crsr" element to the current x-coordinate of the mouse
  crsr.style.left = details.x + "px";
  
  // Update the top position of the "crsr" element to the current y-coordinate of the mouse
  crsr.style.top = details.y + "px";
});
