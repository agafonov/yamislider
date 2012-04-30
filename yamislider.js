(function($){

    $.fn.yamislider = function(options) {

        // Debug
        function d(name, value) {
            console.log(name, value);
        }


        options = $.extend({
            background: 'red'
        }, options);


        var banners = this;
        banners.hide();





        d('banners ', banners);


        var Interval = setInterval(rotation, 2*1000, banners);






        //setTimeout("rotation('test')",10);



        function rotation(b) {


            b.each(function(i){
                //$(".slyshow:eq("+i+")").css({"margin-left":""+(slykoef * i)+"0px","z-index":i});
                var elem = $(this);
                elem.hide();
            });



            d('options', options);

            var randomIndex = Math.floor(Math.random() * (banners.length - 0) + 0);
            //d ('element'+randomIndex, banners.get(randomIndex));


            b.get(randomIndex).show();



            //d(randomIndex, randomIndex );
            //            var randomIndex = Math.round(Math.random() * (max - min)) + min;
            //   ret = Math.floor(Math.random()*snum);
            //    $(".slyshow:eq("+ret+")").trigger("mouseover");

            //alert('triggerclick');

            console.log('rotation called');
        }


        //alert(myInterval);

        var bannersArr = new Array();
        var count = 0;


        this.each(function () {
            var self = $(this);



            banners[count++] = $(this);



        });

        console.log('banners', bannersArr);


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