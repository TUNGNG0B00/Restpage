// website.js
import createTabs from "./website";

// Function to create the contact page
const createContactPage = () => {
    // Get the content container
    const content = document.getElementById("content");

    // Create a container for the contact information
    const contact = document.createElement("div");
    contact.classList.add("contact");
    content.appendChild(contact);

    // Create a container for the page content
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    // Create elements for phone number, address, and restaurant location
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = '📞 +1 289 885-7659';

    const address = document.createElement("p");
    address.textContent = "🏠 Wellington St. 1123, Halifax, NS, Canada";

    const restaurantLocation = document.createElement("img");
    restaurantLocation.setAttribute("class","restaurantLocation");
    restaurantLocation.src = "images/restaurant-location.png";

    // Append elements to the contact container
    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    // Append the contact container to the page content
    pageContent.appendChild(contact);

    // Append the page content to the main content container
    content.appendChild(pageContent);
};

// Export the createContactPage function
export default createContactPage;
