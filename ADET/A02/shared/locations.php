<div id="locationsContent" class="contents-container mx-auto" style="margin-top: 50px;">
    <h2 class="text-center">OUR LOCATIONS</h2>
    </div>

    <script>
       
var mallTitles = [
    "SM City North EDSA",
    "SM City Clark",
    "SM City Baguio",
    "SM City Cabanatuan",
    "SM City Dasmariñas",
    "SM City Cebu",
    "SM Seaside City Cebu",
    "SM City Iloilo",
    "SM City Bacolod",
    "SM City Consolacion"
];

var mallDescriptions = [
    "North Avenue, Quezon City, Metro Manila",
    "M.A. Roxas Highway, Clark Freeport, Angeles City, Pampanga",
    "Luneta Hill, Upper Session Road, Baguio City, Benguet",
    "Brgy. H. Concepcion, Pan-Philippine Hwy, Cabanatuan City, Nueva Ecija",
    "Governor's Drive, Dasmariñas City, Cavite",
    "North Reclamation Area, Cebu City, Cebu",
    "South Road Properties, Cebu City, Cebu",
    "Benigno Aquino Ave, Mandurriao, Iloilo City, Iloilo",
    "Reclamation Area, Bacolod City, Negros Occidental",
    "Cebu North Road, Consolacion, Cebu"
];

var locationContainer = document.getElementById("locationsContent");
var rowContainer = document.createElement("div");
rowContainer.classList.add("row");

locationContainer.appendChild(rowContainer);

for (var i = 0; i < mallTitles.length; i++) {
    rowContainer.innerHTML +=
        '<div class="col-lg-6 col-md-6 col-sm-6 my-3">' +
            '<div class="card shadow-sm mx-auto" style="background-color: #f9f2da; border: 2px solid #c07343;">' +
                '<div class="card-body">' +
                    '<img src="images/logo.png" style="width:5vh; margin-bottom: 10px;">' +
                    '<h5 class="card-title m-0 p-2 text-start" style="font-size:2.5vh;">' + mallTitles[i] + '</h5>' +
                    '<p class="card-text m-0 text-start text-muted" style="font-size:2vh; font-family:roboto;">' + mallDescriptions[i] + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
}

    </script>
