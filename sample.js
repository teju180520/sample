$(document).ready(function(){
    /*==============================
      Flippet Small Sliding Menu 
    ===============================*/ 
      function fliSmallMenu(){
        var $block = $('.flippet[data-type="small-menu-slide"]'),
            $menu = $block.find('ul'),
            $icon = $block.find('.trigger-menu'),
            $bars = $icon.find('span');
        $icon.on('click',function(e){
          e.preventDefault();
          if($menu.hasClass('active')){
            $menu.removeClass('active');
            $bars.removeClass('close');
          }
          else{
            $menu.addClass('active');
            $bars.addClass('close');
          }
        });
      }
      //call the menu function
      fliSmallMenu();
    });