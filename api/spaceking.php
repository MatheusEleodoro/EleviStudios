<?php 
$type = strval($_GET['type']);
$id = intval($_GET['id']);
$title = strval($_GET['title']);
$description = strval($_GET['desc']);

switch(type){
    
    $BASE_URL = "%s://%s",isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',$_SERVER['SERVER_NAME'];

    case 'download':
    preg_match('/iPhone|Android|iPad|iPod|webOS/', $_SERVER['HTTP_USER_AGENT'], $matches);
    $os = current($matches);

        switch($os){
            case 'iPhone':
            case 'iPad':
            case 'iPod':
                header("Location: https://apps.apple.com/us/app/space-king-first-adventure/id1609779654");
                break;
            case 'Android': 
                header("Location: https://play.google.com/store/apps/details?id=com.EleviStudios.SpaceKing");
                break;
    
            default: 
                header('Location: '.$BASE_URL);
            break;
        }
    break;

    case 'share':
    if($id == null || $title == null || $description == null){
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
        <meta property='og:url' content=''/>
        <meta property='og:type' content=''/>
        <meta property='og:title'content='$title'/>
        <meta property='og:description' content='$description' />
        <meta property='og:image' content='../img/shares/img-share-1.png'/>
        <meta property='fb:app_id' content='$id'/>
        <link href='/img/favicon.png' rel='icon'>
        <link href='/img/apple-touch-icon.png' rel='apple-touch-icon'>
    </html>
    "
    break;
    
    default: 
        header('Location: '.$BASE_URL);
    break;
}

?>