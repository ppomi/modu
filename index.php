<?php
if(isMobile()){ 
?>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="description" content="포트폴리오로 모두의셔틀 리뉴얼을 진행하였습니다">
        <meta name="keywords" content="공유경제, 모두의셔틀">
        <meta name="author" content="@imppomi">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>모두의셔틀</title>
        <link href="css/style_mobile.css" rel="stylesheet">

        <script src="lib/jquery-1.12.4.min.js"></script>
        <script src="lib/prefixfree.min.js"></script>
        <script src="js/common.js"></script>

        <!--[if lt IE 9]>	
            <script src="lib/html5shiv.js"></script>
        <![endif]-->
        
    </head>

    <body>
    <!-- Start of splash -->
    <div id="splash" class="mobile">
        <div class="logo"></div>
        <div class="car_wrapper">
            <div class="car">
                <img src="img/common/splash_car.jpg" alt="모두의 셔틀">
            </div>
            <div class="road"></div>
        </div>
    </div>
    <!-- End of splash -->

    <!-- Start of Login -->
    <div id="login">
        <div class="login_info">
            <img src="img/common/login_text.jpg" alt="꿀잠 출근라이프로 여러분을 모셔드립니다!">
            <img src="img/common/login_car.jpg" alt="모두의 셔틀">
        </div>
        <div class="login_wrapper">
            <div class="login_form">
                <form action="get" class="clear_fix">
                    <label for="id" class="text_hide">아이디(메일주소)</label>
                    <input type="text" name="id" id="id" placeholder="username@mail.com">
                    <label for="password" class="text_hide">비밀번호</label>
                    <input type="password" name="password" id="password" placeholder="password">
                    <button type="submit" id="get_start">GET STARTED</button>
                </form>
            </div>
            <div class="sns_login">
                <p>with signup</p>
                <a href="#" class="sns_login_btn kakao text_hide">카카오</a>
                <a href="#" class="sns_login_btn facebook text_hide">페이스북</a>
                <a href="#" class="sns_login_btn google text_hide">구글</a>
            </div>
        </div>
    </div>
    <!-- End of Login -->
    </body>

    </html>
<?php
}else{ 
?>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="description" content="포트폴리오로 모두의셔틀 리뉴얼을 진행하였습니다">
        <meta name="keywords" content="공유경제, 모두의셔틀">
        <meta name="author" content="@imppomi">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>모두의셔틀 관리자페이지</title>
        <link href="css/style.css" rel="stylesheet">

        <script src="lib/jquery-1.12.4.min.js"></script>
        <script src="lib/prefixfree.min.js"></script>
        <script src="js/common.js"></script>

        <!--[if lt IE 9]>	
            <script src="lib/html5shiv.js"></script>
        <![endif]-->
        
    </head>

    <body>
    <!-- Start of Login -->
    <div id="login">
        <div class="login_info">
            <img src="img/common/login_text.jpg" alt="꿀잠 출근라이프로 여러분을 모셔드립니다!">
            <img src="img/common/login_car.jpg" alt="모두의 셔틀">
        </div>
        <div class="login_wrapper">
            <div class="login_form">
                <form action="get" class="clear_fix">
                    <label for="id" class="text_hide">아이디</label>
                    <input type="text" name="id" id="id" placeholder="아이디를 입력하세요">
                    <label for="password" class="text_hide">비밀번호</label>
                    <input type="password" name="password" id="password" placeholder="password">
                    <button type="submit" id="admin_start">관리자로 로그인</button>
                </form>
            </div>
        </div>
    </div>
    <!-- End of Login -->
    </body>

    </html>
<?php
}

// 접속 디바이스가 모바일인지 검사
function isMobile() {
        return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}
?>