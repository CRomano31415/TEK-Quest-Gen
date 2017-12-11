//Global vars
var parts = {
	name: ["Sarah", "Pedro", "Johnny", "Sarai", "Marisol", "Jacob", "Derek", "Soraya", "Maria", "Melody", "Misha", "Carlos", "Peter", "Tobi", "Kobe"],
	number: [24, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
	lgnumber: [100, 120, 140, 130, 125, 115, 112, 215, 210, 200, 225, 150, 155, 124, 108, 116, 212, 240],
	item: ["rope", "wood", "string", "fabric", "fence", "yarn", "stick", "ribbon"],
	drink: ["milk", "water", "kool aid", "gatorade", "soda", "Sprite", "Coke", "iced tea", "coffee", "tea", "hot chocolate", "agua fresca"],
	timelength: ["months", "weeks", "years", "hours", "days", "minutes"],
	food: ["chips", "tacos", "Doritos", "Cheetos", "nachos", "cookies", "chocolate", "apples"],
	org: ["church", "robotics club", "sewing club", "basketball team", "soccer club", "creative writing club", "chess club", "dance club", "volleyball club", "student council"],
	largeDec: [14.25, 12.50, 15.25, 10.15, 144.20, 22.25, 57.52, 51.5, 48.2, 39.3],
	lgDec: [14.25, 12.50, 15.25, 10.15, 144.20, 22.25, 57.52, 51.5, 48.2, 39.3],
	recurring: ["magazine", "mail order", "grocery", "clothing mail delivery", "iTunes", "online app", "game", "cable"],
	divisor: [0.25, 0.2, 0.5, 0.75, 0.8, 0.6, 0.1, 0.15, 0.45, 0.55, 0.90, 0.85, 0.82, 0.44, 1.25, 2.25, 1.44, 1.85, 3.5],
	dividend: [2, 1.2, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5],
	getName: function() {
		return this.name[Math.round(Math.random() * (this.name.length - 1) + 0)];
	},
	getRecurring: function() {
		return this.recurring[Math.round(Math.random() * (this.recurring.length - 1) + 0)];
	},
	getNumber: function() {
		return this.number[Math.round(Math.random() * (this.number.length - 1) + 0)];
	},
	getLgNumber: function() {
		return this.lgnumber[Math.round(Math.random() * (this.lgnumber.length - 1) + 0)];
	},
	getDrink: function() {
		return this.drink[Math.round(Math.random() * (this.drink.length - 1) + 0)];
	},
	getOrg: function() {
		return this.org[Math.round(Math.random() * (this.org.length - 1) + 0)];
	},
	getFood: function() {
		return this.food[Math.round(Math.random() * (this.food.length - 1) + 0)];
	},
	getDividend: function() {
		return this.dividend[Math.round(Math.random() * (this.dividend.length - 1) + 0)];
	},
	getDivisor: function() {
		return this.divisor[Math.round(Math.random() * (this.divisor.length - 1) + 0)];
	},
	getLargeDec: function() {
		return this.largeDec[Math.round(Math.random() * (this.largeDec.length - 1) + 0)];
	},
	getTimeLength: function() {
		return this.timelength[Math.round(Math.random() * (this.timelength.length - 1) + 0)];
	},
	getItem: function() {
		return this.item[Math.round(Math.random() * (this.item.length - 1) + 0)];
	},
	getDollar: function() {
		return Math.round(100 * (Math.random() * (100 - 1) + 10)) / 100;
	}
};
function printQuestion(question) {
	const div53 = document.getElementById("5.3Div");
	div53.innerHTML = question;
};

// //menu div show 
// document.getElementById("53GLink").addEventListener('click', function() {
// 	const container53G = document.getElementById("53GContainer");
// 	const div53 = document.getElementById("53QuestionDiv");
// 	container53G.classList.toggle("show");
// 	div53.classList.toggle("show");
// });
// //menu div show 
// document.getElementById("53ELink").addEventListener('click', function() {
// 	const container53E = document.getElementById("53EContainer");
// 	const div53 = document.getElementById("53QuestionDiv");
// 	container53E.classList.toggle("show");
// 	div53.classList.toggle("show");
// });

