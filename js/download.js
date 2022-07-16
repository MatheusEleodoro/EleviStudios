window.onload = (event) => {
    choosePlataform();
};

const choosePlataform = () => {
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


const getTextData = (url, callback)=>{
    fetch(url)
        .then((response) => response.text())
        .then((result) => callback(result));
}