var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function() {
	var data = JSON.parse(this.response);
	//1. Get all the countries from Asia continent /region using Filter function 
	var asiacountries = data.filter((element)=>{
		return element.region == "Asia";
	})
	console.log(asiacountries);
	//2.Get all the countries with population of less than 2 lacs using Filter function
	var population = data.filter((element)=>{
		return element.population<200000;
	})
	console.log(population);
	//3.Print the following details name, capital, flag using forEach function
	data.forEach((item) => {
		console.log(item.name,item.capital,item.flag);
	});
	//4.Print the total population of countries using reduce function
	var total = data.reduce((accumulator,element)=>{
		return accumulator+element.population;
	},0);
	console.log(total);
	//5.Print the country which use US Dollars as currency. 
	var usdollar = data.filter((element)=>{
		return element.currencies[0].name == "United States dollar";
	})
	console.log(usdollar);
}
