//question creator Q1
document.getElementById("5.3GBtnQ1").addEventListener('click', function() {
	let name = parts.getName();
	let number = parts.getNumber();
	let dollar = parts.getDollar();
	let pronoun = name.charAt(0) === "S" ? "she" : name.charAt(0) === "M" ? "she" : "he";
	let question = name + " saved a total of $" + dollar + " over " + number + " weeks. If " + pronoun + " saved the same amount of money each week. How much money did " + name + " save each week?";
	printQuestion(question);
});
//question creator Q2
document.getElementById("5.3GBtnQ2").addEventListener('click', function() {
	let name = parts.getName();
	let number = parts.getNumber();
	let recurring = parts.getRecurring();
	let dollar = parts.getDollar();
	let pronoun = name.charAt(0) === "S" ? "she" : name.charAt(0) === "M" ? "she" : "he";
	let question = name + " paid a total of $" + dollar + " for a " + number + "-month " + recurring + " subscription. " + pronoun.charAt(0).toUpperCase() + pronoun.slice(1) + " paid the same amount each month. What amount did " + name + " pay each month?";
	printQuestion(question);
});
//question creator Q3
document.getElementById("5.3GBtnQ3").addEventListener('click', function() {
	let name = parts.getName();
	let number = parts.getNumber();
	let recurring = parts.getRecurring();
	let item = parts.getItem();
	let largeDec = parts.getLargeDec();
	let pronoun = name.charAt(0) === "S" ? "she" : name.charAt(0) === "M" ? "she" : "he";
	let question = "A " + item + " was " + largeDec + " inches long. " + name + " cut the " + item + " into " + number + " pieces of equal length. What was the length of each piece of " + item + " in inches?";
	printQuestion(question);
});
//question creator Q4
document.getElementById("5.3GBtnQ4").addEventListener('click', function() {
	let dividend = parts.getDividend();
	let divisor = parts.getDivisor();
	let question = "What is the quotient when " + dividend + " is divided by " + divisor + "?";
	printQuestion(question);
});
//question creator Q5
document.getElementById("5.3GBtnQ5").addEventListener('click', function() {
	let name = parts.getName();
	let pronoun = name.charAt(0) === "S" ? "she" : name.charAt(0) === "M" ? "she" : "he";
	let dollar = parts.getDollar();
	let number = parts.getNumber();
	let question = name + " has a goal of saving $" + dollar + ". " + pronoun.charAt(0).toUpperCase() + pronoun.slice(1) + " will save the same amount each week for " + number + " weeks. How much will " + name + " need to save each week in order to meet this goal?";
	printQuestion(question);
});
