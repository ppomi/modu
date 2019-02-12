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
        $('.fold a').trigger('focus');
        $('.nav_wrapper').animate({'left': '0px'}, 300).addClass('on');        
        $('.nav_wrapper').append('<a href="#" class="return"></a>');
        $('.return').on('focus', function() {
            $('.fold a').trigger('focus');
        });
        $('.fold a').on('click', function(){
            $('.nav_wrapper').animate({'left': '-200vw'}, 300).removeClass('on');
            $('.nav_wrapper .return').remove();
            $('.noti_btn a').trigger('focus');
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
function setImageSwipe(selector, first) {
    var numSlide = $(selector).find('ul.slide li').length;
    var slideNow = 0;
    var slidePrev = 0;
    var slideNext = 0;
    var slideFirst = first;
    var startX = 0;
    var startY = 0;
    var delX = 0;
    var delY = 0;
    var offsetX = 0;
    var isDraggable = false;
    var direction = '';

    $(selector).find('ul.slide li').each(function(i) {
        $(this).css({'left': (i * 100) + '%', 'display': 'block'});
    });
    showSlide(1);    
    $(selector).find('ul.slide').on('touchstart', function(e) {
        isDraggable = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        offsetX = $(this).position().left;
    });    
    document.addEventListener('touchmove', function(e) {
        if (isDraggable === false) return false;
        delX = e.touches[0].clientX - startX;
        delY = e.touches[0].clientY - startY;
        console.log(direction);
        if (direction === '') {
            if ((Math.abs(delX) > 5) && (Math.abs(delX) > Math.abs(delY))) {
                direction = 'horizon';
            } else if ((Math.abs(delY) > 5) && (Math.abs(delX) < Math.abs(delY))) {
                direction = 'vertical';
            } else {
                direction = '';
            }
        } else if (direction === 'horizon') {
            e.preventDefault();
            if ((delX > 0 && slideNow === 1) || (delX < 0 && slideNow === numSlide)) {
                delX = delX / 10;
            }
            $(selector).find('ul.slide').css({'left': (offsetX + delX) + 'px'});
        } else if (direction === 'vertical') {
            delX = 0;
        }
    }, {passive: false});
    
    $(document).on('touchend', function() {
        if (isDraggable === true) {
            if (delX < -50 && slideNow !== numSlide) {
                showSlide(slideNext);
            } else if (delX > 50 && slideNow !== 1) {
                showSlide(slidePrev);
            } else {
                showSlide(slideNow);
            }
            isDraggable = false;
            direction = '';
        }
    });

    function showSlide(n) {
        if (slideNow === 0) {
            $(selector).find('ul.slide').css({'transition': 'none', 'left': -((n - 1) * 100) + '%'});
        } else {
            $(selector).find('ul.slide').css({'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%'});
        }
        $(selector).find('li .line_card').removeClass('on');
        $(selector).find('li:eq(' + (n - 1) + ') .line_card').addClass('on');
        slideNow = n;
        slidePrev = (n - 1) < 1 ? numSlide : n - 1;
        slideNext = (n + 1) > numSlide ? 1 : n + 1;
    }
}
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