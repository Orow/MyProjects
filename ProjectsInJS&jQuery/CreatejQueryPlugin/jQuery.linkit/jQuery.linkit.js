/*
 * name: LinkIt
 * author: Practicer
 * version: 0.1.0
 * license: MIT
 */

 (function($){
    //  fn後接plugin名稱
    $.fn.linkIt = function(options){
        // alert(this.html());  //it is no needs to use $(this).html()

        // Default settings
        var settings = $.extend({
            // whatever : null
            href        : null,
            text        : null,
            target      : '_self'
        },options);
        // alert(settings.whatever );

        // Validation
        if(settings.href == null){
            console.log('You need an href option for linkIt to work');
            return this;
        }

        return this.each(function(){
            var object = $(this);

            if(settings.text == null){
                settings.text = object.text();
            }
            object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
        });
        
    }
    // 強制使$是給jQuery使用
 }(jQuery)); 