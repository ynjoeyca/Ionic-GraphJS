var stocks = [
	{	
		id: 1,
		company: "CAG",
		price: 33.66 
	},
	{ 	
		id: 2,
	  	company: "SBAC",
	  	price: 238.15
	},
	{	
		id: 3,
		company: "TWTR",
		price: 32.03 
	},
	{	id: 4,
		company: "NFLX",
		price: 332.22 
	},
	{	
		id: 5,
		company: "CTVA",
		price: 27.71 
	},
	{	
		id: 6,
		company: "DRI", 
		price: 109.03
	},
	{	
		id: 7,
		company: "ABMD", 
		price: 169.43 
	},
	{	
		id: 8,
		company: "FLT",
		price: 288.87
	},
	{
		id: 9,
		company: "SNA",
		price: 167.75 
	},
	{
		id: 10,
		company: "HBI",
		price: 14.51
	}
];
var highToLowButton = document.getElementById("highToLowButton");
var lowToHighButton = document.getElementById("lowToHighButton");



highToLowButton.addEventListener("click", function(){
	highToLow();
});
lowToHighButton.addEventListener("click", function(){
	lowToHigh();
});
function highToLow() {
stocks.sort(function(a, b){
	return b.price - a.price;
});
// console.log(stocks);
//Display all prices of the objects
for (var i = 0; i < stocks.length; i++){
	if(stocks[i].price < 100) {
	alert(stocks[i].company);
	alert(stocks[i].price);
	}
}
// alert(stocks);
}

function lowToHigh(){
stocks.sort(function(a, b){
	return a.price - b.price;
});
// console.log(stocks);
//Display all prices of the objects
for (var i = 0; i < stocks.length; i++){
	if(stocks[i].price < 100){
		alert(stocks[i].company);
		alert(stocks[i].price);
	} 
}
// alert(stocks);
}




// console.log(stocks[0].price);
// function highToLow() {
// 	if(stocks[0].price > stocks[1].price) {
// 		console.log(stocks[0].company + "is higher than " + stocks[1].company + ".");
// 	} else {
// 		console.log(stocks[0].company + "is lower than " + stocks[1].company + ".");
// 	}
// }

