
var dishData = [
    { title: "Tonkatsu", image: "images/tonkatsu.jpg" },
    { title: "Gyudon", image: "images/gyudon.jpg" },
    { title: "Onigiri", image: "images/onigiri.jpg" },
    { title: "Omurice", image: "images/omurice.jpg" },
    { title: "Ramen", image: "images/ramen.jpg" },
    { title: "Yakiniku", image: "images/yakiniku.jpg" },
    { title: "Udon", image: "images/udon.jpg" },
    { title: "Curry", image: "images/curry.jpg" },
    { title: "Okonomiyaki", image: "images/okonomiyaki.jpg" },
    { title: "Yakitori", image: "images/yakitori.jpg" },
];


var dishContainer = document.getElementById("dishContent");
var rowContainer = document.createElement("div");
rowContainer.classList.add("row", "justify-content-center");
dishContainer.appendChild(rowContainer);

dishData.forEach(function(dish) {
    rowContainer.innerHTML +=
        '<div class="col-12 col-sm-6 col-md-3 col-lg-3 mb-4 d-flex justify-content-center">' +
            '<div class="card" style="width: 100%;">' +
                '<div class="card-img-container" style="position: relative; height: 200px; overflow: hidden;">' +
                    '<img class="card-img-top" src="' + dish.image + '" alt="' + dish.title + ' Image" style="width: 100%; height: 100%; object-fit: cover;">' +
                    '<div class="card-title-overlay" style="position: absolute; bottom: 10px; left: 10px; color: white; font-size: 1rem; font-weight: bold; background-color: rgba(0, 0, 0, 0.6); padding: 5px 10px; border-radius: 5px;">' +
                        dish.title +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
});


var appetizerData = [
    { title: "Sushi", image: "images/sushi.jpg" },
    { title: "Tempura", image: "images/tempura.jpg" },
    { title: "Miso", image: "images/miso.jpg" },
    { title: "Atsuage", image: "images/atsuage.jpg" },
    { title: "Agedashi", image: "images/agedashi.jpg" },
    { title: "Gyoza", image: "images/gyoza.jpg" },
    { title: "Ikayaki", image: "images/ikayaki.jpg" },
    { title: "Takoyaki", image: "images/takoyaki.jpg" }
];


var appetizerContainer = document.getElementById("appetizerContent");
var rowContainer = document.createElement("div");
rowContainer.classList.add("row", "justify-content-center");
appetizerContainer.appendChild(rowContainer);

appetizerData.forEach(function(appetizer) {
    rowContainer.innerHTML +=
        '<div class="col-12 col-sm-6 col-md-3 col-lg-3 mb-4 d-flex justify-content-center">' +
            '<div class="card" style="width: 100%;">' +
                '<div class="card-img-container" style="position: relative; height: 200px; overflow: hidden;">' +
                    '<img class="card-img-top" src="' + appetizer.image + '" alt="' + appetizer.title + ' Image" style="width: 100%; height: 100%; object-fit: cover;">' +
                    '<div class="card-title-overlay" style="position: absolute; bottom: 10px; left: 10px; color: white; font-size: 1rem; font-weight: bold; background-color: rgba(0, 0, 0, 0.6); padding: 5px 10px; border-radius: 5px;">' +
                        appetizer.title +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
});

var dessertData = [
    { title: "Mochi", image: "images/mochi.jpg" },
    { title: "Taiyaki", image: "images/taiyaki.jpg" },
    { title: "Japanese Cake", image: "images/cake.jpg" },
    { title: "Dorayaki", image: "images/dorayaki.jpg" },
    { title: "Dango", image: "images/dango.jpg" },
    { title: "Purin", image: "images/purin.jpg" },
    { title: "Warabi", image: "images/warabi.jpg" },
     { title: "Nama Chocolate", image: "images/nama.jpg" }
];


var dessertContainer = document.getElementById("dessertContent");
var rowContainer = document.createElement("div");
rowContainer.classList.add("row", "justify-content-center");
dessertContainer.appendChild(rowContainer);

dessertData.forEach(function(dessert) {
    rowContainer.innerHTML +=
        '<div class="col-12 col-sm-6 col-md-3 col-lg-3 mb-4 d-flex justify-content-center">' +
            '<div class="card" style="width: 100%;">' +
                '<div class="card-img-container" style="position: relative; height: 200px; overflow: hidden;">' +
                    '<img class="card-img-top" src="' + dessert.image + '" alt="' + dessert.title + ' Image" style="width: 100%; height: 100%; object-fit: cover;">' +
                    '<div class="card-title-overlay" style="position: absolute; bottom: 10px; left: 10px; color: white; font-size: 1rem; font-weight: bold; background-color: rgba(0, 0, 0, 0.6); padding: 5px 10px; border-radius: 5px;">' +
                        dessert.title +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
});

var drinkData = [
    { title: "Chuhai", image: "images/chuhai.jpg" },
    { title: "Matcha", image: "images/matcha.jpg" },
    { title: "Ramune", image: "images/ramune.jpg" },
    { title: "Sake", image: "images/sake.jpg" },
    { title: "Shochu", image: "images/shochu.jpg" }
];


var drinkContainer = document.getElementById("drinkContent");
var rowContainer = document.createElement("div");
rowContainer.classList.add("row", "justify-content-center");
drinkContainer.appendChild(rowContainer);

drinkData.forEach(function(drink) {
    rowContainer.innerHTML +=
        '<div class="col-12 col-sm-6 col-md-3 col-lg-3 mb-4 d-flex justify-content-center">' +
            '<div class="card" style="width: 100%;">' +
                '<div class="card-img-container" style="position: relative; height: 200px; overflow: hidden;">' +
                    '<img class="card-img-top" src="' + drink.image + '" alt="' + drink.title + ' Image" style="width: 100%; height: 100%; object-fit: cover;">' +
                    '<div class="card-title-overlay" style="position: absolute; bottom: 10px; left: 10px; color: white; font-size: 1rem; font-weight: bold; background-color: rgba(0, 0, 0, 0.6); padding: 5px 10px; border-radius: 5px;">' +
                        drink.title +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
});