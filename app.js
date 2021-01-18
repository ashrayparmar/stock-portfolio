var stockName = document.querySelector("#name");
var stockPrice = document.querySelector("#price");
var stockQuantity = document.querySelector("#quantity");

var stock = stockName.value;
var price = stockPrice.value;
var quantity = stockQuantity.value;

var currentPrice = 1020;

if ( currentPrice > price) {
    var profit = currentPrice - price;
    console.log("Congrats you're in a profit of " + profit + " Rs")
}
else if ( currentPrice < price) {
    var loss = price - currentPrice;
    console.log("Sorry you're in a loss of " + loss + " Rs")
}
