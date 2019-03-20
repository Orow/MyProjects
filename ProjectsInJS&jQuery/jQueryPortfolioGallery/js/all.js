$(document).ready(function(){
    $('nav a').on('click', function(){
        // current class assignment
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');

        // Set Heading text
        $('h1#heading').text($(this).text()); 

        // Get & Filter link text
        var category = $(this).text().toLowerCase().replace(' ','-');

        // Remove hidden class if 'all-projects' is selected
        if(category == 'all-projects'){
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        }   else{
            $('ul#gallery li').each(function(){
                if(!$(this).hasClass(category)){
                    $(this).hide().addClass('hidden');
                }   else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        // Stop link behaviour
        return false;
    });
    // Mouseenter overlay
    $('ul#gallery li').on('mouseenter',function(){
        // Get data attritube values
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');

        // Validation
        if(desc == null){
            desc = 'Click To Enlarge ';
        }
        if(title == null){
            title = ''; 
        }

        // Create overlay div
        $(this).append('<div class="overlay"></div>');
        // Get the overlay div
        var overlay = $(this).children('.overlay');

        // Add html to overaly;
        overlay.html('<h3>' +title+ '</h3><p>' +desc+ '</p>');

        // Fade in overlay
        overlay.fadeIn(800);
    });

    // Mouseleave overlay
    $('ul#gallery li').on('mouseleave',function(){
        // Get the overlay div
        var overlay = $(this).children('.overlay');

        // Fade out overlay & Remove overlay
        overlay.stop().fadeOut(500,function(){
            $(this).remove();
        });
    });
});