// document.getElementById('login').addEventListener('click',function(){
//     document.getElementById('modal').style.display = 'block';
// });
// document.getElementById('login').addEventListener('click',function(){
//     $('#modal').show();
// });

$('#login').on('click',function(){
        $('#modal').show();
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