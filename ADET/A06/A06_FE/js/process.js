var categories = [];
var products = [];

const getAllCategories = async () => {
    fetch('http://localhost/angelssi.github.io/ADET/A06/A06_BE/categories.php')
        .then(response => response.json())
        .then(data => {
            categories = data;
            loadCategories();
        });
};

const getAllProducts = async (categoryID) => {
    var categoryData = {
        categoryID: categoryID
    };

    fetch('http://localhost/angelssi.github.io/ADET/A06/A06_BE/products.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(response => response.json())
        .then(data => {
            products = data;
            loadProducts();
        });
};

getAllCategories();

var total = 0;
var productQuantities = {};

function loadCategories() {
    var categoriesContainers = document.querySelectorAll(".categories");
    categoriesContainers.forEach(function(container) {
        container.innerHTML = "";
        categories.forEach(function(category, index) {
            var isActive = (index === 0) ? "" : "";
            container.innerHTML +=
                '<div onclick="getAllProducts(' + category.categoryID + '); setActive(this)" ' +
                'class="card mx-1 custom-button p-3 text-center ' + isActive + '">' +
                '<small>' + category.name + '</small>' +
                '</div>';
        });
    });
}

function setActive(element) {
    var buttons = document.querySelectorAll(".custom-button");
    buttons.forEach(function(btn) {
        btn.classList.remove("active-btn");
    });
    element.classList.add("active-btn");
}

function loadProducts() {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    products.forEach(function(item) {
        var savedQuantity = productQuantities[item.code] || 1;

        maincontainer.innerHTML += 
            '<div class="col-md-4 col-sm-6">' +
                '<div class="card mx-1 custom-product p-3 m-3 text-center" style="overflow:hidden; margin:10px; height: 350px;" ' +
                'onclick="addToReceipt(\'' + item.price + '\', \'' + item.code + '\')">' +
                    '<img src="images/' + item.image + '" class="card-img mx-auto" style="width: 200px">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + item.name + '</h5>' +
                        '<div class="price-quantity">' +
                            '<p class="card-text">₱' + item.price + '</p>' +
                            '<div class="quantity-selector">' +
                                '<button onclick="event.stopPropagation(); changeQuantity(-1, \'' + item.code + '\')" class="circle-btn">−</button>' +
                                '<input type="number" id="quantity-' + item.code + '" name="quantity" value="' + savedQuantity + '" min="1" max="10" readonly>' +
                                '<button onclick="event.stopPropagation(); changeQuantity(1, \'' + item.code + '\')" class="circle-btn">+</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
    });
}

function addToReceipt(price, code) {
    var receiptItemsContainer = document.getElementById("receipt-items");
    var totalValueElement = document.getElementById("totalValue");
    var totalItemsValueElement = document.getElementById("totalItemsValue");

    var quantityInput = document.getElementById("quantity-" + code);
    var newQuantity = parseInt(quantityInput.value);

    var existingItem = document.getElementById("receipt-item-" + code);

    if (existingItem) {
        var quantityElement = existingItem.querySelector(".receipt-quantity");
        var priceElement = existingItem.querySelector(".receipt-price");
        var extendedPriceElement = existingItem.querySelector(".receipt-extended");

        var currentQuantity = parseInt(quantityElement.innerText);
        var quantityDifference = newQuantity - currentQuantity;

        quantityElement.innerText = newQuantity;
        priceElement.innerText = parseFloat(price);
        extendedPriceElement.innerText = (newQuantity * parseFloat(price));

        total += quantityDifference * parseFloat(price);
    } else if (newQuantity > 0) {
        receiptItemsContainer.innerHTML +=
            '<div id="receipt-item-' + code + '" class="d-flex flex-row justify-content-between">' +
                '<div><small>' + code + '</small></div>' +
                '<div><small>x<span class="receipt-quantity">' + newQuantity + '</span></small></div>' +
                '<div><small class="receipt-price">' + parseFloat(price) + '</small></div>' +
                '<div><small class="receipt-extended">' + (price * newQuantity) + '</small></div>' +
            '</div>';

        total += newQuantity * parseFloat(price);
    }

    totalValueElement.innerHTML = "₱" + total.toLocaleString("en-US");

    var totalItems = document.querySelectorAll("#receipt-items .receipt-quantity");
    var itemCount = 0;
    totalItems.forEach(function(item) {
        itemCount += parseInt(item.innerText);
    });
    totalItemsValueElement.innerHTML = itemCount;
}

function changeQuantity(amount, code) {
    var quantityInput = document.getElementById("quantity-" + code);
    var currentQuantity = parseInt(quantityInput.value);
    var newQuantity = currentQuantity + amount;

    if (newQuantity >= parseInt(quantityInput.min) && newQuantity <= parseInt(quantityInput.max)) {
        quantityInput.value = newQuantity;
        productQuantities[code] = newQuantity;

        // If item is already in the receipt, update its quantity and extended price
        var existingItem = document.getElementById("receipt-item-" + code);
        if (existingItem) {
            var quantityElement = existingItem.querySelector(".receipt-quantity");
            var priceElement = existingItem.querySelector(".receipt-price");
            var extendedPriceElement = existingItem.querySelector(".receipt-extended");

            var oldQuantity = parseInt(quantityElement.innerText);
            var price = parseFloat(priceElement.innerText);

            var quantityDiff = newQuantity - oldQuantity;
            quantityElement.innerText = newQuantity;
            extendedPriceElement.innerText = (price * newQuantity);

            // Update total
            total += quantityDiff * price;
            document.getElementById("totalValue").innerHTML = "₱" + total.toLocaleString("en-US");

            // Update total item count
            var totalItems = document.querySelectorAll("#receipt-items .receipt-quantity");
            var itemCount = 0;
            totalItems.forEach(function (item) {
                itemCount += parseInt(item.innerText);
            });
            document.getElementById("totalItemsValue").innerHTML = itemCount;
        }
    }
}
getAllCategories(); 