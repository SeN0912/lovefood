-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 09 Lut 2018, 07:06
-- Wersja serwera: 10.1.26-MariaDB
-- Wersja PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `app`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ingreadient`
--

CREATE TABLE `ingreadient` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `ingreadient`
--

INSERT INTO `ingreadient` (`id`, `name`, `quantity`) VALUES
(1, 'pieczarki (g)', 300),
(2, 'papryka (g)', 500),
(3, 'mÄ…ka (g)', 500),
(4, 'woda (l)', 1),
(5, 'papryka (g)', 200),
(6, 'woda (l)', 1),
(7, 'drozdze (g)', 400),
(8, 'pieczarki (g)', 300),
(9, 'pieczarki (g)', 100),
(10, 'mÄ…ka (g)', 200),
(11, 'woda (ml)', 200),
(12, 'papryka (g)', 50);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ingredients`
--

CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL,
  `ingredient_name` varchar(200) NOT NULL,
  `unit` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `ingredients`
--

INSERT INTO `ingredients` (`id`, `ingredient_name`, `unit`) VALUES
(1, 'papryka', 'g'),
(2, 'pieczarki', 'g'),
(3, 'mÄ…ka', 'g'),
(4, 'woda', 'ml'),
(5, 'drozdze', 'g'),
(6, 'salata', 'g');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `recepies`
--

