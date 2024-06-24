gsap.to('.f-loop .loop-frame',50, {
    repeat:-1,
    xPercent:-50,
    ease:"none"
})



let fmm = gsap.matchMedia();

fmm.add("(min-width: 992px)", () => {

    $('.footer-box.rowlast .f-policy .col-right .link-wttm img').mouseover(function(){
        $('#footer .f-policy .link-wttm .text').css("transform", "translateX(0px)");
    })
    $('.footer-box.rowlast .f-policy .col-right .link-wttm img').mouseout(function(){
        $('#footer .f-policy .link-wttm .text').css("transform", "translateX(100%)");
    })

});

fmm.add("(max-width: 991px)", () => {
});