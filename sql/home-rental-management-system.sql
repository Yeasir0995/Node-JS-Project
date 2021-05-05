-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2020 at 09:43 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `home-rental-management-system`
--

-- --------------------------------------------------------

--
-- Table structure for table `admininfo`
--

CREATE TABLE `admininfo` (
  `name` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admininfo`
--

INSERT INTO `admininfo` (`name`, `username`, `password`, `email`, `phone`) VALUES
('ashiq', 'admin', 'admin', 'email', 21548);

-- --------------------------------------------------------

--
-- Table structure for table `customerinfo`
--

CREATE TABLE `customerinfo` (
  `fname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fathersName` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nid` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reportNo` int(10) NOT NULL,
  `status` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customerinfo`
--

INSERT INTO `customerinfo` (`fname`, `lname`, `username`, `password`, `email`, `phone`, `type`, `fathersName`, `nid`, `reportNo`, `status`) VALUES
('Ashiqul Hoque', 'chowdhury', 'what', 'what', 'ehat', '0356', 'available', 'adhgja', 'sdfds', 0, 'unblock');

-- --------------------------------------------------------

--
-- Table structure for table `houseinfo`
--

CREATE TABLE `houseinfo` (
  `houseid` int(10) NOT NULL,
  `housename` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `division` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` int(10) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `prize` int(10) NOT NULL,
  `review` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `houseinfo`
--

INSERT INTO `houseinfo` (`houseid`, `housename`, `division`, `area`, `address`, `size`, `description`, `prize`, `review`, `status`) VALUES
(2, 'ad', 'ddfdfdffdfff', 'dfdf', 'dfdfdf', 322, 'asas', 2365, 'asdkjdbkadjda,askjdsjkda,ldhdalsd', 'rented');

-- --------------------------------------------------------

--
-- Table structure for table `houseownerinfo`
--

CREATE TABLE `houseownerinfo` (
  `fname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fathersName` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nid` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reportNo` int(10) NOT NULL,
  `status` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `houseownerinfo`
--

INSERT INTO `houseownerinfo` (`fname`, `lname`, `username`, `password`, `email`, `phone`, `type`, `fathersName`, `nid`, `reportNo`, `status`) VALUES
('dfdf', 'df', 'fdf', 'dff', 'df', 'df', 'available', 'sa', 'sa', 0, 'unblock'),
('as', 'sa', 'sa', 'sa', 'sa', 'sa', 'pending', 'sa', 'sa', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `managerinfo`
--

CREATE TABLE `managerinfo` (
  `fname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` int(20) NOT NULL,
  `division` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `area` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fathersName` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nid` int(20) NOT NULL,
  `status` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `managerinfo`
--

INSERT INTO `managerinfo` (`fname`, `lname`, `username`, `password`, `email`, `phone`, `division`, `area`, `fathersName`, `nid`, `status`) VALUES
('Ashiqul Hoque', 'chowdhury', 'as', 'new', 'ashiqulhoque45@gmail.com', 1670464084, NULL, NULL, 'something', 16704, 'block'),
('Ashiqul Hoque', 'chowdhury', 'ashiq4321', 'ashiq4321', 'ashiqulhoque45@gmail.com', 1823828500, 'Dhaka', 'bashundhara', 'shafiqul hoque chowdhury', 1670464084, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admininfo`
--
ALTER TABLE `admininfo`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `customerinfo`
--
ALTER TABLE `customerinfo`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `nid` (`nid`);

--
-- Indexes for table `houseinfo`
--
ALTER TABLE `houseinfo`
  ADD PRIMARY KEY (`houseid`);

--
-- Indexes for table `houseownerinfo`
--
ALTER TABLE `houseownerinfo`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `managerinfo`
--
ALTER TABLE `managerinfo`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `nid` (`nid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
