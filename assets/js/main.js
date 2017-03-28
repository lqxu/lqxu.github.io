$(document).ready(function() {

    /* ======= Scrollspy ======= */
   $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});
		
	});
	
	/* ======= Fixed page nav when scrolled ======= */    
    $(window).on('scroll resize load', function() {
        
        $('#page-nav-wrapper').removeClass('fixed');
         
         var scrollTop = $(this).scrollTop();
         var topDistance = $('#page-nav-wrapper').offset().top;
         
         if ( (topDistance) > scrollTop ) {
            $('#page-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-page-nav');
         }
         else {
            $('#page-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-page-nav');
         }

    });
    
    /* ======= Chart ========= */
    
    $('.chart').easyPieChart({		
		barColor:'#00BCD4',//Pie chart colour
		trackColor: '#e8e8e8',
		scaleColor: false,
		lineWidth : 5,
		animate: 2000,
		onStep: function(from, to, percent) {
			$(this.el).find('span').text(Math.round(percent));
		}
	});  
	

    
    /* ======= Isotope plugin ======= */
    /* Ref: http://isotope.metafizzy.co/ */
    // init Isotope    
    var $container = $('.isotope');
    
    $container.imagesLoaded(function () {
        $('.isotope').isotope({
            itemSelector: '.item'
        });
    });
    
    // filter items on click
    $('#filters').on( 'click', '.type', function() {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.filters').each( function( i, typeGroup ) {
        var $typeGroup = $( typeGroup );
        $typeGroup.on( 'click', '.type', function() {
          $typeGroup.find('.active').removeClass('active');
          $( this ).addClass('active');
        });
    });


    /*
    *<div class="item frontend  col-md-3 col-xs-6 ">
     <div class="item-inner">
     <div class="content text-left">
     <h3 class="sub-title"><a href="mmc/index.html" target="_blank">买买茶首页</a></h3>
     <div class="meta">html&nbsp;css&nbsp;javaScript&nbsp;jQuery</div>
     <div class="action"><a href="mmc/index.html" target="_blank">买买茶购物商城首页,已经实现登陆、注册功能</a></div>
     </div>
     </div>
     </div>
    * */


    var items_wrapper = document.getElementById('items_wrapper');
    var sitesData = [
        {type:'backend', title:'IEM爱我', href:"https://lqxu.github.io/item/IEM", teches:'html css js', description:'展示一些潮型搭配推荐，实现了轮播图以及瀑布流排布等'},
        {type:'frontend', title:'京东', href:"https://lqxu.github.io/item/jd", teches:'html css', description:'div+css布局，spirit使用。'},
        {type:'backend', title:'京东移动端', href:"https://lqxu.github.io/item/m.jd", teches:'html5 css3 js', description:'最新版的京东移动端，利用百分比，媒体查询等适配了下'},
        {type:'frontend', title:'阿里云', href:"https://lqxu.github.io/item/ali_cloud", teches:'html css js', description:'阿里云的首页，利用js以及css3实现了一些动画特效'},
        {type:'frontend', title:'TodoMVC', href:"https://lqxu.github.io/item/todomvc/", teches:'ng的路由、服务等', description:'一个备忘录，模板来自于github，用ng实现业务逻辑。'},
        {type:'backend', title:'打飞机小游戏', href:"https://lqxu.github.io/item/wechat_plane/", teches:'canvas js', description:'前几年的一个微信打飞机， 使用canvas实现。'},
    ];
    var htmlStr = '', item = null;
    for(var index=0, len=sitesData.length; index<len; index++){
        item = sitesData[index];
        htmlStr += '<div class="item '+item.type+'  col-md-3 col-xs-6 ">';
        htmlStr += '<div class="item-inner">';
        htmlStr += '<div class="content text-left">';
        htmlStr += '<h3 class="sub-title"><a href="'+item.href+'" target="_blank">'+item.title+'</a></h3>';
        htmlStr += '<div class="meta">'+item.teches+'</div>';
        htmlStr += '<div class="action"><a href="'+item.href+'" target="_blank">'+item.description+'</a></div>';
        htmlStr += '</div>';
        htmlStr += '</div>';
        htmlStr += '</div>';
    }

    items_wrapper.innerHTML = htmlStr;
});