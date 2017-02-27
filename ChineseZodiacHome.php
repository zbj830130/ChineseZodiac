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
    <link rel="stylesheet" href="CSS/home.css" type="text/css" />
</head>

<body>
     <?php
    echo "123";
?>
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
        <div class="bigIcon_div">
            <img src="img/bigIcon.png" class="zodiac_cycle" />
        </div>
        <div class="home_artical">
            <p>The Chinese zodiac or shengxiao (/shnng-sshyaoww/ ‘born resembling’) is a classification scheme that assigns an animal and its reputed attributes to each year in a repeating 12-year cycle. The 12-year cycle is an approximation to the 11.86-year orbital period of Jupiter, the largest planet of the solar system.</p>
            <p>It and its variations remain popular in several East Asian countries including China, Vietnam, Burma, Korea, Japan, Mongolia, Nepal, Bhutan, Sri Lanka, Cambodia, Laos and Thailand as well as the Buddhist calendar.</p>
            <p>The 12 zodiac animals are, in order: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, and Pig.</p>
        </div>
        <div class="home_lunar_calendar">
            <label>Data:</label>
            <select id="select_year"></select>
            <select id="select_month"></select>
            <select id="select_day"></select>

            <div class="zodiac_div">
                <a href="javascript:void(0)">
                    <img src="img/zodiac-calculator-search-button.png" id="lunar_submit" class="zodiac_caculat_img" />
                </a>
            </div>
            <label id="result_label"></label>
        </div>
    </contain>
    <footer class="clearfix">
        <p>©CopyRight Bojin Zhang 2017</p>
    </footer>
    <script type="text/javascript" src="JS/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="JS/home.js"></script>
    <script type="text/javascript" src="JS/CalConv.js"></script>
</body>

</html>