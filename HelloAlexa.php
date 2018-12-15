<?php
// Include the library.
include "dbHelper.php";
require __DIR__ . '/alexa-endpoint/autoload.php';

/**
 * Import classes
 * Note, if there is already a class named 'User' in your scripts, use this:
 * use MayBeTall\Alexa\Endpoint\User as AlexaUser;
 * Then use 'AlexaUser' instead of 'User'.
 */
use MayBeTall\Alexa\Endpoint\Alexa;
use MayBeTall\Alexa\Endpoint\User;

// Sets everything up.
Alexa::init();

// User launched the skill.
Alexa::enters(function() {
	// Say something, wait for an answer, ask again if no reply is given.
    Alexa::say("Welcome, Voice-based Web site and Amazon Alexa Skills Prototype Design");
});

// Normalization the Intent and the Slot's value that are from Amazon Skill.
function stringCleaner($value){
	$removeString = preg_replace("/[ #\&\+\-%@=\/\\\:;,\.'\"\^`~\_|\!\?\*$#<>()\[\]\{\}]/i", "", $value);
	$returnString = strtolower($removeString);
	return $returnString;
}

// SQL update.
function updateDBValue($value) {
	// Access to DB.
	$dbinfoOBJ = new DBinfo();
	$mysqli = new mysqli($dbinfoOBJ->host, $dbinfoOBJ->user, $dbinfoOBJ->password, $dbinfoOBJ->dbname);
	if (mysqli_connect_errno($DBname)) {
			echo 'Connect faild : '.mysqli_connect_error().'\n';
			$mysqli->close();
			exit();
	}
	$mysqli->set_charset("utf8");

	// Save the status which will pull from web browser on DB. When web browser get the status value, web browser resets the status value to 0.
	$updateUserdata = "UPDATE `realtimecheck` SET `status` = '".$value."' WHERE `id` = '1'";
	$result = $mysqli->query($updateUserdata);

	// When move to another page, save the current status value at DB.
	$updateUserdata = "UPDATE `realtimecheck` SET `currentstatus` = '".$value."' WHERE `id` = '1'";
	$result = $mysqli->query($updateUserdata);
}

function getDBValue(){
	// Access to DB.
	$dbinfoOBJ = new DBinfo();
	$mysqli = new mysqli($dbinfoOBJ->host, $dbinfoOBJ->user, $dbinfoOBJ->password, $dbinfoOBJ->dbname);
	if (mysqli_connect_errno($DBname))
	{
			echo 'Connect faild : '.mysqli_connect_error().'\n';
			$mysqli->close();
			exit();
	}
	$mysqli->set_charset("utf8");

  	// Check current status value.
  	$sqlFindUserData = "SELECT currentstatus FROM `realtimecheck` WHERE `id` = '1'";
	$resultFindUserData = SendSqlQuery($sqlFindUserData, "check currentstatus...", $mysqli);
	$datarow = mysqli_fetch_array($resultFindUserData);
	return $datarow["currentstatus"];
}

// When responsed Intent 'movieBook' from Alexa Skill Server
User::triggered('movieBook', function() {
	$getDBvalue = getDBValue();
	if ($getDBvalue =="selectMovieTime") { 
		updateDBValue("goBackToList");
		Alexa::ask("Regal the landing stadium has the earliest showtime. Where would you like to book?");
	} else {
		updateDBValue("openMovieContent");
		Alexa::ask("You want to book Ant-man and the Wasp in Seattle. Shall I continue?");
	}
});

// When responsed Intent 'movieTicketContinue' from Alexa Skill Server
User::triggered('movieTicketContinue', function() {
	$getDBvalue = getDBValue();
	if ($getDBvalue == "openMovieContent") {
		updateDBValue("ticketingStart");
		Alexa::ask("When, where, with how many people are you planning to watch the movie?");
	}
	if ($getDBvalue == "selectRecommandedTime") {
		updateDBValue("decideToContinue");
		Alexa::ask("With Amazon pay, 10% discount price would be $27.72. How would you like to pay?");
	}
});

// When responsed Intent 'movieTicketingInfo' from Alexa Skill Server
User::triggered('movieTicketingInfo', function() {
	$getDBvalue = getDBValue();
	if ($getDBvalue == "ticketingStart") {
		updateDBValue("selectPersonDate");
		Alexa::ask("A M C PACIFIC PLACE at 6:15 pm, E row middle seats are left. Shall I continue?");
	}
});

// When responsed Intent 'movieTicketingSelect' from Alexa Skill Server
User::triggered('movieTicketingSelect', function() {
	$getDBvalue = getDBValue();
	if ($getDBvalue == "selectPersonDate") {
		updateDBValue("selectMovieTime");
		Alexa::ask("All the middle seats are already taken. I recommend I 3 and I 4. Would you like to book here?");
	}
	if ($getDBvalue == "goBackToList") {
		updateDBValue("selectRecommandedTime");
		Alexa::ask("REGAL THE LANDING STADIUM Aug 9 at 6pm for 2 adults F 11 and F 12. Ready to book?");
	}
});

// When responsed Intent 'selectPaymentMethod' from Alexa Skill Server
User::triggered('selectPaymentMethod', function() {
	$getDBvalue = getDBValue();	
	if ($getDBvalue == "decideToContinue") {
		updateDBValue("selectPayment");
		Alexa::ask("Would you like to confirm this reservation by paying now?");
	}
	if ($getDBvalue == "selectPayment") {
		updateDBValue("confirmTicketing");
		Alexa::ask("All right, here is your confirmed reservation. Do you need anything else?");
	}
});

// When responsed Intent 'ticketingClosing' from Alexa Skill Server
User::triggered('ticketingClosing', function() {
	$getDBvalue = getDBValue();
	if ($getDBvalue == "confirmTicketing") {
		updateDBValue("closingTicketing");
		Alexa::say("OK, ask me anytime when you need me. Bye!");
	}
});

// User exited the skill.
Alexa::exits(function() {
	/**
	 * Alexa will not say anything you send in reply, but it is important
	 * to have this here because she will give an error message if we
	 * don't acknowledge the skill's exit.
	 */
});
?>
