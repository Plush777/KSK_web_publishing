$(function(){
    let $menuArea = $('#menuArea>ul>li');

    $($menuArea).on({
        "click":function() {
            $(this).toggleClass('active').siblings('li').removeClass('active');
            $(this).children('a').attr('aria-expanded','true').closest('li').siblings().children('a').attr('aria-expanded','false');
        }
    })

     /******************************
        keycode
        13: enter
        27: esc
        32: spaceBar
        37: arrow left
        39: arrow right
    ******************************/
    
    $($menuArea).on({
        "keyup":function(e) {
            let keycode = e.keyCode;

            if($(this).hasClass('active')){
                if(keycode == 27){
                    $(this).children('a').attr('aria-expanded','false');
                    $(this).removeClass('active');
                } else if(keycode == 13){ 
                    $(this).find('.dep2').find('li').first().children('a').focus();
                } 
            }

            if($(this).focus()){
                if(keycode == 37){
                    $(this).prev('li').children('a').focus();
                } else if(keycode == 39){
                    $(this).next('li').children('a').focus();
                } else if(keycode == 32){
                    $(this).addClass('active').siblings('li').removeClass('active');
                    $(this).find('.dep2').find('li').first().children('a').focus();
                    $(this).children('a').attr('aria-expanded','true').closest('li').siblings()
                    .children('a').attr('aria-expanded','false');
                } 
                      
                if($(this).index() == 0){
                    if(keycode == 37){
                        $('#menuArea>ul>li:last-child').children('a').focus();
                    }
                } else if($(this).index() == 2){
                    if(keycode == 39){
                        $('#menuArea>ul>li:first-child').children('a').focus();
                    }
                }
            } 
        }
    });

    $($menuArea).each(function(){
        if(!$(this).hasClass('active')){
            $(this).children('a').attr('aria-expanded','false');
        }
    });

    $('#menuArea>ul>li .dep2 li').on({
        "click":function(e) {
            e.stopPropagation();
        }
    })
});
    