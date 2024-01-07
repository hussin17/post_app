-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 08, 2023 at 03:26 PM
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
-- Table structure for table `psx_mobile_languages`
--

CREATE TABLE `psx_mobile_languages` (
  `id` bigint UNSIGNED NOT NULL,
  `symbol` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `language_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  `enable` tinyint NOT NULL DEFAULT '0',
  `added_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `added_user_id` bigint UNSIGNED NOT NULL,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_user_id` bigint UNSIGNED DEFAULT NULL,
  `updated_flag` smallint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `psx_mobile_languages`
--

INSERT INTO `psx_mobile_languages` (`id`, `symbol`, `language_code`, `country_code`, `name`, `code`, `status`, `enable`, `added_date`, `added_user_id`, `updated_date`, `updated_user_id`, `updated_flag`) VALUES
(1, 'en', 'en', 'US', 'English', '1691487700300', 0, 1, '2022-12-15 17:06:50', 1, '2023-08-08 11:20:55', 1, NULL),
(2, 'ar', 'ar', 'DZ', 'Arabic', '1691487726558', 1, 1, '2022-12-15 17:06:50', 1, '2023-08-08 09:20:55', 1, NULL),
(3, 'es', 'es', 'ES', 'Spanish', '1688465095803', 0, 0, '2022-12-06 05:09:47', 1, '2023-08-08 07:40:46', 1, NULL),
(4, 'fr', 'fr', 'FR', 'French', '1688464957212', 0, 0, '2022-12-15 17:06:50', 1, '2023-08-08 07:40:38', 1, NULL),
(8, 'id', 'id', 'ID', 'Idonesian', '1688465150161', 0, 0, '2022-12-15 17:06:50', 1, '2023-07-04 17:05:50', NULL, NULL),
(12, 'pt', 'pt', 'PT', 'Portuguese', '1688465075532', 0, 0, '2022-12-26 04:55:19', 1, '2023-08-08 07:40:47', 1, NULL),
(13, 'hi', 'hi', 'IN', 'India (Hindi)', '1688464976012', 0, 0, '2022-12-26 05:28:43', 1, '2023-08-08 07:41:00', 1, NULL),
(14, 'ja', 'ja', 'JP', 'Japanese', '1688465010071', 0, 0, '2022-12-26 05:57:42', 1, '2023-08-08 07:40:58', 1, NULL),
(15, 'ms', 'ms', 'MY', 'Malay', '1688465050511', 0, 0, '2022-12-26 05:57:32', 1, '2023-08-08 07:40:52', 1, NULL),
(16, 'ru', 'ru', 'RU', 'Russian', '1688465187469', 0, 0, '2022-12-26 12:51:13', 1, '2023-07-04 17:06:27', NULL, NULL),
(17, 'tr', 'tr', 'TR', 'Turkish', '1688465208722', 0, 0, '2022-12-26 12:51:47', 1, '2023-07-04 17:06:48', NULL, NULL),
(18, 'de', 'de', 'DE', 'German', '1688465134920', 0, 0, '2022-12-26 12:52:15', 1, '2023-07-04 17:05:34', NULL, NULL),
(19, 'it', 'it', 'IT', 'Italian', '1688465168799', 0, 0, '2022-12-26 12:52:52', 1, '2023-07-04 17:06:08', NULL, NULL),
(20, 'ko', 'ko', 'KR', 'Korean', '1688465032109', 0, 0, '2022-12-26 05:57:45', 1, '2023-08-08 07:40:54', 1, NULL),
(21, 'th', 'th', 'TH', 'Thai', '1688465117657', 0, 0, '2022-12-26 05:57:46', 1, '2023-08-08 07:40:43', 1, NULL),
(22, 'zh', 'zh', 'CN', 'Chinese', '1688464933775', 0, 0, '2022-12-26 05:14:01', 1, '2023-08-08 07:40:35', 1, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `psx_mobile_languages`
--
ALTER TABLE `psx_mobile_languages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `psx_mobile_languages`
--
ALTER TABLE `psx_mobile_languages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
