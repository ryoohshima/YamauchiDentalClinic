$(function(){
    // smooth scroll
    $('#header_menu a[href^="#"], #page_top a[href^="#"], #spn_footer_menu a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    // swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        loop: true,
        autoplay: true,
        centeredSlides : true,
        breakpoints: {
           768: {
             slidesPerView: 2,
             spaceBetween: 30,
             autoHeight: true
           }
         }
    });

    // fixed botton fadein
    var fixedButton = $('#pc_footer_menu, #page_top, #spn_footer_menu');
    fixedButton.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            fixedButton.fadeIn();
        } else {
            fixedButton.fadeOut();
        }
    });

    // adjust spn footer menu
    $(window).on('load scroll resize', function(){
        const scrollTop = $(window).scrollTop();
        const scrollMax = $(document).height() - window.innerHeight;

        if(scrollTop >= scrollMax){
            $('#spn_footer_menu').css('bottom','2%');
            $('#pc_footer_menu').css('bottom','5%');
            $('#page_top').css('bottom','5%');
        }else{
            $('#spn_footer_menu').css('bottom','0');
            $('#pc_footer_menu').css('bottom','1%');
            $('#page_top').css('bottom','1%');
        }

    });
});


