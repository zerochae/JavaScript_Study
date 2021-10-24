// $(".tab-button")
//   .eq(0)
//   .click(function () {
//     $(".tab-button").removeClass("active");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(0).addClass("active");
//     $(".tab-content").eq(0).addClass("show");
//   });

// for (let i = 0; i < 3; i++) {
//   $(".tab-button")
//     .eq(i)
//     .click(function () {
//         tap(i);
//     });
// }



$('.list').click(function(e){

        tap(e.target.dataset.id);
})

function tap(i){
    $(".tab-button").removeClass("active");
    $(".tab-content").removeClass("show");
    $(".tab-button").eq(i).addClass("active");
    $(".tab-content").eq(i).addClass("show");
}

document.getElementsByClassName