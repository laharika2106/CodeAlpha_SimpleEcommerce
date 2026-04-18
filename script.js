let total = 0;

function addToCart(product, price) {
    let cart = document.getElementById("cart");

    let li = document.createElement("li");
    li.textContent = product + " - ₹" + price;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = " Remove";
    removeBtn.onclick = function() {
        cart.removeChild(li);
        total -= price;
        document.getElementById("total").textContent = total;
    };

    li.appendChild(removeBtn);
    cart.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}
function clearCart() {
    document.getElementById("cart").innerHTML = "";
    total = 0;
    document.getElementById("total").textContent = total;
}