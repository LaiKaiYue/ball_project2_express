/**
 * Created by USER on 2017/5/2.
 */

$(function () {
    getMember();
})



function getMember() {
    $.post("getMember", function (getResult) {
        $(".ca-item-1").clone().appendTo(".ca-wrapper").removeClass("ca-item-1").addClass("ca-item-2");
        $(".ca-item-2 .ca-icon").css("background-image", "url(" + getResult.image + ")");
        $(".ca-item-1").clone().appendTo(".ca-wrapper").removeClass("ca-item-1").addClass("ca-item-3");
        $(".ca-item-3 .ca-icon").css("background-image", "url(" + getResult.image + ")");
        $(".ca-item-1").clone().appendTo(".ca-wrapper").removeClass("ca-item-1").addClass("ca-item-4");
        $(".ca-item-4 .ca-icon").css("background-image", "url(" + getResult.image + ")");
        $('#ca-container').contentcarousel();
    })
}