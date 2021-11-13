<?php 
$id = intval($_GET['id']);		// integer value
$title = strval($_GET['title']);
$description = strval($_GET['desc']);
    echo "
    <html>
    <meta charset='utf-8'>
    <title>Elevi Studios</title>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'>
    <meta content='' name='keywords'>
    <meta property='og:url' content='http://www.elevistudios.com.br'/>
    <meta property='og:type' content=''/>
    <meta property='og:title'content='$title'/>
    <meta property='og:description' content='How much does culture influence creative thinking?' />
    <meta property='og:image' content='/img/intro-carousel_games/1.png'/>
    <meta property='fb:app_id' content='471322710885547'/>
    <link href='/img/favicon.png' rel='icon'>
    <link href='/img/apple-touch-icon.png' rel='apple-touch-icon'>
    <body>
    <h1> '$id' </h1> 
    <h1> '$title' </h1>
    <h1> '$description' </h1>
    </body>
    </html>" ;
?>