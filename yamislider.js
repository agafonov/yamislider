(function($){
    $.fn.yamislider = function(options) {
        var bannerContainer = $(this);
        var banners = $(this).children('a');

        options = $.extend({
            background: 'red'
        }, options);


        bannerContainer.prepend('<span class="prev_element">&lt;</span>');
        bannerContainer.append('<span class="next_element">&gt;</span>');
        bannerContainer.append('<div class="slider_all_navigation"></div>');

        for(var i=0; i<banners.length; i++) {
            var visible_index = i+1;
            $('.slider_all_navigation').append('<span>'+ visible_index +'</span>');
        }

        // Element which need show first
        if (options.firstBanner) {
            banners.not(options.firstBanner).hide();
            var indexStart = $(options.firstBanner).index();
        }
        else {
            banners.not(':first').hide();
        }

        var Interval = setInterval(rotation, 2*1000, banners);

        function rotation(b) {
            // reset
            b.hide();
            $('.slider_all_navigation span').css('font-weight', 'normal');

            var randomIndex = Math.floor(Math.random() * (banners.length - 0) + 0);
            $(b[randomIndex]).show();
            $($('.slider_all_navigation span').get(randomIndex)).css('font-weight', 'bold');
        }

        $('.slider_all_navigation span').click(function() {
            clearInterval(Interval);
            var index = $(this).index();

            $('.slider_all_navigation span').css('font-weight', 'normal');
            banners.hide();

            $(this).css('font-weight', 'bold');
            $(banners[index]).show();
            setTimeout(Interval = setInterval(rotation, 2*1000, banners), 5000);
        });

        $('.prev_element').click(function() {
            clearInterval(Interval);
            var indexCurrent = bannerContainer.children('a:visible').index()-1;
            var indexPrev = indexCurrent-1;
            var indexNext = indexCurrent+1;

            if (indexCurrent <= 0) {
                indexPrev = 0;
            }
            if (indexCurrent >= banners.length) {
                indexNext = banners.length ;
            }

            $('.slider_all_navigation span').css('font-weight', 'normal');
            banners.hide();

            $(banners[indexPrev]).show();
            $($('.slider_all_navigation span').get(indexPrev)).css('font-weight', 'bold');

            setTimeout(Interval = setInterval(rotation, 2*1000, banners), 5000);
        });



        $('.next_element').click(function() {
            clearInterval(Interval);
            var indexCurrent = bannerContainer.children('a:visible').index()-1;
            var indexNext = indexCurrent+1;

            if (indexCurrent >= banners.length-1) {
                indexNext = banners.length-1;
            }

            $('.slider_all_navigation span').css('font-weight', 'normal');
            banners.hide();

            $(banners[indexNext]).show();
            $($('.slider_all_navigation span').get(indexNext)).css('font-weight', 'bold');


            setTimeout(Interval = setInterval(rotation, 2*1000, banners), 5000);
        });
    };
})(jQuery);