<?php
$style='style="color:#ae1718"';
$style1='';
$style2='';
$style3='';
$url = $_SERVER['REQUEST_URI'];
if(strpos($url,'Home')){
    $style1=$style.' href="javascript:void(0)"'; 
}else{
    $style1=' href="ChineseZodiacHome.php"'; 
}

if(strpos($url,'Detail')){
    $style2=$style.' href="javascript:void(0)"'; 
}else{
    $style2=' href="Detail.php"';
}

if(strpos($url,'Settings')){
    $style3=$style.' href="javascript:void(0)"'; 
}else{
    $style3=' href="Settings.php"';
}


    echo '<p class="logo">
            <a href="/"><img src="img/icon.png" /></a>
            <span>CHINESE ZODIAC</span>
        </p>
        <nav class="nav">
            <ul class="nav-main">
                <li><a '.$style1.'">HOME</a></li>
                <li><a '.$style2.'">DETAIL</a></li>
                <li><a '.$style3.'">SETTINGS</a></li>
            </ul>
        </nav>';
?>