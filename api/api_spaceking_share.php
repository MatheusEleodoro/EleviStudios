<?php 
$id = intval($_GET['id']);		// integer value
$name = strval($_GET['name']);
$score = strval($_GET['score']);

    echo "
    <html>
    <meta charset="utf-8">
    <title>Elevi Studios</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta property="og:url" content="http://www.elevistudios.com.br"/>
    <meta property="og:type" content=""/>
    <meta property="og:title"content="Space King (BETA)"/>
    <meta property="og:image" content="img/intro-carousel_games/1.png"/>
    <meta property="fb:app_id" content="471322710885547"/>
    <link href="img/favicon.png" rel="icon">
    <link href="img/apple-touch-icon.png" rel="apple-touch-icon">
    <body>
    <h1> {$name} </h1> 
    </body>
    </html>" ;
?>