CREATE TABLE `recepies` (
  `id` int(11) NOT NULL,
  `recipename` varchar(200) NOT NULL,
  `author` varchar(200) NOT NULL,
  `url` varchar(200) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `directions` varchar(3000) NOT NULL,
  `time` int(11) NOT NULL,
  `portion` int(11) NOT NULL,
  `classname` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `recepies`
--

INSERT INTO `recepies` (`id`, `recipename`, `author`, `url`, `directions`, `time`, `portion`, `classname`) VALUES
(1, 'Kotlet mielony', 'admin', 'upload/2.jpg ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget rhoncus velit. Maecenas vulputate in nibh eget maximus. Phasellus id ex blandit, pharetra diam sit amet, malesuada orci. Phasellus dignissim id ligula vel semper. Donec quis est tempus, malesuada augue ac, pharetra nulla.', 20, 2, 'bg-success'),
(2, 'Barszcz z uszkami', 'piotr', 'upload/bc9e2421d49885880de621afe21c05b4,51,1,0-71-1000-609-0.jpg ', 'Maecenas sollicitudin enim at quam laoreet mollis. Nulla fermentum eros et lectus fermentum euismod. Fusce consectetur vel tortor et suscipit. Fusce pellentesque quam id dolor euismod, vel tincidunt ligula placerat. Nam vehicula porttitor metus in interdum. Nullam efficitur metus sit amet lorem vehicula malesuada. In tincidunt a nibh sagittis vulputate.', 45, 3, 'bg-warning'),
(3, 'Pieczen', 'piotr', 'upload/fotolia_49074094_subscription_xxl1.jpg ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget rhoncus velit. Maecenas vulputate in nibh eget maximus. Phasellus id ex blandit, pharetra diam sit amet, malesuada orci. Phasellus dignissim id ligula vel semper. Donec quis est tempus, malesuada augue ac, pharetra nulla. Etiam lobortis nisl ut malesuada mattis. Morbi viverra enim a sollicitudin lobortis. Sed at lobortis magna. Morbi sit amet diam vulputate, dapibus lectus sed, sodales ex. Mauris scelerisque eget ante at sagittis. Pellentesque pellentesque sem eu dapibus porttitor.', 45, 4, 'bg-warning'),
(4, 'Deser', 'dominik', 'upload/68-tradycyjne-niemieckie-potrawy.jpg ', 'Etiam lobortis nisl ut malesuada mattis. Morbi viverra enim a sollicitudin lobortis. Sed at lobortis magna. Morbi sit amet diam vulputate, dapibus lectus sed, sodales ex. Mauris scelerisque eget ante at sagittis. Pellentesque pellentesque sem eu dapibus porttitor.', 60, 5, 'bg-danger'),
(5, 'Pizza z pieczarkami', 'magda', 'upload/pizza-z-pieczarkami-8-469x313.jpg ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget rhoncus velit. Maecenas vulputate in nibh eget maximus. Phasellus id ex blandit, pharetra diam sit amet, malesuada orci. Phasellus dignissim id ligula vel semper. Donec quis est tempus, malesuada augue ac, pharetra nulla. Etiam lobortis nisl ut malesuada mattis. Morbi viverra enim a sollicitudin lobortis. Sed at lobortis magna. Morbi sit amet diam vulputate, dapibus lectus sed, sodales ex. Mauris scelerisque eget ante at sagittis. Pellentesque pellentesque sem eu dapibus porttitor.', 75, 6, 'bg-danger'),
(6, 'Kotlet drobiowy nadziewany serem i szynka', 'dominik', 'upload/przepis11-624x446.jpg ', 'Nulla arcu ex, ornare non consequat ac, imperdiet ut tortor. Sed id enim vitae dui aliquet consequat convallis id dui. Vestibulum imperdiet vel metus eget facilisis. Aliquam volutpat dolor nunc, pulvinar mattis lacus varius eget. Vestibulum quis dapibus enim. Aenean sit amet lacinia massa, ut pulvinar lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur egestas malesuada dolor lacinia vestibulum. Etiam varius condimentum interdum. Quisque consequat imperdiet consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 70, 3, 'bg-danger'),
(7, 'Panini z szynka i serem', 'piotr', 'upload/wloskie-panini-z-szynka-i-serem.jpg ', 'Pellentesque vestibulum elementum nunc, feugiat vulputate justo volutpat vitae. Nunc vehicula consectetur urna at accumsan. Ut nec tempus orci, non pretium risus. Duis quis nulla a eros feugiat tempus. Etiam eget arcu sit amet ante dictum semper. Sed consequat blandit blandit. Nunc id metus nec risus semper cursus et in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eget dolor varius justo aliquet vehicula ac eu nunc. Donec pretium neque tortor, vel dapibus odio gravida a. Donec vitae est nec arcu facilisis consequat. Vivamus gravida, felis non varius gravida, enim ante sagittis nisi, a lobortis risus purus vitae velit. Nam condimentum sapien vitae nunc pharetra tempus et at turpis. Duis laoreet turpis non turpis lacinia tincidunt.', 30, 2, 'bg-warning'),
(8, 'Tortilla z kurczakiem', 'magda', 'upload/grillowana-tortilla-z-kurczakiem-i-warzywami.jpg ', 'Nam tincidunt nisl sit amet ligula lacinia pellentesque. Pellentesque at fringilla dui. Fusce finibus nec arcu nec pretium. Ut iaculis maximus justo, nec volutpat sem facilisis a. Pellentesque eget lorem vitae lectus ultrices viverra. Aenean vitae lobortis libero, nec rutrum enim. Nulla faucibus libero eu arcu auctor, ut convallis dolor tempor. Vivamus aliquam ornare pellentesque. Phasellus mattis vulputate nunc eu eleifend. Vivamus luctus blandit est, sit amet vehicula mi vehicula sit amet. Aliquam luctus dapibus tristique. Donec ut dolor id sem venenatis molestie vitae a massa. Sed sit amet nulla dignissim, lobortis velit eget, condimentum massa. Vivamus iaculis pulvinar neque, et dignissim nibh consequat non.', 30, 4, 'bg-warning'),
(9, 'Omlet z kurczakiem i brokuÅ‚ami', 'admin', 'upload/omlet-z-kurczakiem-i-brokulami592132.jpg ', 'Donec varius id nunc eu egestas. Suspendisse diam arcu, volutpat vitae risus et, volutpat consequat ex. Sed finibus finibus vulputate. Nunc ullamcorper venenatis mauris. In lobortis sapien in justo efficitur viverra. Proin tincidunt tortor in viverra congue. Ut vel ante varius, gravida ipsum eget, semper felis. Ut placerat libero at risus rhoncus, sed rhoncus erat efficitur. Fusce luctus, dui nec vehicula blandit, lacus sapien commodo nunc, nec laoreet dolor elit commodo tortor. Nullam pellentesque justo libero, ut varius sapien egestas eget. Nunc eros neque, ultricies ornare est id, pulvinar lacinia quam. Maecenas eget gravida arcu. Fusce vitae metus et nibh viverra molestie. Morbi sagittis dictum mi id placerat. Aenean mattis suscipit tempus.', 60, 1, 'bg-danger'),
(10, 'Kotlet schabowy z ziemniakami', 'dominik', 'upload/634320b0d13462d3176f0896942fa7f0_110705_57b32fe3190aa_wm.jpg ', 'Integer nec pretium felis, in convallis felis. Aliquam luctus tortor lectus. Sed accumsan tortor vel bibendum ullamcorper. Nunc facilisis a turpis vitae ornare. Nulla aliquam condimentum sapien, vitae semper arcu porta imperdiet. Nullam lacinia varius neque sed semper. Phasellus accumsan elit et fermentum pretium. Praesent posuere justo vitae felis dignissim sollicitudin.', 45, 2, 'bg-warning');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`ID`, `username`, `password`) VALUES
(1, 'admin', '1234'),
(10, 'piotr', '1234'),
(11, 'dominik', '1234'),
(12, 'magda', '1234');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `ingreadient`
--
ALTER TABLE `ingreadient`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recepies`
--
ALTER TABLE `recepies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `ingreadient`
--
ALTER TABLE `ingreadient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT dla tabeli `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT dla tabeli `recepies`
--
ALTER TABLE `recepies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `recepies`
--
ALTER TABLE `recepies`
  ADD CONSTRAINT `recepies_ibfk_1` FOREIGN KEY (`id`) REFERENCES `ingreadient` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
