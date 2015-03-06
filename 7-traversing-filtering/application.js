$(document).ready(function(){
	//only target button inside .tour
  $(".tour").on("click", "button", function(){
    var tour = $(this).closest(".tour");
    var discount = tour.data("discount");
    var message = $("<span>Call 1-555-jquery-air for a $" + discount + " discount.</span>");
    tour.append(message);
    $(this).remove();
  });

  	//highlight items .onsale inside .tour and remove class highlight from all before selecting
   	$("#filters").on("click", ".on-sale", function(){    
   		$(".tour").removeClass("highlight");
   		$(".tour").filter(".on-sale").addClass("highlight");
  	});

  	$("#filters").on("click", ".featured", function(){
    	$(".tour").removeClass("highlight");
    	$(".tour").filter(".featured").addClass("highlight");
  	});
});

});