-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `content_type`
--

DROP TABLE IF EXISTS `content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `content_type` (
  `id` int NOT NULL,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content_type`
--

LOCK TABLES `content_type` WRITE;
/*!40000 ALTER TABLE `content_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `id` int NOT NULL,
  `title` varchar(120) DEFAULT NULL,
  `brief` varchar(120) DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_chapter`
--

DROP TABLE IF EXISTS `course_chapter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_chapter` (
  `id` int NOT NULL,
  `course_id` int NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `brief` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id`,`course_id`),
  KEY `fk_course_chapter_course1_idx` (`course_id`),
  CONSTRAINT `fk_course_chapter_course1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_chapter`
--

LOCK TABLES `course_chapter` WRITE;
/*!40000 ALTER TABLE `course_chapter` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_chapter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_chapter_content`
--

DROP TABLE IF EXISTS `course_chapter_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_chapter_content` (
  `id` int NOT NULL,
  `course_chapter_id` int NOT NULL,
  `content_type_id` int NOT NULL,
  `time_required` int DEFAULT NULL,
  `is_open_for_free` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`,`course_chapter_id`,`content_type_id`),
  KEY `fk_course_chapter_content_course_chapter1_idx` (`course_chapter_id`),
  KEY `fk_course_chapter_content_content_type1_idx` (`content_type_id`),
  CONSTRAINT `fk_course_chapter_content_content_type1` FOREIGN KEY (`content_type_id`) REFERENCES `content_type` (`id`),
  CONSTRAINT `fk_course_chapter_content_course_chapter1` FOREIGN KEY (`course_chapter_id`) REFERENCES `course_chapter` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_chapter_content`
--

LOCK TABLES `course_chapter_content` WRITE;
/*!40000 ALTER TABLE `course_chapter_content` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_chapter_content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrollment`
--

DROP TABLE IF EXISTS `enrollment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enrollment` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `course_id` int NOT NULL,
  `date` date DEFAULT NULL,
  `is_paid_subscription` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`,`user_id`,`course_id`),
  KEY `fk_user_has_course_course1_idx` (`course_id`),
  KEY `fk_user_has_course_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_has_course_course1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`),
  CONSTRAINT `fk_user_has_course_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrollment`
--

LOCK TABLES `enrollment` WRITE;
/*!40000 ALTER TABLE `enrollment` DISABLE KEYS */;
/*!40000 ALTER TABLE `enrollment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `id` int NOT NULL,
  `enrollment_id` int NOT NULL,
  `rating_score` int DEFAULT NULL,
  `text` text,
  `submission_date` date DEFAULT NULL,
  PRIMARY KEY (`id`,`enrollment_id`),
  KEY `fk_feedback_enrollment1_idx` (`enrollment_id`),
  CONSTRAINT `fk_feedback_enrollment1` FOREIGN KEY (`enrollment_id`) REFERENCES `enrollment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learning_progress`
--

DROP TABLE IF EXISTS `learning_progress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `learning_progress` (
  `enrollment_id` int NOT NULL,
  `course_chapter_content_id` int NOT NULL,
  `status` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`enrollment_id`,`course_chapter_content_id`),
  KEY `fk_enrollment_has_course_chapter_content_course_chapter_con_idx` (`course_chapter_content_id`),
  KEY `fk_enrollment_has_course_chapter_content_enrollment1_idx` (`enrollment_id`),
  CONSTRAINT `fk_enrollment_has_course_chapter_content_course_chapter_conte1` FOREIGN KEY (`course_chapter_content_id`) REFERENCES `course_chapter_content` (`id`),
  CONSTRAINT `fk_enrollment_has_course_chapter_content_enrollment1` FOREIGN KEY (`enrollment_id`) REFERENCES `enrollment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learning_progress`
--

LOCK TABLES `learning_progress` WRITE;
/*!40000 ALTER TABLE `learning_progress` DISABLE KEYS */;
/*!40000 ALTER TABLE `learning_progress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL,
  `value` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL,
  `first_name` varchar(25) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(120) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` int NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `fk_user_has_role_role1_idx` (`role_id`),
  KEY `fk_user_has_role_user_idx` (`user_id`),
  CONSTRAINT `fk_user_has_role_role1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  CONSTRAINT `fk_user_has_role_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-04  8:48:51
