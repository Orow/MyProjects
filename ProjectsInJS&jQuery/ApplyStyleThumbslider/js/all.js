$(document).ready(function(){
    // Declare vars
    var totalWidth = 0;
    var positions = new Array();

    $('#slides .slide').each(function(i){
        // Get slider widths, 用float:left=>所以變水平方向
        // 四張圖是水平slide,是用長度(寬)來算
        positions[i] = totalWidth;
        totalWidth += $(this).width();

        // Check widths
        if(!$(this).width()){
            alert('Please add a width to your images');
            return false;
        }
    });
    // Set width
    $('#slides').width(totalWidth);

    // Menu item click handler
    $('#menu ul li a').click(function(e){
        // Remove active class and add inactive class
        $('li.product').removeClass('active').addClass('inactive');
        // Add active class to parent
        $(this).parent().addClass('active');

        // 長度：點擊a的父元素"之前的所有class=producta"的元素
        var pos = $(this).parent().prevAll('.product').length;

        // 負值的margin-left才會使區塊往右移動
        $('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);
        // Prevent default - a 的跳轉連結
        e.preventDefault();

        // Stop autoScroll, 從click當下那個元素開始重新計算interval時間
        if(!autoScroll) clearInterval(itvl);
    });

    // Make first image active
    $('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');

    // Auto Scroll function
    var current = 1;
    function autoScroll(){
        if(current == -1){
            return false;
        }
        // .eq(1,2,3,0)依序的值 => 第一個a要執行a陣列[1]的click就會滑到a[1],以此類推
        $('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
        current++;
    }

    // Duration for autoScroll
    var duration = 10;
    var itvl = setInterval(function(){autoScroll()},duration*1000);

});

