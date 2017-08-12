-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 12 Agu 2017 pada 18.15
-- Versi Server: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bnsc2017_revando`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `api_tokens`
--

CREATE TABLE `api_tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `api_tokens`
--

INSERT INTO `api_tokens` (`id`, `token`, `created_at`, `updated_at`) VALUES
(1, 'ijdasoijds09d098', '2017-08-11 20:43:22', '2017-08-11 20:43:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `endless_runnings`
--

CREATE TABLE `endless_runnings` (
  `id` int(10) UNSIGNED NOT NULL,
  `score` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `endless_runnings`
--

INSERT INTO `endless_runnings` (`id`, `score`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 30, 2, '2017-08-11 21:31:44', '2017-08-11 21:31:44'),
(2, 40, 2, '2017-08-11 21:31:52', '2017-08-11 21:31:52'),
(3, 50, 2, '2017-08-11 21:31:57', '2017-08-11 21:31:57'),
(4, 60, 1, '2017-08-11 21:32:17', '2017-08-11 21:32:17'),
(5, 60, 1, '2017-08-11 21:35:58', '2017-08-11 21:35:58'),
(6, 90, 4, '2017-08-12 07:11:37', '2017-08-12 07:11:37'),
(7, 180, 4, '2017-08-12 07:16:48', '2017-08-12 07:16:48'),
(8, 90, 4, '2017-08-12 07:17:02', '2017-08-12 07:17:02'),
(9, 180, 5, '2017-08-12 07:25:25', '2017-08-12 07:25:25'),
(10, 180, 5, '2017-08-12 07:25:55', '2017-08-12 07:25:55'),
(11, 90, 5, '2017-08-12 07:26:17', '2017-08-12 07:26:17'),
(12, 170, 5, '2017-08-12 07:27:40', '2017-08-12 07:27:40'),
(13, 180, 1, '2017-08-12 07:45:43', '2017-08-12 07:45:43'),
(14, 90, 1, '2017-08-12 07:47:45', '2017-08-12 07:47:45'),
(15, 250, 1, '2017-08-12 09:12:26', '2017-08-12 09:12:26'),
(16, 90, 7, '2017-08-12 09:14:25', '2017-08-12 09:14:25');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(9, '2014_10_12_000000_create_users_table', 1),
(10, '2017_08_07_152539_create_endless_runnings_table', 1),
(11, '2017_08_07_152813_create_tetris_table', 1),
(12, '2017_08_07_163517_create_api_tokens_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tetris`
--

CREATE TABLE `tetris` (
  `id` int(10) UNSIGNED NOT NULL,
  `score` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `tetris`
--

INSERT INTO `tetris` (`id`, `score`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 60, 1, '2017-08-11 21:39:17', '2017-08-11 21:39:17'),
(2, 70, 1, '2017-08-11 21:39:34', '2017-08-11 21:39:34'),
(3, 90, 1, '2017-08-11 21:39:41', '2017-08-11 21:39:41'),
(4, 100, 1, '2017-08-11 21:39:46', '2017-08-11 21:39:46'),
(5, 100, 1, '2017-08-11 21:43:29', '2017-08-11 21:43:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_birth` date NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_picture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `date_birth`, `phone_number`, `profile_picture`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Revando', 'revze', 'revando@outlook.com', '$2y$10$DwXWTowSWgNQMCTOKpmWM.Wx06LQIcpZl36gomn7Z2VdTpSvQ2xX6', '1999-05-19', '085816865807', 'revze.png', 'jaQcXgqbqhOI9SPCRkS6j4kQUQzYsaP9Hu77Ew8pX30wm1CFnsAItG6C9Yxf', '2017-08-11 20:43:22', '2017-08-11 20:43:22'),
(2, 'Revando 2', 'revando', 'dev.revze@gmail.com', '$2y$10$VeF6/8iBKhDhw5RuM.VgSOb00zH4Fmnc9ebHLuoFTGvPoQmo/1cvy', '1999-09-19', '0999999', '1502509911.png', 'l4mLv4DArccyKQz81gHNkadv6SdSxPKErGUcrljF7YZi3Qm6ZSiucT4Iqk0K', '2017-08-11 20:46:28', '2017-08-11 20:51:51'),
(3, 'asdasd', 'sadasd', 'dedyqurnia722@gmail.comasd', '$2y$10$ZOtFZ2aWEJCjNckymSQFqO.1kHXGBWUehQCfbPV/Xoqn2n0UuXH6S', '2017-08-16', '213213', '1502544920.png', NULL, '2017-08-12 06:35:20', '2017-08-12 06:35:20'),
(4, 'Abri Asyikin', 'abri', 'abri@gmail.com', '$2y$10$2pU7PON03RZxxJlJ2NWuneg.jErOiDm3qcZBkQeeSvbtwaU7B6xr2', '2017-08-23', '9999', '1502545399.jpg', 'gtBGGfndyoyW5Z0T0Nesy2NWvRDjF5WCciDpufDRlDJQrIi8ugJ66zHxqZzr', '2017-08-12 06:43:18', '2017-08-12 06:43:18'),
(5, 'Erwin', 'erwin', 'erwin@gmail.com', '$2y$10$p/F.Co5ir.1jW397iAcM/ehaWh7GpdGOEcq5yX790a4VZEB4VnS.W', '2017-08-23', '999999', '1502547898.jpg', NULL, '2017-08-12 07:24:58', '2017-08-12 07:24:58'),
(6, 'Ismail', 'ismail', 'ismail@gmail.com', '$2y$10$X542FqwbY9uAAl8EdUZAoeviMNlx7jE6x.aKjNgrtTKDD/fn5exNK', '2017-08-15', '45454545', '1502549848.jpg', NULL, '2017-08-12 07:57:28', '2017-08-12 07:57:28'),
(7, 'Edwin', 'edwin', 'edwin@gmail.com', '$2y$10$M.WA7vAj4hH.dOwpymOE/.QDVK7.ktHKBiaR75qEUZiITpE1Lqpii', '2017-08-24', '45435345', '1502554445.png', NULL, '2017-08-12 09:14:05', '2017-08-12 09:14:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api_tokens`
--
ALTER TABLE `api_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `endless_runnings`
--
ALTER TABLE `endless_runnings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `endless_runnings_user_id_foreign` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tetris`
--
ALTER TABLE `tetris`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tetris_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `api_tokens`
--
ALTER TABLE `api_tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `endless_runnings`
--
ALTER TABLE `endless_runnings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `tetris`
--
ALTER TABLE `tetris`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `endless_runnings`
--
ALTER TABLE `endless_runnings`
  ADD CONSTRAINT `endless_runnings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tetris`
--
ALTER TABLE `tetris`
  ADD CONSTRAINT `tetris_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
