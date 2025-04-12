<div id="promosContent" class="contents-container mx-auto"  style="margin-top: 50px;">
        <h2 class="text-center">OUR PROMOS</h2>
    </div>

<script>
var promosData = [
    {
        title: "Ramen Loyalty Program",
        text: "Earn points for every bowl! Buy 5 bowls, get 1 free!",
        badgeText: "Loyalty Perk"
    },
    {
        title: "Happy Hour Ramen",
        text: "Enjoy 20% off all ramen from 2 PM to 4 PM every day.",
        badgeText: "Limited Time"
    },
    {
        title: "Spicy Ramen Challenge",
        text: "Finish the spicy ramen and win a free bowl or prize!",
        badgeText: "Challenge"
    },
    {
        title: "Student Discount",
        text: "Get ₱50 off your ramen with a valid student ID.",
        badgeText: "Student Offer"
    }
];

var promosContainer = document.getElementById("promosContent");
var rowContainer = document.createElement("div");
rowContainer.classList.add("row");

promosContainer.appendChild(rowContainer);

for (var i = 0; i < promosData.length; i++) {
    rowContainer.innerHTML +=
        '<div class="col-sm-6 my-3">' +
            '<div class="card shadow-sm" style="background-color:#f9f2da; border: 2px solid #c07343;">' +
                '<div class="card-body">' +
                    '<h5 class="card-title" style="font-family:font; font-size:2.5vh;">' + promosData[i].title + '</h5>' +
                    '<p class="card-text" style="font-family:roboto; font-size: 2vh;">' + promosData[i].text + '</p>' +
                    '<span class="badge" style="background-color:#c07343;">' + promosData[i].badgeText + '</span>' +
                '</div>' +
            '</div>' +
        '</div>';
}


</script>

