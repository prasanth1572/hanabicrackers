document.addEventListener("DOMContentLoaded", function () {
    const cartItemsBody = document.querySelector(".cart-items-body");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartUI() {
        cartItemsBody.innerHTML = '';

        let subtotal = 0;

        cart.forEach((item, index) => {
            const row = document.createElement("tr");
            const itemSubtotal = item.price * item.quantity;
            subtotal += itemSubtotal;

            row.innerHTML = `
                <td>${item.name}</td>
                <td>₹${item.price.toFixed(2)}</td>
                <td class="count-input">
                    <button class="quantity-btn decrement" data-index="${index}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-index="${index}">
                    <button class="quantity-btn increment" data-index="${index}">+</button>
                </td>
                <td>₹${itemSubtotal.toFixed(2)}</td>
                <td><button class="delete-btn" data-index="${index}">x</button></td>
            `;

            cartItemsBody.appendChild(row);


            const quantityInput = row.querySelector('.quantity-input');

            quantityInput.addEventListener('change', function() {
                const newQuantity = parseInt(this.value);
                if (!isNaN(newQuantity) && newQuantity >= 1) {
                    item.quantity = newQuantity;
                    saveCartToLocalStorage();
                    updateCartUI();
                }
            });

            const subAmount = document.getElementById("sub-total");
            subAmount.textContent = `₹${subtotal.toFixed(2)}`;

            // const discountAmount = document.getElementById("discount");
            // const num = subtotal.toFixed(2) * 0.5;
            // discountAmount.textContent = `₹${num.toFixed(2)}`;

            // const totalAmount = subtotal - num;
            // const totalAmountElement = document.getElementById("total");
            // totalAmountElement.textContent = `₹${totalAmount.toFixed(2)}`;

            localStorage.setItem("subtotal", subtotal);

            item.itemSubtotal = itemSubtotal;
        });
    }
    
    function saveCartToLocalStorage() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    updateCartUI();

    // Increment and decrement quantity
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("increment") || event.target.classList.contains("decrement")) {
            const index = event.target.getAttribute("data-index");
            const quantityInput = cartItemsBody.querySelector(`.quantity-input[data-index="${index}"]`);
            const currentQuantity = parseInt(quantityInput.value);

            if (event.target.classList.contains("increment")) {
                cart[index].quantity++;
            } else if (event.target.classList.contains("decrement") && currentQuantity > 1) {
                cart[index].quantity--;
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartUI();
        }
    });

    // Delete item
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            const index = event.target.getAttribute("data-index");
            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartUI();
        }
    });

    const alertMsg = document.getElementById("alert");
    const checkoutButton = document.getElementById("checkoutButton");
    const continueButton = document.getElementById("continue-btn");
    const refreshButton = document.getElementById("refresh-btn");

    refreshButton.addEventListener("click", function() {
        window.location.reload();
    });

    checkoutButton.addEventListener("click", function() {
        const subtotal = parseFloat(localStorage.getItem("subtotal")) || 0;
        const minimumAmount = 2500;

        if (subtotal > minimumAmount) {
            // Proceed to the next page
            window.location.href = "checkout.html"; // Replace with the actual URL of the next page
        } else {
            alertMsg.textContent = `Minimum order amount is ₹${minimumAmount}. Your current total is ₹${subtotal.toFixed(2)}. Please add more items to meet the minimum requirement.`;
            continueButton.innerHTML = `<button class="btn btn-success"><a href="fireworks.html" class="text-decoration-none text-white">CONTINUE TO SHOPPING</a></button>`;
            checkoutButton.style.display = 'none';
            refreshButton.innerHTML = `<button class="btn btn-dark text-white">UPDATE CART</button>`;
        }
    });
});
