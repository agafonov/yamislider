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



        bannerContainer.prepend('<span class="prev_element">&lt;</span>');


        bannerContainer.append('<span class="next_element">&gt;</span>');

        bannerContainer.append('<div class="sliders_navigation"></div>');

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


        slidersNavigation(indexStart);

        //var Interval = setInterval(rotation, 2*1000, banners);
        //setTimeout("rotation('test')",10);





        function rotation(b) {
            // reset
            b.hide();
            $('.sliders_navigation span').css('font-weight', 'normal');

            //$('.slider_navigation span')
            var randomIndex = Math.floor(Math.random() * (banners.length - 0) + 0);

            //d ('element'+randomIndex, banners.get(randomIndex));

            $(b[randomIndex]).show();


            d('img', b[randomIndex]);
            d('span navi', $('.sliders_navigation span').get(randomIndex));

            $($('.sliders_navigation span').get(randomIndex)).css('font-weight', 'bold');



            //d(randomIndex, randomIndex );
            //            var randomIndex = Math.round(Math.random() * (max - min)) + min;
            //   ret = Math.floor(Math.random()*snum);
            //    $(".slyshow:eq("+ret+")").trigger("mouseover");

            //alert('triggerclick');
        }



        function allNavigation () {


        }


        $('.sliders_navigation span').click(function() {
            //clearInterval(Interval);
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



           // setTimeout(Interval = setInterval(rotation, 2*1000, banners), 5000);

        });

        $('.prev_element').click(function() {
            indexStart--;
           // clearInterval(Interval);
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



            //setTimeout(Interval = setInterval(rotation, 2*1000, banners), 5000);
            d('bannerPosition', bannerPosition);
            d('bannerContainer', bannerContainer);
            d('visible', indexCurrent);
        });



        $('.next_element').click(function() {
            indexStart++;

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





/*
var slykoef = smargin / 10;
var sc = $("#starconteiner");
var ss = $(".slyshow");
$("#starconteiner").width(400+smleft);
//слайдер
var p = sc.position();
var myInterval = setInterval(triggerclick,ssec*1000)
sc.append("<div class='slycomment'  style='opacity:0.5;filter:alpha(opacity=50);margin-left:"+(smleft+sborder)+"px'>"+$(".slyshow:last").attr('alt')+"</div>");
ss.addClass("slyleft");
ss.each(function(i){
    $(".slyshow:eq("+i+")").css({"margin-left":""+(slykoef * i)+"0px","z-index":i});
});
ss.mouseover(function(){
    if($(this).hasClass("slyactive")) return false
    $(".slycomment").hide();
    ss.removeClass("slyactive");
    $(this).addClass("slyactive");

    if($(this).hasClass("slyleft"))  {
        $(".slycomment").css("margin-left",parseInt($(".slyactive").css("margin-left"))+sborder).text($(".slyactive").attr('alt'));

        $(this).nextAll(".slyshow").each(function(i){
            $(this).removeClass("slyleft").addClass("slyright");
            m = 40+(slykoef * ($(this).index()-1))+"0";
            $(this).stop().animate({"margin-left":""+m+"px"},function(){
                $(".slycomment").fadeIn("slow");
            });
        });
    }
    else {
        if($(this).hasClass("slyright"))  {

            $(this).removeClass("slyright").addClass("slyleft");
            $(this).prevAll(".slyshow").removeClass("slyright").addClass("slyleft");
            m = (slykoef * ($(this).index()))+"0";
            $(".slycomment").css("margin-left",parseInt(m)+sborder).text($(".slyactive").attr('alt'));
            $(this).stop().animate({"margin-left":""+m+"px"},function(){
                $(".slycomment").fadeIn("slow");
            });

            $(this).prevAll(".slyshow").each(function(i){
                m = (slykoef * ($(this).index()))+"0";
                $(this).stop().animate({"margin-left":""+m+"px"},function(){
                    $(".slycomment").fadeIn("slow");
                });

            });
        }
    }

});
//интервал
function triggerclick() {
    ret = Math.floor(Math.random()*snum);
    $(".slyshow:eq("+ret+")").trigger("mouseover");
}
sc.mousemove(function(){
    clearInterval(myInterval)
});
sc.mouseleave(function(){
    clearInterval(myInterval)
    myInterval = setInterval(triggerclick,ssec*1000)
});
});
*/