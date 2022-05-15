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
    });

    $('.tabList li').on({
        "click": function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.tabNav').siblings('.tabCont').eq($(this).index()).addClass('active')
            .siblings('.tabCont').removeClass('active');
            $(this).children('a').attr('aria-selected', 'true').closest('li').siblings('li').children('a')
            .attr('aria-selected', 'false');
            $(this).children('a').attr('tabindex','0').closest('li').siblings('li').children('a').attr('tabindex','-1');
        }
    });

    $('.tabList li').each(function(){
        if(!$(this).hasClass('active')){
            $(this).children('a').attr('aria-selected', 'false');
            $(this).children('a').attr('tabindex','-1');
        } else if($(this).hasClass('active')){
            $(this).children('a').attr('aria-selected', 'true');
            $(this).children('a').attr('tabindex','0');
        }
    });

    $('.toggleDarkMode').on({
        "click":function() {
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                $('.sun').remove();
                $(this).prepend(
                    `
                    <svg class="moon" width="32" height="32" viewBox="0 0 700 570">
                    <g>
                    <path d="m268.93 67.199c-83.66 31.004-131.73 111.57-131.73 206.02 0 121.27 98.309 219.58 219.58 219.58 94.441 0 175.02-48.074 206.02-131.73-25.008 10.059-52.301 15.199-80.906 15.199-119.86 0-228.16-108.3-228.16-228.16 0-28.609 5.1406-55.898 15.199-80.906z"/>
                    </g>
                    </svg>
                `);
                $(this).attr('aria-pressed','true');
            } else if(!$(this).hasClass('active')){
                $('.moon').remove();
                $(this).prepend(
                    `
                    <svg class="sun" width="32" height="32" viewBox="0 0 700 570">
                        <g>
                            <path d="m350 134.02c6.1836 0 11.199-5.0195 11.199-11.199v-43.922c0-6.1836-5.0195-11.199-11.199-11.199-6.1836 0-11.199 5.0195-11.199 11.199v43.922c-0.003906 6.1836 5.0156 11.199 11.199 11.199z"/>
                            <path d="m350 426.01c-6.1836 0-11.199 5.0195-11.199 11.199v43.887c0 6.1836 5.0195 11.199 11.199 11.199 6.1836 0 11.199-5.0195 11.199-11.199v-43.887c0-6.1797-5.0117-11.199-11.199-11.199z"/>
                            <path d="m230.93 176.77c2.1836 2.1914 5.0508 3.2812 7.918 3.2812s5.7305-1.0938 7.918-3.2812c4.375-4.375 4.375-11.465 0-15.836l-31.039-31.047c-4.3672-4.375-11.465-4.375-15.836 0-4.375 4.375-4.375 11.465 0 15.836z"/>
                            <path d="m469.07 383.23c-4.375-4.375-11.469-4.3672-15.844-0.003906-4.375 4.375-4.375 11.465-0.003907 15.844l31.047 31.074c2.1914 2.1914 5.0586 3.2812 7.9258 3.2812 2.8672 0 5.7305-1.0938 7.918-3.2773 4.375-4.375 4.375-11.465 0.003906-15.844z"/>
                            <path d="m204.01 280c0-6.1836-5.0195-11.199-11.199-11.199h-43.902c-6.1836 0-11.199 5.0195-11.199 11.199 0 6.1836 5.0195 11.199 11.199 11.199h43.902c6.1836 0.003906 11.199-5.0156 11.199-11.199z"/>
                            <path d="m551.1 268.8h-43.902c-6.1836 0-11.199 5.0195-11.199 11.199 0 6.1836 5.0195 11.199 11.199 11.199h43.902c6.1836 0 11.199-5.0195 11.199-11.199 0-6.1797-5.0117-11.199-11.199-11.199z"/>
                            <path d="m230.92 383.23-31.047 31.074c-4.3672 4.3789-4.3672 11.469 0.003906 15.844 2.1914 2.1836 5.0508 3.2773 7.918 3.2773s5.7344-1.0938 7.9258-3.2812l31.047-31.074c4.3672-4.3789 4.3672-11.469-0.003906-15.844-4.3789-4.375-11.469-4.3672-15.844 0.003906z"/>
                            <path d="m461.15 180.05c2.8672 0 5.7305-1.0938 7.918-3.2812l31.047-31.047c4.375-4.375 4.375-11.465 0-15.836-4.375-4.375-11.465-4.375-15.836 0l-31.047 31.047c-4.375 4.375-4.375 11.465 0 15.836 2.1836 2.1914 5.0508 3.2812 7.918 3.2812z"/>
                            <path d="m350 154.81c-69.043 0-125.21 56.164-125.21 125.2 0 69.039 56.168 125.21 125.21 125.21s125.21-56.168 125.21-125.21c0-69.031-56.168-125.19-125.21-125.19zm0 228c-56.695 0-102.81-46.121-102.81-102.81 0-56.684 46.121-102.79 102.81-102.79s102.81 46.117 102.81 102.79c0 56.688-46.121 102.81-102.81 102.81z"/>
                        </g>
                    </svg>
                    `
                )
                $(this).attr('aria-pressed','false');
            }
        }
    });

    $('.toggleDarkMode').each(function() {
        if(!$(this).hasClass('active')){
            $(this).attr('aria-pressed', 'false');
        }
    });

    $('.checkbox label').on({
        "keyup" : function(e) {
            let keyCode = e.keyCode;
            $inputChk = $(this).siblings('input[type="checkbox"]');
            if(keyCode == 13 || keyCode == 32){
                // $(this).siblings('input[type="checkbox"]').trigger('click');
                $inputChk.prop('checked', !$inputChk.prop('checked'));
                if($inputChk.prop('checked')){
                    $inputChk.attr('aria-checked', 'true');
                } else {
                    $inputChk.attr('aria-checked', 'false');
                }
            }
        }, "click" : function() {
            $inputChk = $(this).siblings('input[type="checkbox"]');
            if(!$inputChk.prop('checked')){
                $inputChk.attr('aria-checked', 'true');
            } else {
                $inputChk.attr('aria-checked', 'false');
            }
        }
    });

    $('.checkbox input[type="checkbox"]').each(function() {
        if($(this).prop('checked')){
            $(this).attr('aria-checked', 'true');
        } else {
            $(this).attr('aria-checked', 'false');
        }
    });


    $('.radioWrapper .radio label').on({
        "keyup" : function(e) {
            let keyCode = e.keyCode;
            $radio = $(this).siblings('input[type="radio"]');
            if(keyCode == 13 || keyCode == 32){
                $radio.prop('checked',true).attr('aria-checked','true').parents('li').siblings()
                .find('input[type="radio"]').prop('checked',false).attr('aria-checked','false');
                
            }
        }, "click" : function() {
            $radio = $(this).siblings('input[type="radio"]');
            $radio.prop('checked',true).attr('aria-checked','true').parents('li').siblings()
            .find('input[type="radio"]').prop('checked',false).attr('aria-checked','false');
        }
    });

    $('.radioWrapper input[type="radio"]').each(function() {
        if($(this).prop('checked')){
            $(this).attr('aria-checked', 'true');
        } else {
            $(this).attr('aria-checked', 'false');
        }
    });
});
    