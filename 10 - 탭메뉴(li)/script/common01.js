$(document).ready(function () {
    var tabBtn = $(".tab-btn > ul > li");
    var tabCon = $(".tab-con > div");

    tabCon.hide().eq(0).show(); //eq -> 인덱스 검색

    tabBtn.click(function (e) {
        e.preventDefault(); // 고유 동작을 중단
        var target = $(this);
        var index = target.index();
//        alert(index);
        tabBtn.removeClass("actived_tab");
        target.addClass("actived_tab");
        tabCon.css("display", "none");
        tabCon.eq(index).css("display", "block");
//        tabBtn.eq(index).css("font-size","4rem");
    })
});
