// cart-summary.js

document.addEventListener("DOMContentLoaded", function () {

    const storedSubtotal = localStorage.getItem("subtotal");

    const subtotal = parseFloat(storedSubtotal);

    const subAmount = document.getElementById("sub-total");
    subAmount.textContent = `₹${subtotal.toFixed(2)}`;

    // const discountAmount = document.getElementById("discount");

    // const num = subtotal.toFixed(2) * 0.5;

    // discountAmount.textContent = `₹${num.toFixed(2)}`;

    // const totalAmount = subtotal - num;

    // const totalAmountElement = document.getElementById("total");
    // totalAmountElement.textContent = `₹${totalAmount.toFixed(2)}`;
}
);


