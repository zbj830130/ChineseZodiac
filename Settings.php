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
    <link rel="stylesheet" href="CSS/settings.css" type="text/css" />
    <link rel="stylesheet" href="CSS/jquery-ui.min.css" type="text/css" />
</head>

<body>
    <header>
        <p class="logo">
            <a href="/"><img src="img/icon.png" /></a>
            <span>CHINESE ZODIAC</span>
        </p>
        <nav class="nav">
            <ul class="nav-main">
                <li><a href="ChineseZodiacHome.html">HOME</a></li>
                <li><a href="Detail.html">DETAIL</a></li>
                <li><a href="Settings.html">SETTINGS</a></li>
            </ul>
        </nav>
    </header>
    <contain class="contain">
        <div id="tabs">
            <ul>
                <li><a href="#tab-1">Zodiac Order Setting</a></li>
                <li><a href="#tab-2">Zodiac Colours Setting</a></li>
            </ul>
            <div id="tab-1" class="zodiacList">
            </div>

            <div id="tab-2" class="zodiacColour">
                <div class="colorSelecter">
                    <input type="hidden" id="zodiacName">
                    <div id="red"></div>
                    <div id="green"></div>
                    <div id="blue"></div>
                    <div id="swatch" class="ui-widget-content ui-corner-all"></div>
                    <input type="button" value="Submit" id="submitColor">
                </div>
                <div class="nameColourList">
                </div>
            </div>
        </div>
    </contain>


    <footer>
        <p>©CopyRight Bojin Zhang 2017</p>
    </footer>
    <script type="text/javascript" src="JS/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="JS/jquery-ui.min.js"></script>
    <script type="text/javascript" src="JS/settings.js"></script>
</body>

</html>