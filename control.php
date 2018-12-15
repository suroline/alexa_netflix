<?php
include "dbHelper.php";

// Access to database
$dbinfoOBJ = new DBinfo();
$mysqli = new mysqli($dbinfoOBJ->host, $dbinfoOBJ->user, $dbinfoOBJ->password, $dbinfoOBJ->dbname);
if (mysqli_connect_errno())
{
    echo 'Connect faild : '.mysqli_connect_error().'\n';
    $mysqli->close();
    exit();
}
$mysqli->set_charset("utf8");

// If confirm value come from Get is true, reset the DB
$dataSendSuccess = $_GET['confirm'];
if($dataSendSuccess == "true") {
    $updateUserdata = "UPDATE `realtimecheck` SET `status` = '0', `currentstatus` = '0' WHERE `id` = '1'";
    $resultUpdateRessurrection = SendSqlQuery($updateUserdata, "WriteSuccess", $mysqli);

} else {
    // Get status value from DB, send the data
    $sqlFindUserData = "SELECT status FROM `realtimecheck` WHERE `id` = '1'";
    $resultFindUserData = SendSqlQuery($sqlFindUserData, "checkStatus...", $mysqli);
    $datarow = mysqli_fetch_array($resultFindUserData);
    echo $datarow["status"];

    // Data have been sent to DB, reset the value
    $updateUserdata = "UPDATE `realtimecheck` SET `status` = '0' WHERE `id` = '1'";
    $resultUpdateRessurrection = SendSqlQuery($updateUserdata, "WriteSuccess", $mysqli);    
}
?>