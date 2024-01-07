-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 08, 2023 at 03:24 PM
-- Server version: 8.0.34
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `postapp_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `psx_languages`
--

CREATE TABLE `psx_languages` (
  `id` bigint UNSIGNED NOT NULL,
  `symbol` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `added_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `added_user_id` bigint UNSIGNED NOT NULL,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_user_id` bigint UNSIGNED DEFAULT NULL,
  `updated_flag` smallint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `psx_languages`
--

INSERT INTO `psx_languages` (`id`, `symbol`, `name`, `status`, `added_date`, `added_user_id`, `updated_date`, `updated_user_id`, `updated_flag`) VALUES
(1, 'en', 'English', 0, '2022-12-26 16:20:47', 1, '2023-08-07 13:25:55', 1, NULL),
(2, 'ar', 'Arabic', 1, '2022-12-26 05:54:29', 1, '2023-08-07 11:25:55', 1, NULL),
(3, 'fr', 'French', 0, '2022-12-26 16:20:47', 1, '2022-12-26 13:54:29', 1, NULL),
(4, 'es', 'Spanish', 0, '2022-12-04 18:45:04', 1, NULL, NULL, NULL),
(5, 'pt', 'Portuguese', 0, '2022-12-04 18:45:04', 1, NULL, NULL, NULL),
(6, 'hi', 'Hindi', 0, '2022-12-04 18:45:04', 1, NULL, NULL, NULL),
(7, 'id', 'Indonesian', 0, '2022-12-04 18:45:04', 1, NULL, NULL, NULL),
(8, 'ja', 'Japanese', 0, '2022-12-04 18:45:04', 1, NULL, NULL, NULL),
(9, 'ms', 'Malay', 0, '2022-12-04 18:45:04', 1, NULL, NULL, NULL),
(10, 'ru', 'Russian', 0, '2022-12-04 18:45:04', 1, NULL, NULL, NULL),
(11, 'tr', 'Turkish', 0, '2022-12-04 18:45:04', 1, NULL, NULL, NULL),
(12, 'de', 'German', 0, '2022-12-06 04:52:50', 1, '2022-12-06 12:52:46', 1, NULL),
(13, 'it', 'Italian', 0, '2022-12-04 18:45:05', 1, NULL, NULL, NULL),
(14, 'ko', 'Korean', 0, '2022-12-15 01:31:14', 1, '2022-12-15 09:30:32', 1, NULL),
(15, 'th', 'Thai', 0, '2022-12-04 18:45:05', 1, NULL, NULL, NULL),
(16, 'zh', 'Chinese', 0, '2022-12-26 05:54:26', 1, '2022-12-26 13:51:00', 1, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `psx_languages`
--
ALTER TABLE `psx_languages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `psx_languages`
--
ALTER TABLE `psx_languages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
