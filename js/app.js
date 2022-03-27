const navBar = document.getElementById("navbar__list"); //save ul in navBar
const Sections = document.querySelectorAll("section");

const createList = () => {
  Sections.forEach((section) => {
    // loop on each section of the sections
    List = document.createElement("li"); // create list on every section
    List.innerHTML = `<li><a data-nav="${section.dataset.nav}" class="menu__link">${section.dataset.nav}</a></li>`;
    navBar.appendChild(List);
  });
};

createList();

window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    //select all sections with using active as parameter

    if (
      active.getBoundingClientRect().top <= 150 && //check if the user is viewing the section or not
      active.getBoundingClientRect().top >= -400
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  });
};

const Scrolling = () => {
  navBar.addEventListener("click", function (List) {
    //clicking
    Sections.forEach(function (section) {
      // checking if condition is true, scroll smoothly to section using behavoiur:smooth
      if (List.target.dataset.nav === section.dataset.nav) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
};
Scrolling();
