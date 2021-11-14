<?php 
$id = intval($_GET['id']);		// integer value
$title = strval($_GET['title']);
$description = strval($_GET['desc']);
$status = "";


if($id != 0 and $id > 0){
    $status = "REQUEST SUCCESSFULY";
    echo "
    <html>
    <meta charset='utf-8'>
    <title>Space King</title>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'>
    <meta content='' name='keywords'>
    <meta property='og:url' content='http://www.elevistudios.com.br/pages/spaceking.html'/>
    <meta property='og:type' content=''/>
    <meta property='og:title'content='$title'/>
    <meta property='og:description' content='$description' />
    <meta property='og:image' content='../img/shares/space-king.jpg'/>
    <meta property='fb:app_id' content='$id'/>
    <link href='/img/favicon.png' rel='icon'>
    <link href='/img/apple-touch-icon.png' rel='apple-touch-icon'>
    <body>
    <p style='color:#18d26e;'> $status </p> 
    </body>
    </html>" ;
    //open_window('/pages/spaceking.html');
}else{
    $status = "REQUEST ERROR";
    echo "<p style='color:#ff0004;'> $status </p>";
}

function open_window($url){
    header("Location: $url");
}
?>