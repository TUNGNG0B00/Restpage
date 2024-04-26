// Function to create the restaurant home page
const createRestaurantHomePage = () => {
  // Get the content container
  const content = document.getElementById("content");

  // Create a container for the page content
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  // Create a container for the main content
  const container = document.createElement("div");
  container.setAttribute("class", "container");

  // Create heading elements
  const textAbove = document.createElement("h3");
  textAbove.textContent = "Introducing";
  textAbove.setAttribute("class", "textAbove");
  container.appendChild(textAbove);

  const headOne = document.createElement("h1");
  headOne.textContent = "Freshly-Baked Croissant";
  headOne.setAttribute("class", "headText");
  container.appendChild(headOne);

  // Create an image element
  const image = document.createElement("img");
  image.src = "images/croissant.png";
  image.setAttribute("class", "cakeImage");
  container.appendChild(image);

  // Create a paragraph element for the description
  const copy = document.createElement("p");
  copy.setAttribute("class", "shortText");
  copy.textContent = "Dive into La Crème Vision – where your marvels redefine delight! Unwrap a world of flavor in each French dessert and sweet. Elevate your indulgence, one mini masterpiece at a time.";
  container.appendChild(copy);

  // Create a "Learn More" button
  const learnMoreButton = document.createElement("button");
  learnMoreButton.textContent = "Learn More";
  learnMoreButton.setAttribute("class", "learnMoreButton");
  container.appendChild(learnMoreButton);

  // Append the container to the page content
  pageContent.appendChild(container);

  // Append the page content to the main content container
  content.appendChild(pageContent);
};

// Export the createRestaurantHomePage function
export default createRestaurantHomePage;
