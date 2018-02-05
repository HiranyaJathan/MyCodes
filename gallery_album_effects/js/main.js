// All custom codes with comment

$(document).ready(function(){
    $('.gallery-box').click(function(){
        $('.gallery-box').hide();
        $('.gallery-box img').wrap("<div class='col-xs-12 col-sm-3 col-md-3'></div>");
        $(this).show();           
    });             
    $('.btn-album').click(function(){
        $('.gallery-box').show();        
    });    
}); 