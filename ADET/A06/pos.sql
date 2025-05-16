-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2025 at 02:20 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `name`) VALUES
(3, 'Amuseables Drinks'),
(2, 'Amuseables Foods'),
(1, 'Amuseables Objects'),
(4, 'Amuseables Plants'),
(6, 'Amuseables Sports'),
(5, 'Amuseables Woodlands');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(11) NOT NULL,
  `categoryID` int(11) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `image`, `name`, `code`, `price`) VALUES
(1, 1, 'storm_cloud_bag.jpg', 'Amuseables Cloud Bag', 'AMCLDBG', 2900.00),
(2, 1, 'moon.jpg', 'Amuseables Moon', 'AMMOON', 2400.00),
(3, 1, 'sun.jpg', 'Amuseables Sun', 'AMSUN', 2500.00),
(4, 1, 'diamond_ring.jpg', 'Amuseables Diamond Ring', 'AMDMDRG', 2500.00),
(5, 1, 'val_tina.jpg', 'Amuseables Val & Tina Love Locks', 'AMVTLL', 2500.00),
(6, 1, 'beatie.jpg', 'Amuseables Beatie Heart', 'AMBTHRT', 1800.00),
(7, 1, 'raindrop.jpg', 'Amuseables Happy Raindrop', 'AMHPYRNDRP', 1800.00),
(8, 1, 'campfire.jpg', 'Amuseables Campfire', 'AMCMPFR', 2500.00),
(9, 1, 'coral.jpg', 'Amuseables Coral', 'AMCRL', 2200.00),
(10, 1, 'treasure.jpg', 'Amuseables Treasure Chest', 'AMTRSCHST', 4400.00),
(11, 1, 'toilet_paper.jpg', 'Amuseables Toilet Roll', 'AMTOIRLL', 2200.00),
(12, 1, 'teapot.jpg', 'Amuseables Teapot', 'AMTPT', 2400.00),
(13, 1, 'love_locks.jpg', 'Amuseables Love Locks', 'AMLOVLCKS', 2500.00),
(14, 1, 'mistletoe.jpg', 'Amuseables Mistletoe', 'AMMSLT', 1800.00),
(15, 1, 'snowball.jpg', 'Amuseables Snowball', 'AMSNWBLL', 1100.00),
(16, 1, 'disco.jpg', 'Amuseables Disco Ball', 'AMDSCBLL', 8800.00),
(17, 1, 'ukulele.jpg', 'Amuseables Ukulele', 'AMUKLLE', 3300.00),
(18, 2, 'bunny_egg.jpg', 'Amuseables Bunny Egg', 'AMBNYEGG', 1800.00),
(19, 2, 'ravioli.jpg', 'Amuseables Ravioli', 'AMRVLI', 1800.00),
(20, 2, 'olives.jpg', 'Amuseables Pair of Olives', 'AMPROLV', 3500.00),
(21, 2, 'cinnamon.jpg', 'Amuseables Cinnamon Bun', 'AMCNMBUN', 2300.00),
(22, 2, 'birthday_cake.jpg', 'Amuseables Birthday Cake', 'AMBRTDYCK', 2700.00),
(23, 2, 'peanut.jpg', 'Amuseables Peanut', 'AMPNT', 1400.00),
(24, 2, 'coffee_bean.jpg', 'Amuseables Coffee Bean', 'AMHCFFBN', 1600.00),
(25, 2, 'potato.jpg', 'Amuseables Potato', 'AMPTO', 2000.00),
(26, 2, 'cherry.jpg', 'Amuseables Cherry', 'AMCHRY', 2000.00),
(27, 2, 'baguette.jpg', 'Amuseables Baguette', 'AMBGTE', 2300.00),
(28, 2, 'brocolli.jpg', 'Amuseables Brocolli', 'AMBRCL', 1800.00),
(29, 2, 'carrot.jpg', 'Amuseables Carrot', 'AMCRT', 1200.00),
(30, 2, 'ramen.jpg', 'Amuseables Ramen', 'AMRMN', 3300.00),
(31, 2, 'waffle.jpg', 'Amuseables Rene Waffle', 'AMRNWFL', 3300.00),
(32, 2, 'avocado.jpg', 'Amuseables Avocado', 'AMAVCD', 1600.00),
(33, 2, 'chili.jpg', 'Amuseables Chilli Pepper', 'AMCHLPPR', 1600.00),
(34, 2, 'oats.jpg', 'Amuseables Oats', 'AMOATS', 2900.00),
(35, 3, 'coffee-to-go.jpg', 'Amuseables Coffee-To-Go', 'AMCFFTGO', 1900.00),
(36, 3, 'espresso.jpg', 'Amuseables Espresso Cup', 'AMESPCUP', 1400.00),
(37, 3, 'milkshake.jpg', 'Amuseables Milkshake', 'AMMLKSHK', 2900.00),
(38, 3, 'lemonade.jpg', 'Amuseables Lemonade', 'AMLMND', 2500.00),
(39, 3, 'coconut.jpg', 'Amuseables Aruba Coconut', 'AMARBCCNT', 2700.00),
(40, 3, 'coffee_cup.jpg', 'Amuseables Coffee Cup', 'AMCFFCUP', 2200.00),
(41, 4, 'orchid.jpg', 'Amuseables Pink Orchid', 'AMPNKORCHD', 3600.00),
(42, 4, 'sunflower.jpg', 'Amuseables Sunflower', 'AMSNFLWR', 3600.00),
(43, 4, 'bouquet.jpg', 'Amuseables Flower Bouquet', 'AMFLWRBQT', 3600.00),
(44, 4, 'jade.jpg', 'Amuseables Succulent Jade', 'AMSUCCJD', 1900.00),
(45, 4, 'aloe.jpg', 'Amuseables Succulent Aloe', 'AMSUCCAL', 1900.00),
(46, 4, 'tulip.jpg', 'Amuseables Tulip', 'AMTLP', 2400.00),
(47, 4, 'snake_plant.jpg', 'Amuseables Snake Plant', 'AMSNKPLNT', 5000.00),
(48, 4, 'daisy.jpg', 'Amuseables Daisy', 'AMDSY', 3600.00),
(49, 4, 'paradise.jpg', 'Amuseables Bird of Paradise', 'AMBRDPRDSE', 5800.00),
(50, 4, 'kerrii.jpg', 'Amuseables Kerrii Cactus', 'AMKRICTCS', 2300.00),
(51, 4, 'monstera.jpg', 'Amuseables Monstera Plant', 'AMMNSTRPLNT', 5800.00),
(52, 5, 'blue_spruce.jpg', 'Amuseables Blue Tree', 'AMBLSPRC', 2200.00),
(53, 5, 'nordic.jpg', 'Amuseables Nordic Tree', 'AMNRDCSRC', 2900.00),
(54, 5, 'mushroom.jpg', 'Amuseables Mushroom', 'AMMSHROOM', 4000.00),
(55, 5, 'pine.jpg', 'Amuseables Forestree Pine', 'AMFRSTPM', 1600.00),
(56, 5, 'lime.jpg', 'Amuseables Forestree Lime', 'AMFRSTLM', 1600.00),
(57, 5, 'toadstools.jpg', 'Amuseables Pair of Toadstools', 'AMPRTDSTLS', 2500.00),
(58, 5, 'acorn.jpg', 'Amuseables Acorn', 'AMACRN', 1600.00),
(59, 6, 'basketball.jpg', 'Amuseables Basketball', 'AMBSKTBLL', 4000.00),
(60, 6, 'tennisball.jpg', 'Amuseables Tennis Ball', 'AMTNSBLL', 2200.00),
(61, 6, 'football.jpg', 'Amuseables Football', 'AMFTBLL', 4000.00),
(62, 6, 'table_tennis.jpg', 'Amuseables Table Tennis', 'AMTBLTNS', 2500.00),
(63, 6, 'skateboard.jpg', 'Amuseables Skateboard', 'AMSKTBRD', 3600.00),
(64, 6, 'golfball.jpg', 'Amuseables Golf Ball', 'AMGLFBLL', 1800.00),
(65, 6, 'baseball.jpg', 'Amuseables Baseball', 'AMBSBLL', 2200.00),
(66, 6, 'american_football.jpg', 'Amuseables American Football', 'AMAMRCNFTBLL', 4000.00),
(67, 6, 'cricket_ball.jpg', 'Amuseables Cricket Ball', 'AMCRCKTBLL', 2200.00),
(68, 6, 'badminton.jpg', 'Amuseables Badminton', 'AMBDMNTN', 2200.00),
(69, 6, 'kettleball.jpg', 'Amuseables Kettlebell', 'AMKTLBLL', 3300.00),
(70, 6, 'swim_goggles.jpg', 'Amuseables Swim Goggles', 'AMSWMGGL', 2900.00),
(71, 6, 'surfboard.jpg', 'Amuseables Surfboard', 'AMSRFBRD', 3500.00),
(72, 6, 'ski_goggles.jpg', 'Amuseables Ski Goggles', 'AMSKIGGL', 3600.00),
(73, 6, 'hockey_puck.jpg', 'Amuseables Ice Hockey Puck', 'AMICEHCKYPCK', 2500.00),
(74, 6, 'rugby.jpg', 'Amuseables Rugby Ball', 'AMRGBYBLL', 4000.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`),
  ADD UNIQUE KEY `code` (`code`),
  ADD KEY `categoryID` (`categoryID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryID`) REFERENCES `categories` (`categoryID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
