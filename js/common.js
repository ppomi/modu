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
    $('#get_start').on('click', function(e){
        e.preventDefault();
        $(location).attr('href', 'https://ppomi.github.io/modu/mobile.html');
    });
    $('#admin_start').on('click', function(e){
        e.preventDefault();
        $(location).attr('href', 'https://ppomi.github.io/modu/pc.html');
    });
});
//모바일 스와이프 동작
$(function() {
    var lastX;
    $('.main_scroll>div').bind('touchmove', function (e){
        var currentX = e.originalEvent.touches[0].pageX;
        if(currentX > lastX){
            $('.present_site_wrapper').stop().animate({'margin-left': '0px'}, 500);
        }else if(currentX < lastX){
            $('.present_site_wrapper').stop().animate({'margin-left': '-80vw'}, 500);
        }
        lastX = currentX;
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
//모바일 새로고침
$(function(){
    $('.refresh_btn a').on('click', function(){
        location.reload();
    });
});
//모바일 랜덤 숫자
$(function(){
    function numRandom(min, max){
        var numb = Math.floor(Math.random()*(max-min+1)) + min;
        return numb;
    }
    var minute = numRandom(0, 20);
    var second = numRandom(0, 59);
    var bus_stop = numRandom(1, 10);
    $('.bus_minute').text(minute);
    $('.bus_second').text(second);
    $('.bus_stop_number').text(bus_stop);
});
//모바일 스와이프 동작
$(function() {;
    var lastX = 50;
    var minOffsetLeft = -160;
    var moveDistance = 20;
    var offsetLeft = 0;
    var left = 0;
    $('.lines_wrapper>div').eq(0).removeClass('off');
    $('.lines_wrapper').bind('touchmove', function (e){
        var currentX = e.originalEvent.touches[0].pageX;
        if(currentX > lastX){
            if(offsetLeft === 0){
                $('.lines_wrapper').stop().animate({'left': offsetLeft + 'px'}, 500);
            }else{
                offsetLeft += moveDistance;
                if(offsetLeft > 0) offsetLeft = 0;
                $('.lines_wrapper').stop().animate({'left': offsetLeft + 'px'}, 500);
            }
        }else if(currentX < lastX){
            if(offsetLeft === minOffsetLeft){
                offsetLeft = 0;
                $('.lines_wrapper').stop().animate({'left': offsetLeft + 'px'}, 500);
            }else{
                offsetLeft -= moveDistance;
                if(offsetLeft < minOffsetLeft) offsetLeft = minOffsetLeft;
                $('.lines_wrapper').stop().animate({'left': offsetLeft + 'px'}, 500);
            }
        }
        lastX = currentX;
        left = -(offsetLeft);
        console.log(offsetLeft + '/' + left);
        if(left > 150){
            $('.lines_wrapper>div').addClass('off');
            $('.lines_wrapper>div').eq(2).removeClass('off');           
        }else if(left > 60 && left < 150){
            $('.lines_wrapper>div').addClass('off');
            $('.lines_wrapper>div').eq(1).removeClass('off');            
        }else{
            $('.lines_wrapper>div').addClass('off');
            $('.lines_wrapper>div').eq(0).removeClass('off');            
        }
    });
});
//모바일 탭 동작
$(function(){
    $('.mode_wrapper a').on('click', function(){
        $('.mode_wrapper a').removeClass('on');
        $(this).addClass('on');
    });
});
//모바일 하트 동작
$(function(){
    $('.card_top a').on('click', function(){
        $(this).toggleClass('on');
    });
});
//pc gnb동작
$(function(){
    $('.gnb_btn a').on('click', function(){
        $(this).toggleClass('fold');
        $('.gnb').toggleClass('off');
        $('#main').toggleClass('wide');
    });
    $('.gnb>ul>li>a').on('click', function(){
        $(this).toggleClass('on');
    });
});