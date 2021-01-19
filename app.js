var stockName = document.querySelector("#name");
var stockPrice = document.querySelector("#price");
var stockQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#currentPrice");
var outputDiv = document.querySelector("#output");
var btn = document.querySelector("#btnCalculate");
var bgColor = ["#10B981","#EF4444"];

function calculate() {
    if(stockPrice.value == '' || stockQuantity.value == '' || currentPrice.value == '') {
        alert("Vlaues cannot be null")
    }    
    else if(stockName.value == ''){
        alert("Please enter stock name")
    }
    else {
        checkProfitLoss()
    }
}

function checkProfitLoss() {
    
    var buyPrice = stockPrice.value;
    var quantity = stockQuantity.value;
    var curPrice = currentPrice.value;
    var total = buyPrice*quantity;
    var curValue = curPrice*quantity;
    
    if(total === curValue) {
        outputDiv.innerHTML = "No profit and loss currently"        
    }
    else if(curValue> total) {
        var profit = curValue - total
        var profitPercent = Math.round((profit/total)*100);
        outputDiv.innerHTML= (stockName.value + " is giving you " + profitPercent+"% gain on Investment of "+ total +" Rs");
        outputDiv.style.backgroundColor = bgColor[0];
    }
    else {
        var loss = total - curValue
        var lossPercent = Math.round((loss/total)*100);
        outputDiv.innerHTML= (stockName.value + " is giving you " + lossPercent+"% gain on Investment of "+ total +" Rs");
        outputDiv.style.backgroundColor = bgColor[1];
    }
}


btn.addEventListener("click", calculate);