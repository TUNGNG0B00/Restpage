import createRestaurantHomePage from "./restaurant.js";
import createMenuPage from "./menu.js";
import createContactPage from "./contact.js";

// restaurant.js


const createTabs = () => {
  const content = document.querySelector("#content");
  const existingNavBar = document.querySelector(".nav-bar");

  // Check if the navigation bar already exists
  if (!existingNavBar) {
    const navBar = document.createElement("div");
    navBar.setAttribute("class", "nav-bar");

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const logo = document.createElement("img");

    div1.setAttribute("class", "home-btn tab");
    div2.setAttribute("class", "menu-btn tab");
    div3.setAttribute("class", "contact-btn tab");
    logo.setAttribute("class", "logo");

    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";
    logo.src = "images/logo.png";

    navBar.appendChild(logo);
    navBar.appendChild(div1);
    navBar.appendChild(div2);
    navBar.appendChild(div3);

    content.appendChild(navBar);

    div1.addEventListener("click", () => {
      clearContent();
      createRestaurantHomePage(); 
    });

    div2.addEventListener("click", () => {
      clearContent();
      createMenuPage();
    });

    div3.addEventListener("click", () => {
      clearContent();
      createContactPage();
    });
  }
};


function clearContent(){
  const content = document.querySelector("#content");
  const pageContent = document.querySelector(".page-content");
  if(pageContent){
    content.removeChild(pageContent);
  }
}


export default createTabs;