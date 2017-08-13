-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 13 Agu 2017 pada 09.44
-- Versi Server: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
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
(1, 'ijdasoijds09d098', '2017-08-13 00:20:16', '2017-08-13 00:20:16');

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
(1, 260, 1, '2017-08-13 00:30:45', '2017-08-13 00:30:45'),
(2, 260, 2, '2017-08-13 00:31:58', '2017-08-13 00:31:58');

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
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2017_08_07_152539_create_endless_runnings_table', 1),
(3, '2017_08_07_152813_create_tetris_table', 1),
(4, '2017_08_07_163517_create_api_tokens_table', 1);

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
(1, 50, 1, '2017-08-13 00:43:47', '2017-08-13 00:43:47'),
(2, 70, 1, '2017-08-13 00:43:57', '2017-08-13 00:43:57'),
(3, 80, 2, '2017-08-13 00:44:09', '2017-08-13 00:44:09'),
(4, 100, 2, '2017-08-13 00:44:18', '2017-08-13 00:44:18');

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
(1, 'Revando', 'revze', 'revando@outlook.com', '$2y$10$1f.gJdjZq3wjPVXS7T6/KOI19iQgcEKnnueTDliQzCGvep/mChYLG', '1999-05-19', '085816865807', 'revze.png', 'Dt3smO1c6cKeeniU40t415GnRVIuAi5ePjYQvDQQDB2iNfDPeymcnMbI0K56', '2017-08-13 00:20:16', '2017-08-13 00:20:16'),
(2, 'Friezky', 'friezky', 'friezky@gmail.com', '$2y$10$nxNDXhBxs6ftF8FsARe9SePggJHHDTXTj4oWevwu7J2xmG1olRCaC', '2017-08-24', '12121213', '1502609479.png', 'zHgTSQIqfcOkdge4OJN4S1qH735Xm8OU9WV37fh7KVXvdZkqXWdFalIIvIHS', '2017-08-13 00:31:19', '2017-08-13 00:31:19');

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tetris`
--
ALTER TABLE `tetris`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
