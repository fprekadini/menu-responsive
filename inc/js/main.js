function clickiPadMenu() {
    if (!$('div.iPadMenu').hasClass('iPadMenuOpen')) {
        $('div.iPadMenu').find(' > ul').each(function() {
            
            var eachUlHeight = 0;
            
            $(this).find('> li').each(function() {
                
                var heightLi = $(this).outerHeight();
                eachUlHeight += heightLi;
            });
            
            eachUlHeight += 50;

            $(this).stop(true, true).animate({
                'height': eachUlHeight
            }, 400);

            TweenMax.to($('div.iPadMenu'), 0.4, {height: eachUlHeight});
            TweenMax.to($(this).parent().find(' > ul.hasChild'), 0.4, {height: eachUlHeight});
        });
        
        var window_height = $(window).outerHeight();
        $('.main-nav').css('height', window_height);
        $('div.iPadMenu').addClass('iPadMenuOpen');
    } else {
        $('div.iPadMenu ').removeClass('iPadMenuOpen');
        $('.iPadMenu').animate({
            'height': 0
        }, 400);
    }
}
$(document).ready(function() {
    
    var eachUlHeight = 0;
    
    $('.go-to-sub-menu').click(function() {
        var eachLiHeight = -50;
        $(this).parent().find(' > ul.hasChild > li').each(function() {
            var heightLi = $(this).outerHeight();
            eachLiHeight += heightLi;
        });

        TweenMax.to($('.main-nav ul'), 0.4, {'height': eachLiHeight});

        TweenMax.to($(this).parent().find(' > ul.hasChild'), 0.4, {height: eachLiHeight, width: '100%'});
        $(this).parent().find(' > ul').removeClass('hasChild');
    });


    $('.back_to_parent').click(function() {
        $(this).closest('ul').animate({
            'width': 0
        });

        var eachLiHeight = 0;
        $(this).parent().parent().parent().closest('ul').find('> li').each(function() {
            var heightLi = $(this).outerHeight();
            eachLiHeight += heightLi;
        });
        
        eachLiHeight += 50;

        TweenMax.to($('.main-nav ul'), 0.4, {'height': eachLiHeight});
        TweenMax.to($('div.iPadMenu'), 0.4, {'height': eachLiHeight});
        TweenMax.to($(this).parent().parent().parent().closest('ul'), 0.4, {height: eachLiHeight, width: '100%'});
        $(this).parent().closest('ul').addClass('hasChild');
    });
    $('.mmenu').click(function() {
        clickiPadMenu();
    });
});

