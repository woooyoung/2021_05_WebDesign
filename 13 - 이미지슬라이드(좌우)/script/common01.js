$(document).ready(function () {

    function img_slide() {

        var num = 0;
        var result;
        setInterval(function () {
            
            result = num * -1200;
            console.log(num);
            num++;
            console.log(result);
            
            if(num == 3){
                num = 0;
            }
            $(".slider").stop().animate({
                left : result + 'px'
            });

        }, 1000);

    }
    img_slide();

});
