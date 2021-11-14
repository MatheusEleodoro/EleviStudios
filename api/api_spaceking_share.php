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
    <meta property='og:url' content=''/>
    <meta property='og:type' content=''/>
    <meta property='og:title'content='$title'/>
    <meta property='og:description' content='$description' />
    <meta property='og:image' content='../img/shares/space-king.jpg'/>
    <meta property='fb:app_id' content='$id'/>
    <link href='/img/favicon.png' rel='icon'>
    <link href='/img/apple-touch-icon.png' rel='apple-touch-icon'>

    <script>
    function choosePlataform() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        getTextData('/textos/links.txt', (data) => {
            const defaultLink = 'https://elevistudios.com/';
            const appStore = data.toString().match('<appstore>(.*)<appstore>')[1];
            const playStore = data.toString().match('<playstore>(.*)<playstore>')[1];

            if (/android/i.test(userAgent)) {
                window.open(playStore, '_self')
                return;
            }

            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                window.open(appStore, '_self')
                return;
            }
            window.open(defaultLink, '_self')

        });
    }
    function getTextData(url, callback) {
        fetch(url)
            .then((response) => response.text())
            .then((result) => callback(result));
    }
    </script>

    <body onload='choosePlataform()'>
    </body>
    </html>" ;
}else{
    $status = "REQUEST ERROR";
    echo "<p style='color:#ff0004;'> $status </p>";
}

?>