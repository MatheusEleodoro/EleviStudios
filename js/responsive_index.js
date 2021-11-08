 window.onload = function () {

   function funcaoAjax() {
     var tam_w = $(window).width();
     var tam_h = $(window).height();
     if (tam_h < 768) {
       var p_cent = '290%';
     } else {
        p_cent = '120%';
     }

     if (tam_w > tam_h) {

       $('.main').css('height', p_cent);
       $('.main').css('margin', 'auto');
     } else {

       $('.main').css('height', '');
       $('.main').css('margin', '');
     }

   }
   var intervalo = setInterval(funcaoAjax, 1000);
 }(jQuery);
