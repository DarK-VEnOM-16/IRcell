;(function($){
    "use strict";

    $(document).ready(function () {

    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });

    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('ul#nav li a[href^="#"], a.navbar-brand, a.scrolltotop').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });

    /*----------------------------
        MOBILE & DROPDOWN MENU
    ------------------------------*/
    jQuery('.stellarnav').stellarNav({
        theme: 'light',
        breakpoint: 992,
    });

    /*-----------------------------
        MENU HAMBERGER ICON
    ------------------------------*/
    var hamberger = $('.header-top-area svg');
    $('.menu-toggle.full').on('click', function () {
        var menuclass = $('#main-nav').attr('class');
        if ('stellarnav light mobile active' == menuclass) {
            hamberger.addClass('active');
        } else if ('stellarnav light mobile' == menuclass) {
            hamberger.removeClass('active');
        }
    });
    $(window).on('resize', function () {
        var menuclass = $('#main-nav').attr('class');
        if ('stellarnav light desktop' == menuclass) {
            hamberger.removeClass('active');
        }
    });

    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).on('scroll', function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $('.scrolltotop');
        if ($totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }

        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }
    });

    /*--------------------------
       PARALLAX BACKGROUND
    ----------------------------*/
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });

    /*-----------------------------
        LETER EFFECT
    -------------------------------*/
    var elements = $('[data-chaffle]');
    elements.each(function () {
        $(this).appear(function () {
            Array.prototype.forEach.call(elements, function (el) {
                const chaffle = new Chaffle(el, {
                    speed: 20,
                    delay: 50,
                });
                chaffle.init();
            });
        });
    });

    /*-----------------------------
        LETER EFFECT TWO
    -------------------------------*/
    var animate_hidding = {
        timelines: {}
    };
    var sub_title = $('.subtitle');
    sub_title.each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        $(this).appear(function () {
            animate_hidding.timelines["subtitle"] = anime.timeline({
                loop: false
            }).add({
                targets: '.subtitle .letter',
                translateY: ["1.1em", 0],
                translateX: ["0.55em", 0],
                translateZ: 0,
                rotateZ: [180, 0],
                duration: 1000,
                easing: "easeOutQuart",
                opacity: 1,
                delay: function (el, i) {
                    return 10 * i;
                }
            });
        });
    });

    /*------------------------------
        COUNTER UP
    -------------------------------*/
    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    /*------------------------------
        VIDEO POPUP
    --------------------------------*/
    var videoModal = $(".video-popup");
    videoModal.modalVideo({
        channel: 'youtube'
    });

    /* -------------------------------------------------------
     PORTFOLIO FILTER SET ACTIVE CLASS FOR STYLE
    ----------------------------------------------------------*/
    $('.portfolio-menu li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /* ------------------------------
     PORTFOLIO FILTERING
     -------------------------------- */
    $('.portfolio-menu li').on('click', function () {
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');

        $(".portfolio-gallery").isotope({
            filter: filterValue,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    /*------------------------------
        IMAGE POPUP
    -------------------------------*/
    $('.portfolio-big-thumb').venobox();

    /*---------------------------
        SERVICE SLIDER
    -----------------------------*/
    var serviceCarousel = $('.features-slider');
    if (serviceCarousel.length > 0) {
        serviceCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            center: false,
            dots: false,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: false,
            autoplayTimeout: 3000,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    center: true,
                    nav: false,
                    dots: true,
                    items: 1
                },
                600: {
                    nav: false,
                    dots: true,
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    /*---------------------------
        SCREENSHOT SLIDER
    -----------------------------*/
    var screenshotCarousel = $('.screenshot-slider');
    if (screenshotCarousel.length > 0) {
        screenshotCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            dots: false,
            center: false,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: false,
            autoplayTimeout: 3000,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    center: true,
                    nav: false,
                    dots: true,
                    items: 1
                },
                600: {
                    nav: false,
                    dots: true,
                    items: 2
                },
                1000: {
                    items: 3,
                    nav: false,
                    dots: true,
                },
                1200: {
                    items: 3
                },
                1900: {
                    items: 3
                }
            }
        });
    }

    /*---------------------------
        SCREENSHOT SLIDER 2
    -----------------------------*/
    var screenshotCarousel = $('.screenshot-slider2');
    if (screenshotCarousel.length > 0) {
        screenshotCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            dots: true,
            center: true,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    center: true,
                    nav: false,
                    dots: true,
                    items: 1
                },
                600: {
                    nav: false,
                    dots: true,
                    items: 2
                },
                1000: {
                    items: 3,
                    nav: false,
                    dots: true,
                },
                1200: {
                    items: 3
                },
                1900: {
                    items: 3
                }
            }
        });
    }

    /*---------------------------
        SCREENSHOT SLIDER 3
    -----------------------------*/
    var screenshotCarousel = $('.features-screenshot-slider');
    if (screenshotCarousel.length > 0) {
        screenshotCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            dots: true,
            center: true,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    center: true,
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3,
                },
                1200: {
                    items: 3
                },
                1900: {
                    items: 3
                }
            }
        });
    }
    
    /*---------------------------
        SPONSOR SLIDER HOME 4
    -----------------------------*/
    var screenshotCarousel = $('.sponsor-slider');
    if (screenshotCarousel.length > 0) {
        screenshotCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            dots: false,
            center: false,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    center: true,
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1900: {
                    items: 3
                }
            }
        });
    }
    
    /*---------------------------
        SCREENSHOT SLIDER 4
    -----------------------------*/
    var screenshotCarousel = $('.screenshot-slider-4');
    if (screenshotCarousel.length > 0) {
        screenshotCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            dots: false,
            center: false,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    center: true,
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1,
                    nav:false,
                },
                1200: {
                    items: 1
                },
                1900: {
                    items: 1
                }
            }
        });
    }

    /*---------------------------
        TESTMONIAL SLIDER
    -----------------------------*/
    var testmonialCarousel = $('.testmonial-slider');
    if (testmonialCarousel.length > 0) {
        testmonialCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            center: false,
            dots: true,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    /*---------------------------
        TEAM SLIDER
    -----------------------------*/
    var teamCarousel = $('.team-slider');
    if (teamCarousel.length > 0) {
        teamCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            center: false,
            dots: false,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 2
                },
                1900: {
                    items: 3
                }
            }
        });
    }

    /*---------------------------
        TEAM SLIDER
    -----------------------------*/
    var teamCarousel = $('.team-slider-two');
    if (teamCarousel.length > 0) {
        teamCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            center: false,
            dots: false,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav:false,
                },
                600: {
                    items: 2,
                    nav:false,
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1900: {
                    items: 3
                }
            }
        });
    }

    /*---------------------------
        CLIENT SLIDER
    -----------------------------*/
    var clientCarousel = $('.client-slider');
    if (clientCarousel.length > 0) {
        clientCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            center: false,
            dots: false,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
    }

    /*-----------------------------
        POST CAROUSEL
    ------------------------------*/
    var postCarousel = jQuery('.blog__posts__slider');
    if (postCarousel.length > 0) {
        postCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            center: false,
            dots: false,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: false,
            autoplayTimeout: 3000,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    center: true,
                    nav: false,
                    dots: true,
                    items: 1
                },
                600: {
                    nav: false,
                    dots: true,
                    items: 2
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    /*---------------------------
        BLOG GALLERY SLIDER
    -----------------------------*/
    var postGalleryCarousel = $('.posts-gallery');
    if (postGalleryCarousel.length > 0) {
        postGalleryCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            center: false,
            dots: false,
            navText: ['<i class="dripicons-arrow-thin-left"></i>', '<i class="dripicons-arrow-thin-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    /*-------------------------------
        PRICE TABLE ACTIVE
    ---------------------------------*/
    $('.single-price').on('hover', function (e) {
        $('.single-price').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
    });

    /*--------------------------
        ACCORDION ACTIVE
    ---------------------------*/
    $('#accordion-main .panel.panel-default').on('click', function (e) {
        $('#accordion-main .panel.panel-default').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
    });


    /*---------------------------
        PLACEHOLDER ANIMATION
    ----------------------------*/
    Placeholdem(document.querySelectorAll('[placeholder]'));

    /*--------------------------
        STICKY SIDEBAR
    ---------------------------*/
    $('.content-area .col-md-8, .content-area .col-md-4').theiaStickySidebar({
        additionalMarginTop: 30
    });

        /*-------------------------
            HEADER SEARCH FORM
        -------------------------*/
        var resizing = false,
            navigationWrapper = $('.top-area'),
            navigation = $('.stellarnav'),
            action = $('.action-button'),
            searchForm = $('.cd-main-search'),
            pageContent = $('.cd-main-content'),
            searchTrigger = $('.cd-search-trigger'),
            coverLayer = $('.cd-cover-layer');

        function checkResize() {
            if( !resizing ) {
                resizing = true;
                (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
            }
        }

        function closeSearchForm() {
            navigation.removeClass('active-search');
            action.removeClass('active-search');
            searchTrigger.removeClass('search-form-visible');
            searchForm.removeClass('is-visible');
            coverLayer.removeClass('search-form-visible');
        }

        searchTrigger.on('click', function(event){
            event.preventDefault();
            if( searchTrigger.hasClass('search-form-visible') ) {
                searchForm.find('form').submit();
            } else {
                navigation.addClass('active-search');
                action.addClass('active-search');
                searchTrigger.addClass('search-form-visible');
                coverLayer.addClass('search-form-visible');
                searchForm.addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                    searchForm.find('input[type="search"]').focus().end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
                });
            }
            return false;
        });

        searchForm.on('click', '.close', function(){
            closeSearchForm();
        });

        coverLayer.on('click', function(){
            closeSearchForm();
        });

        $(document).keyup(function(event){
            if( event.which=='27' ) closeSearchForm();
        });

        searchForm.on('change', 'select', function(){
            searchForm.find('.selected-value').text($(this).children('option:selected').text());
        });
    });



    $( window ).on ('load', function (){
        /*--------------------------
            PRE LOADER
        ----------------------------*/
        $(".preeloader").fadeOut(1000);


        /*--------------------------
        ACTIVE WOW JS
        ----------------------------*/
        new WOW().init({
            boxClass: 'wow',
            offset: 50,
            mobile: false,
            live: true
        });

    /*---------------------------
        ISOTOPE ACTIVE ON LOAD
    -----------------------------*/
    $(".portfolio-gallery").isotope({
        itemSelector: '.single-portfolio'
    });

});

})(jQuery);;