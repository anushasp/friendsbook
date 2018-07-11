-- phpMyAdmin SQL Dump
-- version 4.1.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 10, 2018 at 08:00 PM
-- Server version: 5.6.15
-- PHP Version: 5.5.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `saripellaa6306`
--

-- --------------------------------------------------------

--
-- Table structure for table `bankaccount`
--

CREATE TABLE IF NOT EXISTS `bankaccount` (
  `AccountNumber` varchar(20) NOT NULL,
  `SSN` varchar(20) NOT NULL,
  `Balance` double NOT NULL,
  `Statement` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bankaccount`
--

INSERT INTO `bankaccount` (`AccountNumber`, `SSN`, `Balance`, `Statement`) VALUES
('1000001', '834', 2000, 'Tue, 20 Feb 2018 20:32:23:Account opened with an initial balance $2000.00\n'),
('1000002', '123', 200, '20-03-2018 21:51:20:AccountOpened with an initialbalance $200.00\n');

-- --------------------------------------------------------

--
-- Table structure for table `bid`
--

CREATE TABLE IF NOT EXISTS `bid` (
  `buyerid` varchar(20) NOT NULL,
  `item` varchar(20) NOT NULL,
  `sellerid` varchar(20) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bid`
--

INSERT INTO `bid` (`buyerid`, `item`, `sellerid`, `price`) VALUES
('James', 'Table', 'Ram', 90),
('James', 'Table', 'Ram', 70),
('James', 'Table', 'Anu', 100),
('warren', 'TV', 'Anusha', 400),
('ss', 'chair', 'Prathyu', 60),
('rree', 'chair', 'Prathyu', 80),
('kio', 'TV', 'Anusha', 450),
('Travis', 'TV', 'Anusha', 550),
('pisi', 'pot', 'akhi', 40),
('lin', 'pot', 'akhi', 55),
('pisi', 'pot', 'akhi', 70),
('poha', 'poy', 'akhi', 40),
('lila', 'poy', 'akhi', 45),
('poha', 'poy', 'akhi', 55);

-- --------------------------------------------------------

--
-- Table structure for table `exam2listing`
--

CREATE TABLE IF NOT EXISTS `exam2listing` (
  `address` varchar(30) NOT NULL,
  `numbed` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `agentid` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `exam2listing`
--

INSERT INTO `exam2listing` (`address`, `numbed`, `price`, `status`, `agentid`) VALUES
('10 oakCt', 2, 20000, 'onsale', 'agent1'),
('100 bayou', 1, 130000, 'onsale', 'agent1'),
('120 Main', 3, 200000, 'on', 'agent1'),
('300 Main', 2, 300000, 'on', 'agent1');

-- --------------------------------------------------------

--
-- Table structure for table `exam2user`
--

CREATE TABLE IF NOT EXISTS `exam2user` (
  `userid` varchar(20) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `exam2user`
--

INSERT INTO `exam2user` (`userid`, `password`, `type`) VALUES
('agent1', 'agent1', 'agent'),
('agent2', 'agent2', 'agent'),
('buyer1', 'buyer1', 'buyer'),
('buyer2', 'buyer2', 'buyer');

-- --------------------------------------------------------

--
-- Table structure for table `favourites`
--

CREATE TABLE IF NOT EXISTS `favourites` (
  `id` varchar(20) DEFAULT NULL,
  `listing` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `favourites`
--

INSERT INTO `favourites` (`id`, `listing`) VALUES
('buyer1', '100 bayou'),
('buyer1', '120 Main');

-- --------------------------------------------------------

--
-- Table structure for table `friendbookaccount`
--

CREATE TABLE IF NOT EXISTS `friendbookaccount` (
  `name` varchar(20) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `userID` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `Bday` varchar(20) NOT NULL,
  `school` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `friendbookaccount`
--

INSERT INTO `friendbookaccount` (`name`, `gender`, `userID`, `password`, `Bday`, `school`) VALUES
('Anusha', 'Female', 'anusha', 'anusha', '12/14/1990', 'uhcl'),
('Bikalpa', 'Male', 'bikalp', 'bikalp', '11/09/1989', 'uhcl'),
('Rahul', 'Male', 'rahul', 'rahul', '06/20/1988', 'uhcl'),
('User1', 'Male', 'user1', 'user1', '05/23/1982', 'UT'),
('User2', 'Female', 'user2', 'user2', '03/07/1988', 'Texas A&M'),
('User3', 'Female', 'user3', 'user3', '01/08/1991', 'NIU'),
('eric o', 'Male', 'eric123', '12345', '02/23/1991', 'lake'),
('ram', 'Male', 'ram123', '123456', '02/02/1999', 'ny'),
('Rama Raju', 'Male', 'ramaraju', 'ramaraju', '06/24/1988', 'Bits'),
('Jagan Reddy', 'Male', 'jaganreddy', 'jaganreddy', '08/28/1987', 'Bits Pilani');

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE IF NOT EXISTS `friends` (
  `id1` varchar(20) NOT NULL,
  `id2` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`id1`, `id2`) VALUES
('anusha', 'rahul'),
('rahul', 'bikalp'),
('bikalp', 'anusha'),
('anusha', 'user1'),
('rahul', 'user1'),
('user1', 'bikalp'),
('user3', 'anusha'),
('user2', 'anusha'),
('jaganreddy', 'anusha'),
('ramaraju', 'rahul'),
('jaganreddy', 'rahul'),
('ramaraju', 'bikalp');

-- --------------------------------------------------------

--
-- Table structure for table `hashtags`
--

CREATE TABLE IF NOT EXISTS `hashtags` (
  `hash` text NOT NULL,
  `count` int(11) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `postid` text NOT NULL,
  `posts` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hashtags`
--

INSERT INTO `hashtags` (`hash`, `count`, `userid`, `postid`, `posts`) VALUES
('#exams', 2, 'bikalp', '2 , 2', '#exams#java#uhcl\n#exams#java#uhcl  ---- by bikalp  ---- bybikalp'),
('#java', 2, 'bikalp', '2 , 2', '#exams#java#uhcl\n#exams#java#uhcl  ---- by bikalp  ---- bybikalp'),
('#uhcl', 2, 'bikalp', '2 , 2', '#exams#java#uhcl\n#exams#java#uhcl  ---- by bikalp  ---- bybikalp'),
('#fun', 1, 'anusha', '4', '#fun#houston#cool  ---- by anusha'),
('#houston', 1, 'anusha', '4', '#fun#houston#cool  ---- by anusha'),
('#cool', 1, 'anusha', '4', '#fun#houston#cool  ---- by anusha'),
('undefined', 2, 'anusha', '0 , 0', 'ppppppp\nundefined  ---- byanusha'),
('#kamal', 1, 'anusha', '0', '#jimki#kamal  ---- by anusha'),
('#kamal', 1, 'anusha', '0', '#jimki#kamal  ---- by anusha'),
('#tim', 1, 'anusha', '0', '#rim#tim  ---- by anusha'),
('#tim', 1, 'anusha', '0', '#rim#tim  ---- by anusha'),
('#rM', 1, 'anusha', '17', '#pillow#rM  ---- by anusha'),
('#rM', 1, 'anusha', '17', '#pillow#rM  ---- by anusha'),
('#', 1, 'anusha', '18', '#RAMA#30#BDAY  ---- by anusha'),
('#', 1, 'anusha', '18', '#RAMA#30#BDAY  ---- by anusha'),
('#', 1, 'anusha', '18', '#RAMA#30#BDAY  ---- by anusha'),
('#lo', 1, 'anusha', '19', '#po#lo  ---- by anusha'),
('#lo', 1, 'anusha', '19', '#po#lo  ---- by anusha'),
('#te', 1, 'anusha', '20', '#re#te  ---- by anusha'),
('#rrr', 1, 'anusha', '21', '#lll#rrr  ---- by anusha');

-- --------------------------------------------------------

--
-- Table structure for table `holdings`
--

CREATE TABLE IF NOT EXISTS `holdings` (
  `id` varchar(20) NOT NULL,
  `symbol` varchar(20) NOT NULL,
  `shares` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `holdings`
--

INSERT INTO `holdings` (`id`, `symbol`, `shares`) VALUES
('user1', 'goog', 2),
('user1', 'FB', 4),
('user1', 'Amzn', 3),
('user1', 'ebay', 1);

-- --------------------------------------------------------

--
-- Table structure for table `jobapp`
--

CREATE TABLE IF NOT EXISTS `jobapp` (
  `userID` varchar(20) NOT NULL,
  `job` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobapp`
--

INSERT INTO `jobapp` (`userID`, `job`, `status`) VALUES
('user1', 'DB', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `joblisting`
--

CREATE TABLE IF NOT EXISTS `joblisting` (
  `jobTitle` varchar(20) NOT NULL,
  `desc` varchar(45) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`jobTitle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `joblisting`
--

INSERT INTO `joblisting` (`jobTitle`, `desc`, `status`) VALUES
('DB', 'database', 'active'),
('java', 'developer', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `listings`
--

CREATE TABLE IF NOT EXISTS `listings` (
  `item` varchar(20) NOT NULL,
  `currprice` double NOT NULL,
  `resprice` double NOT NULL,
  `sellerid` text NOT NULL,
  `bids` int(11) NOT NULL,
  `buyerid` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `listings`
--

INSERT INTO `listings` (`item`, `currprice`, `resprice`, `sellerid`, `bids`, `buyerid`, `status`) VALUES
('Table', 80, 120, 'Ram', 0, 'poha', 'sold'),
('TV', 550, 500, 'Anusha', 3, 'poha', 'sold'),
('Table', 90, 140, 'Anu', 0, 'poha', 'sold'),
('chair', 80, 70, 'Prathyu', 3, 'poha', 'sold'),
('pot', 70, 60, 'akhi', 3, 'poha', 'sold'),
('poy', 55, 50, 'akhi', 3, 'poha', 'sold');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `id1` varchar(20) NOT NULL,
  `id2` varchar(20) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id1`, `id2`, `message`) VALUES
('rahul', 'anusha', 'hi! how are you?---- byanusha\ngood---- by anusha\ngreat---- by anusha\nwow---- by anusha\ngreat---- by anusha\ngreat---- by anusha\nokay---- by anusha\nwhatsup---- by rahul\ngood---- by anusha\nttt---- by anusha\nlets get together next weekend---- by rahul'),
('bikalp', 'rahul', 'hey!whatsup?---- byrahul</br>nothing---- bybikalp</br>Hey how is it going?---- bybikalp'),
('anusha', 'bikalp', 'hi how are you---- bybikalp</br>good---- byanusha</br>preparing for exams?---- bybikalp</br>Ola---- bybikalp</br>Hey thanks---- bybikalp\nwelcome---- by anusha\nok---- by anusha'),
('anusha', 'user1', 'hi whats up?---- byuser1');

-- --------------------------------------------------------

--
-- Table structure for table `nextaccountnumber`
--

CREATE TABLE IF NOT EXISTS `nextaccountnumber` (
  `NextID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nextaccountnumber`
--

INSERT INTO `nextaccountnumber` (`NextID`) VALUES
(1000003);

-- --------------------------------------------------------

--
-- Table structure for table `notificationnumber`
--

CREATE TABLE IF NOT EXISTS `notificationnumber` (
  `nextnotid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notificationnumber`
--

INSERT INTO `notificationnumber` (`nextnotid`) VALUES
(26);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE IF NOT EXISTS `notifications` (
  `notid` int(11) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `content` text NOT NULL,
  `type` int(11) NOT NULL,
  `senderid` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`notid`, `userid`, `content`, `type`, `senderid`) VALUES
(26, 'bikalp', 'jaganreddy has send you a FriendRequest\n', 0, 'jaganreddy');

-- --------------------------------------------------------

--
-- Table structure for table `onlineaccount`
--

CREATE TABLE IF NOT EXISTS `onlineaccount` (
  `id` varchar(20) NOT NULL,
  `ssn` varchar(20) NOT NULL,
  `psw` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `onlineaccount`
--

INSERT INTO `onlineaccount` (`id`, `ssn`, `psw`) VALUES
('anusha', '834', 'anu'),
('1', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE IF NOT EXISTS `post` (
  `postid` int(11) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `post` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`postid`, `userid`, `post`) VALUES
(1, 'rahul', 'Summer trip to Florida!'),
(2, 'bikalp', '#exams#java#uhcl'),
(3, 'user1', 'Good luck with exams'),
(4, 'anusha', 'Houston!Here i come'),
(5, 'bikalp', 'Hello Class #Java'),
(7, 'anusha', 'hhhhhhhhh'),
(10, 'anusha', 'ppppppp'),
(13, 'anusha', 'heloanusha'),
(15, 'anusha', '#jimki#kamal'),
(16, 'anusha', '#rim#tim'),
(17, 'anusha', '#pillow#rM'),
(18, 'anusha', '#RAMA#30#BDAY'),
(19, 'anusha', '#po#lo'),
(20, 'anusha', '#re#te'),
(21, 'anusha', '#lll#rrr'),
(22, 'anusha', 'hello this is anusha'),
(23, 'rahul', 'Houston! Here i come'),
(24, 'anusha', 'Job hunt started!\nAny references?'),
(25, 'bikalp', 'Done with Masters :)'),
(26, 'user1', 'July4th fireworks'),
(27, 'user2', 'Stargazing night at Enchanted Rock'),
(28, 'rahul', 'Finally summer started'),
(29, 'anusha', 'Missing Home'),
(30, 'user3', 'Hello everyone'),
(31, 'anusha', 'hello');

-- --------------------------------------------------------

--
-- Table structure for table `postnumber`
--

CREATE TABLE IF NOT EXISTS `postnumber` (
  `postnum` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `postnumber`
--

INSERT INTO `postnumber` (`postnum`) VALUES
(31);

-- --------------------------------------------------------

--
-- Table structure for table `showlistings`
--

CREATE TABLE IF NOT EXISTS `showlistings` (
  `label` int(11) NOT NULL,
  `address` varchar(30) DEFAULT NULL,
  `numbeds` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `showlistings`
--

INSERT INTO `showlistings` (`label`, `address`, `numbeds`, `price`) VALUES
(1, '10 oakCt', 2, 20000),
(2, '100 bayou', 1, 13000),
(3, '120 Main', 3, 200000),
(4, '300 Main', 2, 300000);

-- --------------------------------------------------------

--
-- Table structure for table `shownotifications`
--

CREATE TABLE IF NOT EXISTS `shownotifications` (
  `id` int(11) NOT NULL,
  `notid` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `stocks`
--

CREATE TABLE IF NOT EXISTS `stocks` (
  `symbol` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stocks`
--

INSERT INTO `stocks` (`symbol`, `name`, `price`) VALUES
('goog', 'Google', 150),
('ebay', 'eBay', 201),
('FB', 'Facebook', 209),
('Amzn', 'Amazon', 600);

-- --------------------------------------------------------

--
-- Table structure for table `stockuseraccount`
--

CREATE TABLE IF NOT EXISTS `stockuseraccount` (
  `id` varchar(20) NOT NULL,
  `psw` varchar(20) NOT NULL,
  `bal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stockuseraccount`
--

INSERT INTO `stockuseraccount` (`id`, `psw`, `bal`) VALUES
('user1', 'user1', 6872),
('user2', 'user2', 10000);

-- --------------------------------------------------------

--
-- Table structure for table `update`
--

CREATE TABLE IF NOT EXISTS `update` (
  `updateid` int(11) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `type` int(11) NOT NULL,
  `postid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `updatecomment`
--

CREATE TABLE IF NOT EXISTS `updatecomment` (
  `id` int(11) NOT NULL,
  `updateid` int(11) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `content` text NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `updatecomment`
--

INSERT INTO `updatecomment` (`id`, `updateid`, `userid`, `content`, `comment`) VALUES
(1, 9, 'anusha', 'hello', ''),
(2, 8, 'user3', 'Hello everyone', '\nHi! How are you? ----Posted by anusha\nHola! ----Posted by rahul\n ----Posted by anusha\nwassup ----Posted by anusha'),
(3, 7, 'anusha', 'Missing Home', '\nBook your Tickets soon ----Posted by rahul\ncome home ----Posted by user1\ngreat ----Posted by anusha'),
(4, 6, 'rahul', 'Finally summer started', '\nYea its too hot ----Posted by user1'),
(5, 5, 'user2', 'Stargazing night at Enchanted Rock', '\nshare the pictures ----Posted by rahul');

-- --------------------------------------------------------

--
-- Table structure for table `updatenumber`
--

CREATE TABLE IF NOT EXISTS `updatenumber` (
  `updatenum` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `updatenumber`
--

INSERT INTO `updatenumber` (`updatenum`) VALUES
(9);

-- --------------------------------------------------------

--
-- Table structure for table `updates`
--

CREATE TABLE IF NOT EXISTS `updates` (
  `updateid` int(11) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `type` int(11) NOT NULL,
  `postid` int(11) NOT NULL,
  `updatecontent` text NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `updates`
--

INSERT INTO `updates` (`updateid`, `userid`, `type`, `postid`, `updatecontent`, `comment`) VALUES
(1, 'rahul', 2, 23, 'Houston! Here i come', '\nMeet you soon! ----Posted by anusha'),
(2, 'anusha', 2, 24, 'Job hunt started!\nAny references?', '\nAll the best! ----Posted by user1\nInbox me your resume ----Posted by user3'),
(3, 'bikalp', 2, 25, 'Done with Masters :)', '\ncongrats buddy ----Posted by user1\nohh great! Congratulatios:) ----Posted by anusha'),
(4, 'user1', 2, 26, 'July4th fireworks', '\nHaffun ----Posted by anusha\nHappy Independence Day ----Posted by rahul'),
(5, 'user2', 2, 27, 'Stargazing night at Enchanted Rock', '\nshare the pictures ----Posted by rahul'),
(6, 'rahul', 2, 28, 'Finally summer started', '\nYea its too hot ----Posted by user1'),
(7, 'anusha', 2, 29, 'Missing Home', '\nBook your Tickets soon ----Posted by rahul\ncome home ----Posted by user1\ngreat ----Posted by anusha'),
(8, 'user3', 2, 30, 'Hello everyone', '\nHi! How are you? ----Posted by anusha\nHola! ----Posted by rahul\n ----Posted by anusha\nwassup ----Posted by anusha'),
(9, 'anusha', 2, 31, 'hello', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
