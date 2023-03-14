-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2023 at 06:50 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `basicbankingsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `sName` varchar(50) NOT NULL,
  `rName` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `sName`, `rName`, `amount`, `date`) VALUES
(12, 'satya prasanna lenka', 'omm das', '100', '2023-01-09 00:40:34'),
(13, 'satya prasanna lenka', 'omm das', '223', '2023-01-09 01:00:42'),
(18, 'sanjay kumar bera', 'Tanmay lenka', '100', '2023-01-09 01:18:57');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `balance` varchar(100) NOT NULL,
  `gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `balance`, `gender`) VALUES
(2, 'satya prasanna lenka', 'sartale39@gmail.com', '50976', 'Male'),
(3, 'sanjay kumar bera', 'sanjay@12gmail.com', '68454', 'Male'),
(4, 'promad kumar gochhayat', 'promad55@gmail.com', '1205331212', 'Female'),
(5, 'omm das', 'omm34@23gmail.com', '1426', 'Female'),
(6, 'Rama hari das', 'rama454@gmail.com', '1880', 'Male'),
(8, 'Biswajit mohapatra', 'biswajit2003@gmail.com', '2000', 'Male'),
(9, 'Deepak mandal', 'deepak33@gmail.com', '40000', 'Male'),
(10, 'Debashree das', 'debashree39@gmail.com', '5000', 'Female'),
(11, 'Tanmay lenka', 'Tanmay54@gmail.com', '19067', 'Male'),
(12, 'klinton', 'klinton@gmail.com', '12221', 'Male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
