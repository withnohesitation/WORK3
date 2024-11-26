//스크롤
const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})


let loadingCursor = gsap.matchMedia();

loadingCursor.add("(min-width: 992px)", () => {

    $('.loading').mousemove(function(e){
        gsap.to('.loading-cursor',{
            x:e.clientX,
            y:e.clientY,
        })
    })

});

loadingCursor.add("(max-width: 991px)", () => {
});


//로딩
window.onload = function(){
    $('.loading').click(function(){
        $('.loading').stop().delay(200).slideUp();
    })
};

//service영역 커서
$('.sc-service .service-box1 .thumb-box').mousemove(function(e){
    gsap.to($(this).find('.hover-cursor'), {
        opacity:1,
        x:e.offsetX,
        y:e.offsetY
    })
})

$('.sc-service .service-box1 .thumb-box').mouseleave(function(e){
    gsap.to($(this).find('.hover-cursor'), {
        opacity:0,
        x:30,
        y:520
    })
})
//메인
gsap.to('.sc-hero-add .img-wrap .img-box',{
    scrollTrigger:{
        trigger:'.sc-hero-add .add-area', //기준
        start:"0% 0%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
    yPercent:-200
})


stickyHighlightTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-content .highlight-row2',
        start: "0% 0%",
        end: "100% 0%",
        //markers: true,
        scrub:0,
    }
})
stickyHighlightTl.to('.sc-content .thumb-box.top .thumb-list',{
    xPercent: -100
},'a')
stickyHighlightTl.to('.sc-content .thumb-box.bottom .thumb-list',{
    xPercent: 100
},'a')


//백그라운드 그라데이션
gsap.to('#main .sc-content',{
    scrollTrigger:{
        trigger:'.sc-content .highlight-row2 .thumb-box.bottom', //기준
        start:"0% 0%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
    backgroundColor: 'rgb(242, 190, 10)'
})




let mm = gsap.matchMedia();

mm.add("(min-width: 992px)", () => {

    ScrollTrigger.create({
        trigger:".sc-service .service-box1",
        start:"15% 0%",
        end:"100% 75%",
        //markers:true,
        onUpdate:function(self){ 
            cnt=$('.sc-service .service-box1 .thumb-box').length; 
            idx=Math.round(self.progress * (cnt-1)); 
    
            $('.sc-service .service-box1 .col-left .text-box').eq(idx).addClass('on').siblings().removeClass('on')
    
    
    
        }
    })

});

mm.add("(max-width: 991px)", () => {
});










