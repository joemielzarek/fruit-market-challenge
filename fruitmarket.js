// For this challenge, you will be working with 4 commodities; Apples, Oranges, Bananas, and Grapes. Delicious, right?
//
// When the application loads, you will need to have information for each of the commodities, specifically the name and the ‘market price’ of each. This information will need to be displayed in a meaningful way on the DOM.

  var beginPrice = randomCurrency(0.50, 9.99);
  var fruitList = ['Apples', 'Oranges', 'Bananas', 'Pears'];
  var fruitInfo = {
      name: fruitList[1],
      randomCurrency: beginPrice,
      // avgPrice: PLACEHOLDER
  };

  var appleBeginPrice = randomCurrency(0.50, 11.50);
  var orangesBeginPrice = randomCurrency(0.50, 11.50);
  var bananasBeginPrice = randomCurrency(0.50, 11.50);
  // var grapesBeginPrice = randomCurrency(0.50, 9.99);
  var pearsBeginPrice = randomCurrency(0.50, 11.50);

var fruitArray = [['Apples', appleBeginPrice], ['Oranges', orangesBeginPrice], ['Bananas', bananasBeginPrice], ['Pears', pearsBeginPrice]];


// Every 15 seconds, the prices should change however, and with it, the listed price on the DOM.
//Specifically, the market price of each of the items should fluctuate up or down 50 cents (between 1 cent and 50 cents) with each 15 second interval.
//Any given fruit is not allowed to go below a cost of 50 cents, or above the cost of 9 dollars and 99 cents.

  //CREATE FUNCTION TO change price every 15 seconds
    //Price to fluctuate between 1 and 50 cents each interval
    //Price is not allowed to go below a cost of 50 cents, or above the cost of 9 dollars and 99 cents.



// FUNCTION that flucuates price up and down
function Market(price) {
  var priceFlux = randomCurrency(-0.50, 0.50);


    for (var i = 0; i < fruitArray.length; i++) {
      priceFlux.toFixed(2);
    // Condition to determine prices within 50 cents
    if (priceFlux + fruitArray[i][1] < 0.50) {
      fruitArray[i][1] = 0.50;
    } else if (priceFlux + fruitArray[i][1] > 11.50) {
      fruitArray[i][1] = 11.50;
    } else {
      fruitArray[i][1] += priceFlux;
    }

  }
  console.log('New Price',fruitArray);
  return $('.appleLive').text('Current price: ' +'$' + (fruitArray[0][1]).toFixed(2)),
  $('.orangeLive').text('Current price: ' +'$' + (fruitArray[1][1]).toFixed(2)),
  $('.bananaLive').text('Current price: ' +'$' + (fruitArray[2][1]).toFixed(2)),
  $('.pearLive').text('Current price: ' +'$' + (fruitArray[3][1]).toFixed(2));
}

//Calls function
var intervalID = window.setInterval(Market, 5000);


// Available to the user is a ‘total cash’ and an inventory display that shows how much of each of the fruits they have purchased. Also in the user display, should be an ‘average purchased price’, which shows, on average, how much money they have spent on a given fruit in their inventory.
//
// Meaning that by clicking on the display for each of the fruits, allows the user to ‘buy’ one of the fruits, at market price, which will be deducted from the total cash. The user is not allowed to spend more than they have.
//
// The user will start with $100.
//
// Finally, style the whole experience with CSS!

$(document).ready(function() {
var totalCash = 100
// Appends starting price to DOM
$('.applePrice').append().text('Starting price: ' + '$' + appleBeginPrice);
$('.orangePrice').append().text('Starting price: ' + '$' + orangesBeginPrice);
$('.bananaPrice').append().text('Starting price: ' + '$' + bananasBeginPrice);
$('.pearPrice').append().text('Starting price: ' + '$' + pearsBeginPrice);


});















function fruitStock (arrayOfFruit) {


}








var fruitInfo = {};






// Starts Game
function Initializer(fruitList) {
    for(var i = 0; i < fruitList.length; i++) {

    }
}






function randomStartCurrency(min, max) {
    return Number((Math.random() * (max - min) + min).toFixed(2));
}

function randomCurrency(min, max) {
    return Number((Math.random() * (max - min) + min).toFixed(2));
}
