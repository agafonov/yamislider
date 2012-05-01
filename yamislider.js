// TODO
/*
 Create  clean interval for mouse over on banner
 Create auto define width each element
 */

(function($){
    $.fn.yamislider = function(options) {
        var bannerContainer = $(this);
        // TODO Fix two call children()
        var banners = $(this).children().children('a');
        var bannerPosition = 0;

        options = $.extend({
            firstBanner: '#first_banner', // selector which need show first
            width: 1000 // width each element
        }, options);

        var bannerWidth = options.width;

        bannerContainer.prepend('<div class="sliders_navigation"></div>');
        bannerContainer.prepend('<span class="next_element">&gt;</span>');
        bannerContainer.prepend('<span class="prev_element">&lt;</span>');

        $(this).css('margin', '0');
        $(this).css('padding', '0');
        $(this).css('position', 'relative');
        $(this).css('overflow', 'hidden');

        $(this).children('.slider_wrap').css('white-space', 'nowrap'); // TODO May using block element
        $(this).children('.slider_wrap').css('position', 'absolute');

        $(this).children('.sliders_navigation').css('position', 'absolute');
        $(this).children('.sliders_navigation').css('z-index', '2');


        // Generation navigations
        for(var i=0; i<banners.length; i++) {
            var visible_index = i+1;
            $('.sliders_navigation').append('<span>'+ visible_index +'</span>');
        }

        // Element which need show first
        var indexStart = $(options.firstBanner).index();

        bannerPosition = -(indexStart * bannerWidth);
        $('.slider_wrap').animate({
            left: bannerPosition
        });
        slidersNavigation(indexStart);

        var Interval = setInterval(rotation, 2*1000, banners);


        $('.sliders_navigation span').click(function() {
            clearInterval(Interval);
            indexStart = $(this).index();
            bannerPosition = -(indexStart * bannerWidth);

            $('.slider_wrap').animate({
                left: bannerPosition
            });
            slidersNavigation(indexStart);

            setTimeout(Interval = setInterval(rotation, 2*1000, banners), 5000);
        });

        $('.prev_element').click(function() {
            if (indexStart <= 0) {
                return false;
            }

            indexStart--;
            clearInterval(Interval);
            bannerPosition = bannerPosition+bannerWidth;

            $('.slider_wrap').animate({
                left: bannerPosition
            });
            slidersNavigation(indexStart);

            setTimeout(Interval = setInterval(rotation, 2*1000, banners), 5000);
        });

        $('.next_element').click(function() {
            if (indexStart >= banners.length-1) {
                return false;
            }

            indexStart++;
            clearInterval(Interval);
            bannerPosition = bannerPosition-bannerWidth;

            $('.slider_wrap').animate({
                left: bannerPosition
            });
            slidersNavigation(indexStart);

            setTimeout(Interval = setInterval(rotation, 2*1000, banners), 5000);
        });

        function rotation(b) {
            indexStart = Math.floor(Math.random() * (banners.length - 0) + 0);

            bannerPosition = -(indexStart * bannerWidth)
            $('.slider_wrap').animate({
                left: bannerPosition
            });

            slidersNavigation(indexStart);
        }

        function slidersNavigation(index) {
            $('.sliders_navigation span').css('font-weight', 'normal');
            $($('.sliders_navigation span').get(index)).css('font-weight', 'bold');
        }
    };
})(jQuery);