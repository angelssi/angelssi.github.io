<div id="menuContent" class="contents-container mx-auto" style="margin-top: 50px;">
    <h2 class="text-center">OUR MENU</h2>
</div>

<script>
var menuData = [
    {
        title: "Spicy ramen with egg and green onions",
        pic: "ramen1.png",
        price: "₱233.00"
    },
    {
        title: "Ramen bowl with egg and green onion",
        pic: "ramen2.png",
        price: "₱231.00"
    },
    {
        title: "Spicy ramen with kimchi, egg, spinach, and sesame",
        pic: "ramen3.png",
        price: "₱231.00"
    },
    {
        title: "Ramen bowl with eggs and spring-onions",
        pic: "ramen4.png",
        price: "₱433.00"
    },
    {
        title: "Spicy ramen with egg and cucumber greens",
        pic: "ramen5.png",
        price: "₱466.00"
    },
    {
        title: "Spicy ramen with egg, tofu and spring-onions",
        pic: "ramen6.png",
        price: "₱499.00"
    },
    {
        title: "Curry ramen with eggs and green-onions",
        pic: "ramen7.png",
        price: "₱397.00"
    },
    {
        title: "Kimchi ramen with eggs and green onions",
        pic: "ramen8.png",
        price: "₱427.00"
    },
    {
        title: "Kimchi noodle soup with egg and cucumber",
        pic: "ramen9.png",
        price: "₱584.00"
    },
    {
        title: "Ramen with egg, sesame-seeds, and green-onions",
        pic: "ramen10.png",
        price: "₱398.00"
    },
    {
        title: "Spicy ramen with egg and vegetables",
        pic: "ramen11.png",
        price: "₱491.00"
    },
    {
        title: "Tonkotsu ramen with egg and spring onions",
        pic: "ramen12.png",
        price: "₱499.00"
    }
];

var menuContainer = document.getElementById("menuContent");
var rowContainer = document.createElement("div");
rowContainer.classList.add("row");

menuContainer.appendChild(rowContainer);

for (var i = 0; i < menuData.length; i++) {
    rowContainer.innerHTML +=
        '<div class="col-xl-3 col-lg-4 col-md-6 col-6">' +
            '<div class="card my-3 shadow-sm mx-auto" style="background-color:#f9f2da; border: 2px solid #c07343;">' +
                '<img src="images/' + menuData[i].pic + '" class="shadowcard-img-top" alt="' + menuData[i].title + '">' +
                '<div class="card-body p-1">' +
                    '<h5 class="card-title p-2 text-center" style="font-size:2.5vh;">' + menuData[i].title + '</h5>' +
                    '<p class="cart-text text-center text-muted" style="font-size:2vh; font-family:font;">' + menuData[i].price + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
}
</script>
