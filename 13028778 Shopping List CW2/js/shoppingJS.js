// Shopping List JS

	// Variables
	var chosenItems = {};
	var counter = "0";
	var listCreated = false;

	$( document ).ready(function() {

	var x = document.getElementById("myDate").value;
  
	 document.getElementById("myDateValueItem").innerHTML = x;
	 document.getElementById("myDateValueItem").value = x;
	 
	$("#shoppingLists").on("taphold",function(){
	$(this).hide();
	});   
						$("#shoppingListsItems").on("click","li", function(){
                       $(this).closest("li").find("h3").toggleClass("checked");
					   
					   if($(this).closest("li").find("input").is(':checked'))
					   {
						  $(this).closest("li").find("input").prop('checked', false); 
					   }else
					   {
						   $(this).closest("li").find("input").prop('checked', true);
					   }
					   
					});
	
	
	var q = localStorage.getItem("SLView");
	if (q!=null) chosenItems = JSON.parse(q);
	appendToList();	
	
		// This button will increment the value
    $('.qtyplus').click(function(e){
    
     		  var qty = $(".qty").val();
    
          if(qty => 1){
	          $(".qtyminus").removeClass("qtyminusGrey");
          }
    
        // Stop acting like a button
        e.preventDefault();
        // Get the field
        field = $(this).attr('field');
        // Get its current value
        var currentValue = parseInt($('input[name='+field+']').val());
        // If is not undefined
        if (!isNaN(currentValue)) {
            // Increment
            $('input[name='+field+']').val(currentValue + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+field+']').val(1);
        }
    });

    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
    		  var qty = $(".qty").val();
          if(qty <= 2){
          $(".qtyminus").addClass("qtyminusGrey");
          }
    
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        field = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+field+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentValue) && currentValue > 1) {
            // Decrement one
            $('input[name='+field+']').val(currentValue - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+field+']').val(1);
        }
    });
    
    var qty = $(".qty").val();
    
    if(qty < 2)
		{$(".qtyminus").addClass("qtyminusGrey");} 
	
	});


// Creating New Shopping List

	function appendToList(){
	$("#shoppingLists").empty();
	if ($("#SLNew").val()!="")  saveChoice();

	$("pageone ul").empty();
	for (var key in chosenItems) {
	listvalue = chosenItems[key];
	
	//adding items to list
      	$('<li onclick="openShoppingList(this)">').append('<a href="#"><h3>' + listvalue + '</h3></a><a href="#" class="delete">Delete</a>').appendTo('#shoppingLists');
		}
	$("#shoppingLists").listview('refresh');
		}

	function saveChoice(){
		if (Object.keys(chosenItems).length == "0"){}
		else
			{counter =  parseInt(Object.keys(chosenItems).length) + 1}

						addShoppingList = $("#SLNew").val();
						chosenItems[counter] = addShoppingList;
						localStorage.setItem("SLView",JSON.stringify(chosenItems));
		}
	

	//Shopping List Items

	var currentList; 
	var addItems = {};
	var counterItems = "0";

	//access shopping list items
	function openShoppingList(obj){
	
		//show page with selected list
		$.mobile.changePage("#SLItem");

		//refresh the items list
		$("#SLINew").val('');
		currentList = "";
		$("#lblSLName").empty();
	
		//provide a name to the selected shopping list
		$("#lblSLName").append($(obj).text());
		currentList = $(obj).text();

		$("#" + currentList).empty();
	    $("#SLItems tr").empty();
        $("#SLItems td").empty();
		
		
		$("#SLItems thead tr").append("<th id='myDateValueList'> Date: </th>" + "<th colspan='3' class='edit' onclick='editBtton();'><span>edit</span></th>");
		
		var x = document.getElementById("myDate").value;
     	 document.getElementById("myDateValueList").innerHTML = x;
	     document.getElementById("myDateValueList").value = x;

		addItems = {};
		var w = localStorage.getItem(currentList);
		if (w!=null) {
			addItems = JSON.parse(w);
			itemAdd();}
			else{
				
			}	
	}
	
	function itemAdd(){
		
		$("#SLItems tr").empty();
        $("#SLItems td").empty();
		$("#SLItems thead tr").append("<th id='myDateValueItem'>Date: </th>" + "<th colspan='3' class='edit' onclick='editBtton();'><span>edit</span></th>");
		
		var x = document.getElementById("myDate").value;
        document.getElementById("myDateValueItem").innerHTML = x;
	    document.getElementById("myDateValueItem").value = x;
	 
		if ($("#SLINew").val()!="")  saveItemChoice();
		
		for (var key in addItems) {
			
		listvalue = addItems[key].split(",")[0];
		quantityitem = addItems[key].split(",")[1];
		
		addItem(listvalue,quantityitem);
	    }
	}

	function saveItemChoice(){
		if (Object.keys(addItems).length == "0"){}
			else{
				counterItems = parseInt(Object.keys(addItems).length) + 1;
				}

				addShoppingListItem = $("#SLINew").val();
				addItems[counterItems] = addShoppingListItem + "," + $("#itemQuantity").val() ;
				localStorage.setItem(currentList,JSON.stringify(addItems));
	}

		
	//
	function backToList(){
		$("#" + currentList).empty();
		$.mobile.changePage("#SLView");}
		
