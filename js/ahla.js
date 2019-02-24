// var h= $('.intrests .row text-centred p');
// function med (){
//     for ( i= 0 ; i < h.length; i++){
       
// $('.interests i').on('mouseenter', function() {
//     $(".interests .p").css({
//         'margin-left': " 50px ",
//         'opacity': "1 ",
//         'transition': "all .37s ease-in-out",
//         'color': "#2196F3"

// }
//     );
// })

        
//     }
// }






// $('.interests i').on('mouseenter', function() {
//     $(".interests p").css({
//         'margin-left': " 50px ",
//         'opacity': "1 ",
//         'transition': "all .37s ease-in-out",
//         'color': "#2196F3",

// });
// })
// $('.interests i').on('mouseleave', function() {
//     $(".interests p").css('opacity',0);
// })

// function clicking(cls){
// $(cls).css('opacity',1);
// }
// function unclicking(cls){
//     $(cls).css('opacity',0);
//     }
$('.interests i').on('mouseenter', (e) => {
    $(e.currentTarget.nextSibling).css({
                 'margin-left': " 50px ",
                 'opacity': "1 ",
                 'transition': "all .37s ease-in-out",
                 'color': "#2196F3",
        
         });
})
$('.interests i').on('mouseleave', (e) => {
    $(e.currentTarget.nextSibling).css('opacity',0);
})