// document.addEventListener("DOMContentLoaded", function() {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     addToCartButtons.forEach(button => {
//         button.addEventListener("click", function() {
//             const product = button.parentElement;
//             const productName = product.querySelector("h3").textContent;
//             const productPrice = parseFloat(product.querySelector("p").textContent.slice(1));

//             let existingItem = cart.find(item => item.name === productName);

//             if (existingItem) {
//                 existingItem.quantity++;
//             } else {
//                 cart.push({
//                     name: productName,
//                     price: productPrice,
//                     quantity: 1
//                 });
//             }

//             localStorage.setItem("cart", JSON.stringify(cart));
//         });
//     });

//     const form = document.getElementById("contactForm");

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const phone = document.getElementById('phoneNumber').value;
//         const address = document.getElementById('address').value;
//         const district = document.getElementById('district').value;
//         const state = document.getElementById('state').value;
//         const zip = document.getElementById('zipcode').value;

//         const userData = {
//             name,
//             email,
//             phone,
//             address,
//             district,
//             state,
//             zip
//         };

//         sendDataToAppsScript(userData, cart);
//     });

//     function sendDataToAppsScript(userData, cartData) {
//         const jsonData = {
//             userData,
//             cartData
//         };

//         fetch('https://script.google.com/macros/s/AKfycbzwj1Yp9XXSiOV8EKURr9JTC79kexPiteaWvsy_YcYIZSk6qIaJzXXLFqAWeYWewdGryA/exec', {
//             method: 'POST',
//             mode: 'no-cors', // Use 'no-cors' for testing purposes
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(jsonData)
//         })
//         .then(response => response.text())
//         .then(data => {
//             console.log(data); // Log the response from the server
//             alert('Order successfully submitted!');
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('An error occurred. Please try again.');
//         });
//     }
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     addToCartButtons.forEach(button => {
//         button.addEventListener("click", function() {
//             const product = button.parentElement;
//             const productName = product.querySelector("h3").textContent;
//             const productPrice = parseFloat(product.querySelector("p").textContent.slice(1));

//             let existingItem = cart.find(item => item.name === productName);

//             if (existingItem) {
//                 existingItem.quantity++;
//             } else {
//                 cart.push({
//                     name: productName,
//                     price: productPrice,
//                     quantity: 1
//                 });
//             }

//             localStorage.setItem("cart", JSON.stringify(cart));
//         });
//     });

//     const form = document.getElementById("contactForm");

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const phone = document.getElementById('phoneNumber').value;
//         const address = document.getElementById('address').value;
//         const district = document.getElementById('district').value;
//         const state = document.getElementById('state').value;
//         const zip = document.getElementById('zipcode').value;

//         const userData = {
//             name,
//             email,
//             phone,
//             address,
//             district,
//             state,
//             zip
//         };

//         sendDataToAppsScript(userData, cart);
//     });

//     function sendDataToAppsScript(userData, cartData) {

//         if (!userData || !Array.isArray(cartData)) {
//             console.error('userData is undefined or cartData is not an array');
//             return;
//         }

//         const productData = cartData.map(item => {

//             return {
//                 product: item.name,
//                 quantity: item.quantity,
//                 price: item.price,
//                 total: item.price*item.quantity
//             };
//         });

//         console.log(productData);

//         const jsonData = {
//             userData,
//             cartData: productData
//         };

//         fetch('https://script.google.com/macros/s/AKfycbzwj1Yp9XXSiOV8EKURr9JTC79kexPiteaWvsy_YcYIZSk6qIaJzXXLFqAWeYWewdGryA/exec', {
//             method: 'POST',
//             mode: 'no-cors', // Use 'no-cors' for testing purposes
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(jsonData)
//         })
//         .then(response => response.text())
//         .then(data => {
//             console.log(data); // Log the response from the server
//             alert('Order successfully submitted!');
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('An error occurred. Please try again.');
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const product = button.parentElement;
            const productName = product.querySelector("h3").textContent;
            const productPrice = parseFloat(
                product.querySelector("p").textContent.slice(1)
            );

            let existingItem = cart.find((item) => item.name === productName);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    name: productName,
                    price: productPrice,
                    quantity: 1,
                });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phoneNumber").value;
        const address = document.getElementById("address").value;
        const district = document.getElementById("district").value;
        const state = document.getElementById("state").value;
        const zip = document.getElementById("zipcode").value;

        const userData = {
            name,
            email,
            phone,
            address,
            district,
            state,
            zip,
        };

        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add("was-validated");
            return false;
        }
        else {
            event.preventDefault(); // Prevent the actual form submission

            sendDataToAppsScript(userData, cart);

            form.classList.add("was-validated");
            return true;
        }
    });

    function sendDataToAppsScript(userData, cartData) {
        if (!userData || !Array.isArray(cartData)) {
            console.error("userData is undefined or cartData is not an array");
            return;
        }

        const productData = cartData.map((item) => ({
            product: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity,
        }));

        console.log(productData);

        const jsonData = {
            userData,
            cartData: productData,
        };

        // Send the data to Apps Script
        fetch("https://script.google.com/macros/s/AKfycbxmzRLuHhfU6ZVDGO1Bfysn31RPoT64b1X3GDfevUXhd1OZ--xjaIqpVeEQi9-UMTBG/exec", {
            method: "POST",
            mode: "no-cors", // Use 'no-cors' for testing purposes
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonData),
        })
            .then((response) => response.text())
            .then((data) => {
                console.log(data); // Log the response from the server
                //alert("Order successfully submitted!");

                localStorage.removeItem("cart");
                localStorage.setItem("cartCount", "0");
                localStorage.setItem("subtotal", "0");

                // Redirect to order-successful.html
                window.location.href = "order-successful.html";
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            });
    }
});
