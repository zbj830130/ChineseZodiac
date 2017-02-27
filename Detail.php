<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Chinese Zodiac</title>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="JS/html5shiv.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="CSS/main.css" type="text/css" />
    <link rel="stylesheet" href="CSS/detail.css" type="text/css" />
</head>

<body>
    <header>
        <p class="logo">
            <a href="/"><img src="img/icon.png" /></a>
            <span>CHINESE ZODIAC</span>
        </p>
        <nav class="nav">
            <?php include "CommonPage/Header.php"?>
        </nav>
    </header>
    <contain class="contain">
        <div id="wheelDiv" class="masonryItem"></div>
    </contain>


    <footer>
        <?php include 'CommonPage/Footer.php' ?>
    </footer>
    <script type="text/javascript" src="Js/raphael.min.js"></script>
    <script type="text/javascript" src="JS/raphael.icons.min.js"></script>
    <script type="text/javascript" src="JS/wheelnav.min.js"></script>
    <script type="text/javascript" src="JS/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="JS/detail.js"></script>
</body>

</html>