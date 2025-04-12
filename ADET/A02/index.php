<?php

$page = "menu";
if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "home":
            $page = "home";
            break;
        case "menu":
            $page = "menu";
            break;
        case "promos":
            $page = "promos";
            break;
        case "locations":
            $page = "locations";
            break;
        default:
            header("Location: ?page=home");
            break;
    }
} else {
    header("Location: ?page=home");
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Umami Bowl</title>
    <link rel="icon" href="images/logo.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet">

    <style>
        @font-face {
            font-family: 'font';
            src: url('fonts/font.ttf') format('truetype');
        }

        @font-face {
            font-family: 'poppins';
            src: url('fonts/poppins.regular.ttf') format('truetype');
        }

        @font-face {
            font-family: 'font';
            src: url('fonts/font.ttf') format('truetype');
        }

        @font-face {
            font-family: 'roboto';
            src: url('fonts/roboto.ttf') format('truetype');
        }
    </style>

</head>

<body style=" background-image: url('images/background.jpg');">
    <div class="container" style="background-color: #c07343;">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-0 m-0 fixed-top" style="background-color: #c07343;">
            <div class="container" style="background-color: #c07343;">
                <a class="back-to-home" href="index.php">
                    <img src="images/icon.png" class="p-0 m-0" style="width:8vh">
                </a>
                <img src="images/wordmark.png" class="wordmark p-0 m-2" style="width:8vh">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav" style="font-family: font; font-size: 3vh;">
                        <li class="nav-item">
                            <a class="nav-link" id="menuLink" href="?page=home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="menuLink" href="?page=menu">Menu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="promosLink" href="?page=promos">Promos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="locationsLink" href="?page=locations">Locations</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container main-body p-0 m-0"
            style="padding-top: 100px; background-color: #f9f2da; display: flex; min-height:100vh;">

            <!-- Sidebar -->
            <div class="sidebar">
                <img src="images/logo.png" class="sidebar-logo mx-auto" style="width: 20vh;">
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 3vh;" class="ms-2 mt-3">
                    <li style="margin-bottom: 1vh;">
                        <a id="sidebarHomeLink" href="?page=home"
                            style="color: #000; text-decoration: none; padding: 10px 0; display: block;">HOME</a>
                    </li>
                    <li style="margin-bottom: 1vh;">
                        <a id="sidebarMenuLink" href="?page=menu"
                            style="color: #000; text-decoration: none; padding: 10px 0; display: block;">MENU</a>
                    </li>
                    <li style="margin-bottom: 1vh;">
                        <a id="sidebarPromosLink" href="?page=promos"
                            style="color: #000; text-decoration: none; padding: 10px 0; display: block;">PROMOS</a>
                    </li>
                    <li>
                        <a id="sidebarLocationsLink" href="?page=locations"
                            style="color: #000; text-decoration: none; padding: 10px 0; display: block;">LOCATIONS</a>
                    </li>
                </ul>

            </div>

            <!-- Content page container -->
            <div class="container main-content flex-grow-1">
                <div id="bannerCarousel" class="carousel slide banner-container mt-0 pt-0" data-bs-ride="carousel"
                    style="width: 100%; height: auto;">

                    <!-- Carousel -->
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>

                    <div class="carousel-inner" style="height: auto;">
                        <div class="carousel-item active">
                            <img src="images/banner1.jpg" class="d-block w-100 img-responsive" alt="Banner Image 1"
                                style="object-fit: fill;">
                        </div>
                        <div class="carousel-item">
                            <img src="images/banner2.jpg" class="d-block w-100 img-responsive" alt="Banner Image 2"
                                style="object-fit: fill;">
                        </div>
                        <div class="carousel-item">
                            <img src="images/banner.jpg" class="d-block w-100 img-responsive" alt="Banner Image 3"
                                style="object-fit: fill;">
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#bannerCarousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#bannerCarousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <!-- PHP include -->
                <?php include("shared/" . $page . ".php"); ?>

            </div>
        </div>

        <!-- Footer -->
        <footer class="d-flex justify-content-between align-items-center border-top mt-auto py-3">
            <div class="col-md-4 d-flex align-items-center">
                <span class="text-muted" style="font-family: font;">&copy; 2025, Umami Bowl</span>
            </div>
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-twitter"
                            style="font-size: 1.5rem;"></i></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-instagram"
                            style="font-size: 1.5rem;"></i></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-facebook"
                            style="font-size: 1.5rem;"></i></a></li>
            </ul>
        </footer>


        <script>
            // JS Functions
            function showSection(sectionId) {
                document.getElementById("homeContent").style.display = "none";
                document.getElementById("menuContent").style.display = "none";
                document.getElementById("promosContent").style.display = "none";
                document.getElementById("locationsContent").style.display = "none";

                document.getElementById(sectionId).style.display = "block";
            }

            // Navbar Links
            document.getElementById("homeLink").addEventListener("click", function () {
                showSection("homeContent");
            });
            document.getElementById("menuLink").addEventListener("click", function () {
                showSection("menuContent");
            });
            document.getElementById("promosLink").addEventListener("click", function () {
                showSection("promosContent");
            });
            document.getElementById("locationsLink").addEventListener("click", function () {
                showSection("locationsContent");
            });

            // Sidebar Links
            document.getElementById("sidebarHomeLink").addEventListener("click", function () {
                setActiveLink(this);
                showSection("homeContent");
            });
            document.getElementById("sidebarMenuLink").addEventListener("click", function () {
                setActiveLink(this);
                showSection("menuContent");
            });
            document.getElementById("sidebarPromosLink").addEventListener("click", function () {
                setActiveLink(this);
                showSection("promosContent");
            });
            document.getElementById("sidebarLocationsLink").addEventListener("click", function () {
                setActiveLink(this);
                showSection("locationsContent");
            });

            //Sidebar hovers
            function setActiveLink(clickedLink) {
                document.querySelectorAll(".sidebar a").forEach(function (link) {
                    link.classList.remove("active");
                });

                clickedLink.classList.add("active");
            }

        </script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.min.js"
            integrity="sha384-VQqxDN0EQCkWoxt/0vsQvZswzTHUVOImccYmSyhJTp7kGtPed0Qcx8rK9h9YEgx+"
            crossorigin="anonymous"></script>
</body>

</html>