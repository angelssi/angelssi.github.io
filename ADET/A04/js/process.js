// Products List
var productList = [
    { category: "Amuseables Objects", items: [
        ["storm_cloud_bag.jpg", "Amuseables Cloud Bag", "AMCLDBG", 2900],
        ["moon.jpg", "Amuseables Moon", "AMMOON", 2400],
        ["sun.jpg", "Amuseables Sun", "AMSUN", 2500],
        ["diamond_ring.jpg", "Amuseables Diamond Ring", "AMDMDRG", 2500],
        ["val_tina.jpg", "Amuseables Val & Tina Love Locks", "AMVTLL", 2500],
        ["beatie.jpg", "Amuseables Beatie Heart", "AMBTHRT", 1800],
        ["raindrop.jpg", "Amuseables Happy Raindrop", "AMHPYRNDRP", 1800],
        ["campfire.jpg", "Amuseables Campfire", "AMCMPFR", 2500],
        ["coral.jpg", "Amuseables Coral", "AMCRL", 2200],
        ["treasure.jpg", "Amuseables Treasure Chest", "AMTRSCHST", 4400],
        ["toilet_paper.jpg", "Amuseables Toilet Roll", "AMTOIRLL", 2200],
        ["teapot.jpg", "Amuseables Teapot", "AMTPT", 2400],
        ["love_locks.jpg", "Amuseables Love Locks", "AMLOVLCKS", 2500],
        ["mistletoe.jpg", "Amuseables Mistletoe", "AMMSLT", 1800],
        ["snowball.jpg", "Amuseables Snowball", "AMSNWBLL", 1100],
        ["disco.jpg", "Amuseables Disco Ball", "AMDSCBLL", 8800],
        ["ukulele.jpg", "Amuseables Ukulele", "AMUKLLE", 3300]
    ]},
    { category: "Amuseables Foods", items: [
        ["bunny_egg.jpg", "Amuseables Bunny Egg", "AMBNYEGG", 1800],
        ["ravioli.jpg", "Amuseables Ravioli", "AMRVLI", 1800],
        ["olives.jpg", "Amuseables Pair of Olives", "AMPROLV", 3500],
        ["cinnamon.jpg", "Amuseables Cinnamon Bun", "AMCNMBUN", 2300],
        ["birthday_cake.jpg", "Amuseables Birthday Cake", "AMBRTDYCK", 2700],
        ["peanut.jpg", "Amuseables Peanut", "AMPNT", 1400],
        ["coffee_bean.jpg", "Amuseables Coffee Bean", "AMHCFFBN", 1600],
        ["potato.jpg", "Amuseables Potato", "AMPTO", 2000],
        ["cherry.jpg", "Amuseables Cherry", "AMCHRY", 2000],
        ["baguette.jpg", "Amuseables Baguette", "AMBGTE", 2300],
        ["brocolli.jpg", "Amuseables Brocolli", "AMBRCL", 1800],
        ["carrot.jpg", "Amuseables Carrot", "AMCRT", 1200],
        ["ramen.jpg", "Amuseables Ramen", "AMRMN", 3300],
        ["waffle.jpg", "Amuseables Rene Waffle", "AMRNWFL", 3300],
        ["avocado.jpg", "Amuseables Avocado", "AMAVCD", 1600],
        ["chili.jpg", "Amuseables Chilli Pepper", "AMCHLPPR", 1600],
        ["oats.jpg", "Amuseables Oats", "AMOATS", 2900]
    ]},
    { category: "Amuseables Drinks", items: [
        ["coffee-to-go.jpg", "Amuseables Coffee-To-Go", "AMCFFTGO", 1900],
        ["espresso.jpg", "Amuseables Espresso Cup", "AMESPCUP", 1400],
        ["milkshake.jpg", "Amuseables Milkshake", "AMMLKSHK", 2900],
        ["lemonade.jpg", "Amuseables Lemonade", "AMLMND", 2500],
        ["coconut.jpg", "Amuseables Aruba Coconut", "AMARBCCNT", 2700],
        ["coffee_cup.jpg", "Amuseables Coffee Cup", "AMCFFCUP", 2200]
    ]},
    { category: "Amuseables Plants", items: [
        ["orchid.jpg", "Amuseables Pink Orchid", "AMPNKORCHD", 3600],
        ["sunflower.jpg", "Amuseables Sunflower", "AMSNFLWR", 3600],
        ["bouquet.jpg", "Amuseables Flower Bouquet", "AMFLWRBQT", 3600],
        ["jade.jpg", "Amuseables Succulent Jade", "AMSUCCJD", 1900],
        ["aloe.jpg", "Amuseables Succulent Aloe", "AMSUCCAL", 1900],
        ["tulip.jpg", "Amuseables Tulip", "AMTLP", 2400],
        ["snake_plant.jpg", "Amuseables Snake Plant", "AMSNKPLNT", 5000],
        ["daisy.jpg", "Amuseables Daisy", "AMDSY", 3600],
        ["paradise.jpg", "Amuseables Bird of Paradise", "AMBRDPRDSE", 5800],
        ["kerrii.jpg", "Amuseables Kerrii Cactus", "AMKRICTCS", 2300],
        ["monstera.jpg", "Amuseables Monstera Plant", "AMMNSTRPLNT", 5800]
    ]},
    { category: "Amuseables Woodlands", items: [
        ["blue_spruce.jpg", "Amuseables Blue Tree", "AMBLSPRC", 2200],
        ["nordic.jpg", "Amuseables Nordic Tree", "AMNRDCSRC", 2900],
        ["mushroom.jpg", "Amuseables Mushroom", "AMMSHROOM", 4000],
        ["pine.jpg", "Amuseables Forestree Pine", "AMFRSTPM", 1600],
        ["lime.jpg", "Amuseables Forestree Lime", "AMFRSTLM", 1600],
        ["toadstools.jpg", "Amuseables Pair of Toadstools", "AMPRTDSTLS", 2500],
        ["acorn.jpg", "Amuseables Acorn", "AMACRN", 1600]
    ]},
    { category: "Amuseables Sports", items: [
        ["basketball.jpg", "Amuseables Basketball", "AMBSKTBLL", 4000],
        ["tennisball.jpg", "Amuseables Tennis Ball", "AMTNSBLL", 2200],
        ["football.jpg", "Amuseables Football", "AMFTBLL", 4000],
        ["table_tennis.jpg", "Amuseables Table Tennis", "AMTBLTNS", 2500],
        ["skateboard.jpg", "Amuseables Skateboard", "AMSKTBRD", 3600],
        ["golfball.jpg", "Amuseables Golf Ball", "AMGLFBLL", 1800],
        ["baseball.jpg", "Amuseables Baseball", "AMBSBLL", 2200],
        ["american_football.jpg", "Amuseables American Football", "AMAMRCNFTBLL", 4000],
        ["cricket_ball.jpg", "Amuseables Cricket Ball", "AMCRCKTBLL", 2200],
        ["badminton.jpg", "Amuseables Badminton", "AMBDMNTN", 2200],
        ["kettleball.jpg", "Amuseables Kettlebell", "AMKTLBLL", 3300],
        ["swim_goggles.jpg", "Amuseables Swim Goggles", "AMSWMGGL", 2900],
        ["surfboard.jpg", "Amuseables Surfboard", "AMSRFBRD", 3500],
        ["ski_goggles.jpg", "Amuseables Ski Goggles", "AMSKIGGL", 3600],
        ["hockey_puck.jpg", "Amuseables Ice Hockey Puck", "AMICEHCKYPCK", 2500],
        ["rugby.jpg", "Amuseables Rugby Ball", "AMRGBYBLL", 4000]
    ]}
];

