// classic hello world to make sure my JavaScript is properly linked
console.log('hello world');

// here I am grabbing the html elements to manipulate
const inventoryBtn = $("#inventory-btn");
const dropDownMenu = $("#dropdown-menu");
const dropDownLinks = $(".dropdown-link");

// here I am creating a state I can track
let isMenuOpen = false;

// adding event listener to each link to close menu
dropDownLinks.each(function (i) {
    dropDownLinks[i].addEventListener("click", function () {
        isMenuOpen = false
        dropDownMenu.addClass('dropdown-menu-hide').removeClass("dropdown-menu-show")
    })
})

// here I am adding a click event 
inventoryBtn.on("click", function () {
    // on menu click first thing I want to do is set isMenuOpen to the opposite of what it was
    isMenuOpen = !isMenuOpen;
    // then depending on the state of isMenuOpen either show or hide element
    if(isMenuOpen) {
        dropDownMenu.addClass('dropdown-menu-show').removeClass("dropdown-menu-hide")
    } else if(!isMenuOpen) {
        dropDownMenu.addClass('dropdown-menu-hide').removeClass("dropdown-menu-show")
    }

});