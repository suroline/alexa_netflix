<?php 

class DBinfo {
    public $host = "localhost";
    public $user = "root";
    public $password = "your_password";
    public $dbname = "your_id";
}

// Function that send query from server and return the value 
function SendSqlQuery($sqlQuery, $workName, $mysqli)
{	
    if (!$resultQuery = $mysqli->query($sqlQuery))
    {
        echo "query error ".$workName." : ".mysqli_error($mysqli).$sqlQuery;
        exit();
    }
    return $resultQuery;
}

?>