var total = 0;
var productQuantities = {};

// To map products from the list
var products = productList.map(function(category) {
    return {
        category: category.category,
        contents: category.items.map(function(item) {
            return {
                isAvailable: true,
                image: item[0],
                name: item[1],
                code: item[2],
                price: item[3].toString()
            };
        })
    };
});

// Load categories content
function loadCategories(){
    var categoriesContainers = document.querySelectorAll(".categories"); 
    categoriesContainers.forEach(container => {
        container.innerHTML = ""; 
        products.forEach((product, index) => {
            var isActive = index === 0 ? "active-btn" : "";
            container.innerHTML += `
                <div onclick="loadProducts('${index}'); setActive(this)" class="card mx-1 custom-button p-3 text-center ${isActive}">
                    <small>${product.category}</small>
                </div>
            `;
        });
    });
    
    loadProducts(0); 

}

// For active button
function setActive(element) {
    var buttons = document.querySelectorAll(".custom-button");
    buttons.forEach(function(btn) {
        btn.classList.remove("active-btn"); 
    });

    element.classList.add("active-btn"); 
}


// To load products in each card
function loadProducts(categoryIndex) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    if (products[categoryIndex] && products[categoryIndex].contents) {
        products[categoryIndex].contents.forEach(function(item) {
            var savedQuantity = productQuantities[item.code] || 1;

            maincontainer.innerHTML += `
                <div class="col-md-4 col-sm-6"> 
                    <div class="card mx-1 custom-product p-3 m-3 text-center" style="overflow:hidden; margin:10px; height: 350px;"
                         onclick="addToReceipt('${item.price}', '${item.code}')">
                        <img src="images/${item.image}" class="card-img mx-auto" style="width: 200px">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <div class="price-quantity">
                                <p class="card-text">₱${item.price}</p>
                                <div class="quantity-selector">
                                    <button onclick="changeQuantity(-1, '${item.code}')" class="circle-btn">−</button>
                                    <input type="number" id="quantity-${item.code}" name="quantity" value="${savedQuantity}" min="1" max="10" readonly>
                                    <button onclick="changeQuantity(1, '${item.code}')" class="circle-btn">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

// Function to add product to receipt
function addToReceipt(price, code) {
    var receiptItemsContainer = document.getElementById("receipt-items");
    var totalValueElement = document.getElementById("totalValue");
    var totalItemsValueElement = document.getElementById("totalItemsValue");

    var quantityInput = document.getElementById(`quantity-${code}`);
    var newQuantity = parseInt(quantityInput.value);

    var existingItem = document.getElementById(`receipt-item-${code}`);

    // Check if item already exists in the receipt
    if (existingItem) {
        var quantityElement = existingItem.querySelector(".receipt-quantity");
        var priceElement = existingItem.querySelector(".receipt-price");
        var extendedPriceElement = existingItem.querySelector(".receipt-extended");

        var currentQuantity = parseInt(quantityElement.innerText);
        var quantityDifference = newQuantity - currentQuantity;

        quantityElement.innerText = newQuantity;
        priceElement.innerText = parseFloat(price);
        extendedPriceElement.innerText = newQuantity * parseFloat(price);

        total += quantityDifference * parseFloat(price);
    } else if (newQuantity > 0) {
        // Add item if it is not in the receipt
        receiptItemsContainer.innerHTML += `
            <div id="receipt-item-${code}" class="d-flex flex-row justify-content-between">
                <div><small>${code}</small></div>
                <div><small>x<span class="receipt-quantity">${newQuantity}</span></small></div>
                <div><small class="receipt-price">${parseFloat(price)}</small></div>
                <div><small class="receipt-extended">${(price * newQuantity)}</small></div>
            </div>
        `;

        total += newQuantity * parseFloat(price);
    }

    totalValueElement.innerHTML = "₱" + total.toLocaleString("en-US");

    var totalItems = document.querySelectorAll("#receipt-items .receipt-quantity");
    var itemCount = 0;
    totalItems.forEach(function(item) {
        itemCount += parseInt(item.innerText);
    });
    totalItemsValue.innerHTML = itemCount;
}


// For the quantity of the product
function changeQuantity(amount, code) {
    var quantityInput = document.getElementById(`quantity-${code}`);
    var currentQuantity = parseInt(quantityInput.value);
    var newQuantity = currentQuantity + amount;

    if (newQuantity >= parseInt(quantityInput.min) && newQuantity <= parseInt(quantityInput.max)) {
        quantityInput.value = newQuantity;
        productQuantities[code] = newQuantity;
    }
}

loadCategories();