<?php
    include("../CommonPage/Config.php");    
    include("../DAO/ZodiacDAO.php");

    if($_GET['opType']==1){
        $dao = new ZodiacDAO($serverName,$userName,$password,$databaseName);
        echo json_encode($dao->queryZodiacInfo());
    }

    if($_GET['opType']==2){
        $val = !empty($_POST['data']) ? $_POST['data'] : null; 
        $zodiacSorting = json_decode($val); //sorting array
        
        for($i=0;$i<12;$i++){
            
        }
    }
?>