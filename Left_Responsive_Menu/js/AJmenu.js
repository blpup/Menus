$(document).ready(function () {
    var boxWidth = 250;
    $('#AJMenuContainer .mainMenuLi').mouseenter(function () {
       
        $(this).find('.SubList').animate({ width: boxWidth }, 100);
  
        
    }).mouseleave(function () {
        
        $(this).find('.SubList').animate({width: 0}, 100);
   
    });
    $('#AJMenuContainer .mainMenuLi ul li').mouseenter(function () {

        $(this).find('ul').animate({ width: 125 }, 100);
       
       

    }).mouseleave(function () {

        $(this).find('ul').animate({ width: 0 }, 100);
     
        
    });
});