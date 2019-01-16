/**
 * common.js
 */
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
//모바일 스플래쉬 화면
$(function(){
    setTimeout(function(){
        $('#splash').hide();
    }, 8000);
});
//로그인 통과
$(function(){
    $('#get_start').on('click', function(){
        $(location).attr('href', 'mobile.html');
    });
});
//모바일 사이드 내비 동작
$(function(){
    $('.menu_btn').on('click', function(){
        $('.nav_wrapper').animate({'left': '0px'}, 300).addClass('on');
        $('.fold a').on('click', function(){
            $('.nav_wrapper').animate({'left': '-200vw'}, 300).removeClass('on');
        });
    });
});