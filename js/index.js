$(function(){
    // オーバーレイボタン
    $('.overlayMenuBtn').on('click', function(){
        var $overlay = $('.overlayMenu');
        var openClass = 'open';
        if( !$overlay.hasClass(openClass) ){
            $('.overlayMenuBtn span:nth-child(1)').css({'transform':'rotate(-45deg)', 'top':'10px'});
            $('.overlayMenuBtn span:nth-child(2)').css({'opacity':'0'});
            $('.overlayMenuBtn span:nth-child(3)').css({'transform':'rotate(45deg)', 'top':'8px', 'border': '1px solid #C3A572'});
            $overlay.addClass(openClass);
            $('body').css( 'overflow', 'hidden');
            $overlay.fadeIn('slow');
        } else {
            $('.overlayMenuBtn span:nth-child(1)').css({'transform':'rotate(0)', 'top':'0px'});
            $('.overlayMenuBtn span:nth-child(2)').css({'opacity':'1'});
            $('.overlayMenuBtn span:nth-child(3)').css({'transform':'rotate(0)', 'top':'20px', 'border': '1px solid #999'});
            $overlay.removeClass(openClass);
            $('body').css( 'overflow', 'auto');
            $overlay.fadeOut('slow');
        }
    });

    // スワイパー
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: true,
        slidesPerView: 2,
        centeredSlides : true,
        spaceBetween: 25,
        breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
            },
        },
    });

});


