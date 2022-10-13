
$(document).ready(function(){
  $('.navbar-toggler').click(function(){
    $('body').addClass('page-scroll-disable');
  });
  $('.close-btn').click(function(){
    $('body').removeClass('page-scroll-disable');
  });
});