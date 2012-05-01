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

        var bannerWidth = 1000;
        var bannerPosition = 0;


        d('banners: ', banners);
        // banners.get(1.hide();


        options = $.extend({
            background: 'red'

        }, options);



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

        for(var i=0; i<banners.length; i++) {
            d('banners i', banners[i]);
            var visible_index = i+1;
            $('.sliders_navigation').append('<span>'+ visible_index +'</span>');
        }



        // Element which need show first
        if (options.firstBanner) {

            //banners.not(options.firstBanner).hide();


            var indexStart = $(options.firstBanner).index();


            d('start inde', indexStart);
            d('start el', $($('.sliders_navigation span').get(indexStart-1)).css('font-weight', 'bold'));





            //banners.hide();
        }
        else {
            //banners.not(':first').hide();
        }

        bannerPosition = -(indexStart * bannerWidth)
        $('.slider_wrap').animate({
            left: bannerPosition
        });
        slidersNavigation(indexStart);

        var Interval = setInterval(rotation, 2*1000, banners);
        //setTimeout("rotation('test')",10);





        function rotation(b) {
            // reset
            //b.hide();
            //$('.sliders_navigation span').css('font-weight', 'normal');

            //$('.slider_navigation span')
            //var randomIndex = Math.floor(Math.random() * (banners.length - 0) + 0);
            indexStart = Math.floor(Math.random() * (banners.length - 0) + 0);

            //d ('element'+randomIndex, banners.get(randomIndex));

            //$(b[randomIndex]).show();


            bannerPosition = -(indexStart * bannerWidth)
            $('.slider_wrap').animate({
                //marginLeft: parseInt($marginLefty.css('marginLeft'),10) == 0 ? $marginLefty.outerWidth() :0
                left: bannerPosition
            });


           // d('img', b[randomIndex]);
           // d('span navi', $('.sliders_navigation span').get(randomIndex));

            //$($('.sliders_navigation span').get(randomIndex)).css('font-weight', 'bold');
            slidersNavigation(indexStart);



            //d(randomIndex, randomIndex );
            //            var randomIndex = Math.round(Math.random() * (max - min)) + min;
            //   ret = Math.floor(Math.random()*snum);
            //    $(".slyshow:eq("+ret+")").trigger("mouseover");

            //alert('triggerclick');
        }



        function allNavigation () {


        }


        $('.sliders_navigation span').click(function() {
            clearInterval(Interval);
            // TODO move declaration index at top
            indexStart = $(this).index();

            //$('.sliders_navigation span').css('font-weight', 'normal');
            //$(this).css('font-weight', 'bold');
            //$(banners[index]).show();





            bannerPosition = -(indexStart * bannerWidth)
            $('.slider_wrap').animate({
                //marginLeft: parseInt($marginLefty.css('marginLeft'),10) == 0 ? $marginLefty.outerWidth() :0
                left: bannerPosition
            });

            slidersNavigation(indexStart);



            setTimeout(Interval = setInterval(rotation, 2*1000, banners), 5000);

        });

        $('.prev_element').click(function() {
            indexStart--;
            clearInterval(Interval);
            var indexCurrent = bannerContainer.children('a:visible').index()-1;
            var indexPrev = indexCurrent-1;
            var indexNext = indexCurrent+1;


            if (indexStart <= 0) {
                indexPrev = 0;
            }
            if (indexCurrent >= banners.length) {
                indexNext = banners.length ;
            }

            d('indexPrev', indexPrev);
            d('indexNext', indexNext);


            //banners.hide();

            //$(banners[indexPrev]).show();



            ///    var $marginLefty = $(this).next();


            d('$(banners[indexPrev])', banners[indexStart]);

            bannerPosition = bannerPosition+bannerWidth;

            $('.slider_wrap').animate({
                //marginLeft: parseInt($marginLefty.css('marginLeft'),10) == 0 ? $marginLefty.outerWidth() :0
                left: bannerPosition
            });

            slidersNavigation(indexStart);




            d('bannerPosition', bannerPosition);
            d('bannerContainer', bannerContainer);
            d('visible', indexCurrent);
            setTimeout(Interval = setInterval(rotation, 2*1000, banners), 5000);
        });



        $('.next_element').click(function() {
            indexStart++;
            clearInterval(Interval);

            if (indexStart >= banners.length-1) {
                //indexNext = banners.length-1;
                // TODO fix end banners

            }
            //d('banners.length', banners.length);
            //d('indexNext', indexNext);
            //d('indexCurrent', indexStart);



            //banners.hide();

            //$(banners[indexStart]).show();





            bannerPosition = bannerPosition-bannerWidth;

            $('.slider_wrap').animate({
                //marginLeft: parseInt($marginLefty.css('marginLeft'),10) == 0 ? $marginLefty.outerWidth() :0
                left: bannerPosition
            });

            slidersNavigation(indexStart);


            bannerWidth = bannerWidth--;

            d('indexStart incr', indexStart);
            d('bannerPosition', bannerPosition);
            setTimeout(Interval = setInterval(rotation, 2*1000, banners), 5000);
        });


        
        function slidersNavigation(index) {
            d('slidersNavigation called: ',index);

            $('.sliders_navigation span').css('font-weight', 'normal');
            $($('.sliders_navigation span').get(index)).css('font-weight', 'bold');
        }


        //alert(myInterval);

        /*
        var bannersArr = new Array();
        var count = 0;


        this.each(function () {
            var self = $(this);



            banners[count++] = $(this);



        });

        console.log('banners', bannersArr);

        */

        // Debug
        function d(name, value) {
            console.log(name, value);
        }

    };

})(jQuery);