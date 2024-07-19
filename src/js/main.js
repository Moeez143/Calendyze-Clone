// Import our custom CSS
import "../scss/styles.scss";
import "../scss/bootstrap.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const toggleBtns = document.querySelectorAll(".accordion-toggle");
const checkClass = document.querySelectorAll(".show");

// console.log('toggleBtns', toggleBtns);
// console.log('checkClass', checkClass);

document.addEventListener("DOMContentLoaded", () => {
  if (checkClass) {
    toggleBtns[0].classList.add("accordion-border-padding");
  }

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      //same button
      if (this.classList.contains("accordion-border-padding")) {
        this.classList.remove("accordion-border-padding");
        return;
      }

      // first remove form all element
      toggleBtns.forEach((button) => {
        button.classList.remove("accordion-border-padding");
      });

      if (checkClass) {
        this.classList.add("accordion-border-padding");
      }
    });
  });
});
