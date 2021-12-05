// document.getElementById('login').addEventListener('click',function(){
//     document.getElementById('modal').style.display = 'block';
// });
// document.getElementById('login').addEventListener('click',function(){
//     $('#modal').show();
// });

$('#login').on('click',function(){
        $('#modal').addClass('slide-down')
});

// $('#nav-sub-button').on('click',function(){
//     if($('#nav-sub').css('display') == 'block'){
//         $('#nav-sub').hide();
//     } else {
//         $('#nav-sub').show();
//     }
// })

$('#nav-sub-button').on('click',function(){
    $('#nav-sub').slideToggle();
})

$('#close').on('click',function(){
    document.getElementById('modal').style.display = 'none';
});

$('form').on('input',function(e){

    // console.log(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/.test($('#email').val()));

    // var mail = $('#email').val();
    // var mailChk = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
    // if(!(mailChk.test(mail))){
    //     console.log(mailChk.test(mail));
    //     $('#email-alert').show();
    // } else if( mail == "" ) {
    //     e.preventDefault();
    // }
    // if(mailChk.test(mail)){
    //     $('email-alert').hide();
    // } 

    if($('#email').val() == ""){
        $('#email-alert').show();
        e.preventDefault();
    } else {
        $('#email-alert').hide();
    }
    
    if($('#password').val() == ""){
        $('#password-alert').show();
        e.preventDefault();
    } else {
        $('#password-alert').hide();
    }
    
});

// $('#show-menu').click(function(){
//     $('.left-menu').animate({marginLeft : ' 0px' });
// });

$('#show-menu').on('click',function(){
    $('.left-menu').animate({ marginLeft : '0px'});
});

$('.slide-1').click(function(){
    $('.slide-container').css('transform','translateX(0vw');
});
$('.slide-2').click(function(){
    $('.slide-container').css('transform','translateX(-100vw');
});

$('.slide-3').click(function(){
    $('.slide-container').css('transform','translateX(-200vw');
});

var nowPic = 1
var trans = 0;

$('.slide-next').click(function(){
    if(nowPic < 3){
        $('.slide-container').css('transform','translateX(-'+nowPic+'00vw)');
        nowPic += 1;
    }
});

$('.slide-before').click(function(){
        $('.slide-container').css('transform','translateX(-'+(nowPic-2)+'00vw)');
    nowPic -= 1;
});

// $('.nav-menu').scrollBehavior (to, from, savedPosition) {
//     // ...
// }

$(window).on('scroll',function(){
    if($(window).scrollTop() > 100){
        $('.nav-menu').addClass('nav-black');
        $('.nav-menu').addClass('small-logo');
    }
    if($(window).scrollTop() <= 100){
        $('.nav-menu').removeClass('nav-black');
        $('.nav-menu').removeClass('small-logo');
    }
});

