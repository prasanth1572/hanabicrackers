

// const itemCountDisplay = document.getElementById("countItem");

// // Load the saved count from localStorage
//     let itemCount = 0;

//     // Update the count when an item is added
//     function addCart() {

//         itemCount++;
//         itemCountDisplay.textContent = itemCount;
//     };

// Get the cart count from local storage or set it to 0 if not present
let cartCount = localStorage.getItem('cartCount') || 0;
const cartCountElement = document.getElementById('countItem');

// Display the initial cart count
cartCountElement.textContent = cartCount;

function addCart() {
    cartCount++;
    cartCountElement.textContent = cartCount;

    // Update the cart count in local storage
    localStorage.setItem('cartCount', cartCount);
};

















