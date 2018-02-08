// All custom codes with comment

$(document).ready (function(){
    $('.dropdown').click(function(){
        $('.dropdown-menu').not($(this).find('.dropdown-menu')).hide();
        $(this).find('.dropdown-menu').toggle();         
    });
    
});