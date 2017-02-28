<?php
$style='style="color:#ae1718"';
$style1='';
$style2='';
$style3='';
$url = $_SERVER['REQUEST_URI'];
if(strpos($url,'Home')){
    $style1=$style; 
}else if(strpos($url,'Detail')){
    $style2=$style;
}else{
    $style3=$style;
}


    echo '<p class="logo">
            <a href="/"><img src="img/icon.png" /></a>
            <span>CHINESE ZODIAC</span>
        </p>
        <nav class="nav">
            <ul class="nav-main">
                <li><a '.$style1.' href="ChineseZodiacHome.php">HOME</a></li>
                <li><a '.$style2.' href="Detail.php">DETAIL</a></li>
                <li><a '.$style3.' href="Settings.php">SETTINGS</a></li>
            </ul>
        </nav>';
?>