// Shopping List Items - Auto-Complete 

 $( function() {
    var availableItems = [
       "Asparagus",
       "Broccoli",
       "Carrots",
       "Cauliflower",
       "Celery",
       "Corn",
       "Cucumbers",
       "Lettuce",
       "Mushrooms",
       "Onions",
       "Peppers",
       "Potatoes",
       "Spinach",
       "Squash",
       "Zucchini",
       "Tomatoes",
       "BBQ sauce",
       "Gravy",
       "Honey",
       "Hot sauce",
       "Jam",
	   "Jelly",
	   "Preserves",
       "Ketchup",
	   "Mustard",
       "Mayonnaise",
       "Pasta sauce",
       "Relish",
       "Salad dressing",
       "Salsa",
       "Soy sauce",
       "Steak sauce",
       "Syrup",
       "Worcestershire sauce",
       "Butter",
	   "Margarine",
       "Cottage cheese",
       "Milk",
       "Sour cream",
       "Whipped cream",
       "Yogurt",
       "Bagels",
	   "Croissants",
       "Buns",
       "Cake",
       "Cookies",
       "Donuts",
       "Fresh bread",
       "Pie",
    ];
    $( "#SLINew" ).autocomplete({
      source: availableItems
    });
  } );

var id = 1; // unique id for list items

// triggered on Enter
$(document).on("keydown", function(e) {
	if(e.keyCode === 13) {
		getInput();
	}
});

// Toggle delete icon when edit button is clicked
function editBtton() {
	// Method two: 

   $(".cross").toggle();

}

// Obtaining customer input and then calling addItem() with the input
function getInput() {
	var custInput = $(".custinput");
	var input = custInput.val();

	if ((input !== "") && ($.trim(input) !== "")) {
	  //  addItem(input);
		custInput.val("");
	}
}

function addItem(message,quantityitem) {

	 $(".cross").hide(); // hiding the delete icon
	 
	 $("#SLItems").append("<tbody>");

	var checkbox = "<td class=\"check\">" + "<input type=\"checkbox\" id=\"item" + id + "\" class=\"box\">" + "<label for=\"item" + id + "\" class=\"check-label\"></label></td>";

	var content = "<td class=\"content\"><span>" + message + "</span></td>";

	var quantity = "<td align='center' class=\"qty\"><span>" + quantityitem + "</span></td>";
	
	var delIcon = "<td align='center'><img src=\"img/cross.png\" alt=\"cross\" class=\"cross\"></td>";

	$("#SLItems").append("<tr>" + checkbox + content + quantity + delIcon + "</tr>");
	$("#SLItems").append("</tbody>");
	id++;
}

$(document).ready(function(e) {
	

	$("tbody").on("click", ".cross", function() {
		$(this).closest("tr").remove();
	});

	$("button").on("click", getInput);

	$("tbody").on("click", ".box", function() {
		$(this).closest("tr").find("span").toggleClass("checked");
	});
});

//Delete shopping list
function DeleteList()
	{
		localStorage.removeItem(currentList);
						
		$("#" + currentList).empty();
		$.mobile.changePage("#SLView");
						
			for (var key in chosenItems) {
			     if(chosenItems[key] == currentList){
					delete chosenItems[key];}}
						
						localStorage.removeItem("SLView");
					    appendToList();}
						
						
