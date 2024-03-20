console.log('hello world')

// here I am grabbing the html element to manipulate
const inventoryBtn = $("#inventory-btn");

// here I am creating a state I can track
let isMenuOpen = false

// here I am adding a click event 
inventoryBtn.on("click", function () {
    // on menu click first thing I want to do is set menu open to the opposite of what it was
    isMenuOpen = !isMenuOpen
    console.log('clicked', isMenuOpen)
})