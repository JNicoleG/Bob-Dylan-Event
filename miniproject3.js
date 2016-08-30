$(document).ready(function(){
    console.log('Jquery is loaded.');
    
    $('.next_button').click(function (e){
        e.preventDefault();
        var current = $('.active');
        console.log("Current", current);
        current.removeClass("active");
        var next = current.next();
         console.log("Next", next);
        next.addClass("active");    
    });
    
    $('.back_button').click(function(e){
        e.preventDefault();
        var current = $('.active');
        current.removeClass("active");
        var prev = current.prev();
        prev.addClass("active");    
    });
    $('input').on('input', function(e){
        console.log('field changed');
        var fields = $('input');
        var field_missing = false;
        
        $(fields).each(function(i,o){
            var field = $(o);
            
            if (field.val() == "") {
                field_missing = true; }

        
        if (field_missing == true) {
            $('.submit').attr('disabled', 'disabled');
        }
        else {
        $('.submit').removeAttr('disabled')
            $('.feedback').text("Thanks for subscribing.");}
        });
    });
});

//add css for the feedback