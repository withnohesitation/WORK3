
$('#header .nav-burger').click(function(){
    
    if($(this).hasClass('on')){
        $('#header .nav-popup').stop().slideUp();
        
        
    }else{
        $('#header .nav-popup').stop().slideDown();
    }

    $(this).toggleClass('on');
    $('#header .nav-popup').toggleClass('on');
   
})

