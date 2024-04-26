// Function to create the menu page
const createMenuPage = () => {
    // Get the content container
    const content = document.getElementById("content");

    // Create a container for the page content
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    // Create a container for the menu items
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuContainer.setAttribute("class", "menuContainer");

    // Create an outer container for styling purposes
    const outerContainer = document.createElement("div");
    outerContainer.setAttribute("class", "outerContainer");
    outerContainer.appendChild(menuContainer);

    // Create a logo element
    const logo = document.createElement("img");
    logo.setAttribute("class", "logoMenu");
    logo.src = "images/logo.png";

    // Append the logo to the menu container
    menuContainer.appendChild(logo);

    // Define menu items
    const menuItems = [
        { name: "Croissant", price: "$3.50" },
        { name: "Éclair", price: "$4.50" },
        { name: "Macarons (Assorted)", price: "$5.99" },
        { name: "Tarte Tatin", price: "$6.50" },
        { name: "Madeleines", price: "$3.99" },
    ];

    // Loop through each menu item and create corresponding elements
    menuItems.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemName = document.createElement("p");
        itemName.textContent = item.name;
        itemName.classList.add("menu-item-name");

        const itemPrice = document.createElement("p");
        itemPrice.textContent = item.price;
        itemPrice.classList.add("menu-item-price");

        // Append item name and price to the menu item container
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);

        // Append the menu item container to the menu container
        menuContainer.appendChild(menuItem);
    });

    // Append the outer container to the page content
    pageContent.appendChild(outerContainer);

    // Append the page content to the main content container
    content.appendChild(pageContent);
};

// Export the createMenuPage function
export default createMenuPage;
