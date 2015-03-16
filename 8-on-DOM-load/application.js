$(document).ready(function(){
  //alert displaying how many images I've in the DOM.
  //alert($("img").length); 

  function showPhotos() {
    $(this).find("span").slideToggle();
  }
  
  $("#tour").on("click", "button", function() {
    $(".photos").slideToggle();
  });
  
  $(".photos").on("mouseenter", "li", showPhotos);
  $(".photos").on("mouseleave", "li", showPhotos);

});