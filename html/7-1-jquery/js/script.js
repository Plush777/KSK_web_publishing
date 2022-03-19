$(function() {
    $('.btnOpen').on({
        click: function() {
            $('#popup').show();
            $('#popup').after('<div id="dimmed"></div>');
        }
    });

    $('.btnClose').on({
        click: function() {
            $('#popup').hide();
            $('#dimmed').remove();
        }
    });
});