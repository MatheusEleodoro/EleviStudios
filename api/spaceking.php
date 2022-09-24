<?php 
$type = strval($_GET['type']);
$id = intval($_GET['id']);
$title = strval($_GET['title']);  
$description = strval($_GET['description']);
$BASE_URL = sprintf("%s://%s",isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',$_SERVER['SERVER_NAME']);

switch($type){
    case 'download':
        $iPod    = stripos($_SERVER['HTTP_USER_AGENT'],"iPod");
        $iPhone  = stripos($_SERVER['HTTP_USER_AGENT'],"iPhone");
        $iPad    = stripos($_SERVER['HTTP_USER_AGENT'],"iPad");
        $Android = stripos($_SERVER['HTTP_USER_AGENT'],"Android");
        
        if ( $Android )
            header("Location: https://play.google.com/store/apps/details?id=com.EleviStudios.SpaceKing");
        else if ( $iPod || $iPhone || $iPad )
            header("Location: https://apps.apple.com/us/app/space-king-first-adventure/id1609779654");
        else 
            header('Location: '.$BASE_URL);
  
    break;

    case 'share':
    if(empty($id) || empty($title) || empty($description)){
        header('Location: '.$BASE_URL);
        return;
    }
    echo 
    "   
    <html>
        <meta charset='utf-8'>
        <title>Space King</title>
        <meta content='width=device-width, initial-scale=1.0' name='viewport'>
        <meta content='' name='keywords'>
        <meta property='og:url' content='$BASE_URL'/>
        <meta property='og:type' content='article'/>
        <meta property='og:title'content='$title'/>
        <meta property='og:description' content='$description' />
        <meta property='og:image' content='../img/shares/share-img.jpg'/>
        <meta property='fb:app_id' content='$id'/>
        <link href='/img/favicon.png' rel='icon'>
        <link href='/img/apple-touch-icon.png' rel='apple-touch-icon'>
    </html>
    ";
    break;
    
    case null:
    default: 
        header('Location: '.$BASE_URL);
    break;
}

?>