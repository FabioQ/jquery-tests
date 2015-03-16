$(document).ready(function() {
  //on the keyup event, it automatically update the price value
  $("#nights").on("keyup", function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest(".tour").data("daily-price");
    //updating the total amount
    $("#total").text(nights * dailyPrice);
    //updating the nights-count value
    $("#nights-count").text($(this).val());
  });

  //other function, on focusing the #nights form, it reset to default value 7
  $('#nights').on("focus", function(){
    $(this).val('7');
  });

});