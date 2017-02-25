$(function() {

    'use strict';
    

    
    //---------------------------------
    //Адаптивный слайдер
    //---------------------------------
    $(".reviews__slider").owlCarousel({
        loop: true,
        nav: true,
        navText: '',
        smartSpeed: 1200,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            993: {
                items: 2
            }
        }
    });

    //------------------------------------
    //Выравнивание блоков по высоте
    //------------------------------------
    $(".production__item-img").equalHeight({
        responsive: true
    });
    $(".production__item-title h4").equalHeight({
        responsive: true
    });
    $(".production__item-list-title").equalHeight({
        responsive: true
    });
    $(".production__item-list").equalHeight({
        responsive: true
    });
    
    
    //------------------------------------
    //popup
    //------------------------------------

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });
    

    //--------------------------------------------------------------------
    //Яндекс карта
    //--------------------------------------------------------------------

    ymaps.ready(function() {
        var myMap = new ymaps.Map('map', {
            center: [54.74523006993495,56.027178500000005],
            zoom: 15,
            controls: ['zoomControl'],
            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
        }, {
            searchControlProvider: 'yandex#search'
        });
        
        var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: '<b style="color:#44447a">Уфа, улица 50 лет СССР, 47</b>'
        }, {
            balloonPanelMaxMapArea: 0
        });
        
        myMap.geoObjects.add(myPlacemark);
        
        myPlacemark.balloon.open();

        $(window).resize(function() {
            var w = $(window).width();
            if (w < 768) {
                myMap.behaviors.disable('drag');
            } else {
                myMap.behaviors.enable('drag');
            }
        });
    });
});
