//your JS code here. If required.
// Select all squares
const squares = document.querySelectorAll(".square");

// Colors
const lavender = "#E6E6FA";
const coffee = "#6F4E37";

// Add event listeners
squares.forEach((sq, idx) => {
  sq.addEventListener("mouseenter", () => {
    squares.forEach((other, i) => {
      if (i !== idx) {
        other.style.backgroundColor = coffee;
      }
    });
  });

  sq.addEventListener("mouseleave", () => {
    squares.forEach(other => {
      other.style.backgroundColor = lavender;
    });
  });
});
