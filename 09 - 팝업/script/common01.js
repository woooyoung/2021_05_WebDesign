$(document).ready(function () {
    $(".layerPopup").click(function () {
        //        $(".layer").css("display", "block");
        $(".layer").show();
        $(".layer-bg").show();
    });
    $(".close-btn").click(function () {
        //         $(".layer").css("display", "none");
        $(".layer").hide();
        $(".layer-bg").hide();
    });
});
