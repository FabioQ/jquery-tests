$(document).ready(function(){
	//selectiong all class=america vacations
	$("#vacations").find(".america");

	//sleecting first vacation list item
	$("#vacations").find("li").first();

	//selecting the second to last vacation
	$("#vacations li").last().prev();

	//selecting only tours that have featured class title.
	$("#tours").find(".featured").parent();

	//selectiong all tours child "li"
	$("#tours").children("li");
});