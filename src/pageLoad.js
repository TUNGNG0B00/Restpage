import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";
import createTabs from "./website";

function initialLoad() {
    createTabs();
    createRestaurantHomePage();
}

export default initialLoad;
