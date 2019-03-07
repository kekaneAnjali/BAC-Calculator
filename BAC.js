
/*Create a Blood Alcohol Content (BAC) calculator using forms and events. This form should also use HTML5 form elements and be accessible.
 (10 points)

The calculations go as follows:

Determine liquid ounces of alcohol consumed.
1 beer = .54 liquid ounces of alcohol
1 glass of wine = .6 liquid ounces of alcohol
1 shot = .6 liquid ounces of alcohol
Multiple liquid ounces of alcohol by 7.5 (average alcohol absorption rate)
Divide by weight (lbs) to determine BAC
Subteach hour since first drinkract 0.015 for 
Round percentage to 3 decimal places (ex. “0.080%”)*/

$(init);
function init() {
	// Replace these two lines with jQuery
	//document.getElementById("qtyBook").onchange = updateTotal;
	//document.getElementById("qtyDonation").onchange = updateTotal;
$("#qtyBeer").change(updateTotal);
$("#qtyWine").change(updateTotal);
$("#qtyShot").change(updateTotal);
$("#qtyTime").change(updateBAC);
}

// Fill in this function using jQuery only! Do not use document.getElementById()
function updateTotal() {
	// STEP ONE - GET THE QUANTITIES
	
	// Declare variables for the Beer,wine,shot quantity.

var quaBeer,quaWine,quaShot;
	  
	// Get the values of  quantities from the input boxes ("qtyBeer", "qtyWine","qtyShot")
	quaBeer=$("#qtyBeer").val();
    quaWine=$("#qtyWine").val();
    quaShot=$("#qtyShot").val();

	// Parse the values to number types
	quaBeer=parseFloat(quaBeer);
    quaWine=parseFloat(quaWine);
    quaShot=parseFloat(quaShot);
	
	
	// STEP TWO - GET THE UNIT PRICES
	
	
	// Declare variables for the beer,wine,shot unit price
	var alcoholBeer,alcoholWine,alcoholShot;

	
	// Get the values of  unit prices from the spans ("priceBook" and "priceDonation")
	alcoholBeer=$("#beerAlcohol").html();
	alcoholWine=$("#wineAlcohol").html();
    alcoholShot=$("#shotAlcohol").html();

	// Parse the values to number types
	alcoholBeer=parseFloat(alcoholBeer);
    alcoholWine=parseFloat(alcoholWine);
    alcoholShot=parseFloat(alcoholShot);

	
	
	
	// STEP THREE - CALCULATE AND SHOW SUBTOTALS

	
	// Declare variables for the beer,wine,shot subtotal 
	var subBeerAlcohol,subWineAlcohol,subShotAlcohol;

	// Calculate the beer,wine,shot subtotal and assigning to variables
	subBeerAlcohol=quaBeer*alcoholBeer;
    subWineAlcohol=quaWine*alcoholWine;
    subShotAlcohol=quaShot*alcoholShot;
	// Update the text of the subtotal spans ("totalBeer", "totalWine &totalShot") with the calculated subtotal values
	
	$("#totalBeerAlcohol").html(subBeerAlcohol.toFixed(2));
    $("#totalWineAlcohol").html(subWineAlcohol.toFixed(2));
    $("#totalShotAlcohol").html(subShotAlcohol.toFixed(2));



	
	// STEP FOUR - CALCULATE AND SHOW TOTAL
	
	// Declare a variable for the grand total
	var grandTotal;
	
	
	// Calculate the grand total, assigning it to the variable
	grandTotal=subBeerAlcohol+subWineAlcohol+subShotAlcohol;
	// Update the text of the grand total span ("grandTotal") with the calculated total
	$("#grandTotal").html(grandTotal.toFixed(2));
	

}

function updateBAC() {
	var grandAlcoholCount, personWeight,bacount, hoursPassed;
	grandAlcoholCount=$("#grandTotal").html();
	//Multiple liquid ounces of alcohol by 7.5 (average alcohol absorption rate)
	grandAlcoholCount = parseFloat(grandAlcoholCount)*7.5;
	personWeight=$("#qtyWeight").val();
	personWeight = parseFloat(personWeight);
	hoursPassed=$("#qtyTime").val();
	hoursPassed = parseFloat(hoursPassed);
	//Divide by weight (lbs) to determine BAC
	//Subteach hour since first drinkract 0.015 
	bacount = (grandAlcoholCount) /personWeight- (hoursPassed *0.015);
	//Round percentage to 3 decimal places (ex. “0.080%”)*/

	$("#BACount").html(bacount.toFixed(3));
}	