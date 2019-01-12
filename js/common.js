/**
 * common.js
 */
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
//모바일 스플래쉬 화면
// $(function(){
//     setTimeout(function(){
//         $('#splash').hide();
//     }, 8000);
// });
//로그인 통과
// $(function(){
//     $('#get_start').on('click', function(e){
//         e.preventDefault();
//         $('#login').hide();
//     });
// });