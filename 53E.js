// 5.3E Questions 
//question creator Q1
document.getElementById("5.3EBtnQ1").addEventListener('click', function() {
	let name = parts.getName();
	let name2 = parts.getName();
	let largeDec = parts.getLargeDec();
	let dividend = parts.getDividend();
	let question = name +"'s dog weighs "+ largeDec+" pounds. "+ name2+"’s dog weighs "+dividend+" times as much as "+name+"’s dog. What does "+ name2+"'s dog weigh in pounds?";
	printQuestion(question);
	
});
//question creator Q2
document.getElementById("5.3EBtnQ2").addEventListener('click', function() {
	let name = parts.getName();
	let number = parts.getNumber();
	let item = parts.getItem();
	let divisor = parts.getDivisor();
	let question = 	name + " has " + number +" pieces of "+ item + " that each weigh "+ divisor + " ounces. What is the weight of these " + item + "s in ounces?";
	printQuestion(question);
});
//question creator Q3
document.getElementById("5.3EBtnQ3").addEventListener('click', function() {
	let name = parts.getName();
	let divisor1 = parts.getDivisor();
	let divisor2 = parts.getDivisor();
	let drink = parts.getDrink();
	let question = 	name + " drank " + divisor1 + " bottles of " + drink + " yesterday. Each bottle contained " + divisor2 + " pints of " + drink + ". What was the number of pints of " + drink +" "+ name + " drank yesterday?";
	printQuestion(question);

});
//question creator Q4
document.getElementById("5.3EBtnQ4").addEventListener('click', function() {
	let name = parts.getName();
	let number = parts.getNumber();
	let divisor = parts.getDivisor();
	let lgnumber = parts.getLgNumber();
	let pronoun = name.charAt(0) === "S" ? "she" : name.charAt(0) === "M" ? "she" : "he";
	let question = name + " exercised " + divisor + " hours per day on " + number + " days last week. " + pronoun.charAt(0).toUpperCase() + pronoun.slice(1) + " burned " + lgnumber + " calories per hour while exercising. How many calories did " + name + " burn by exercising last week?";
	printQuestion(question);
	
});
//question creator Q5
document.getElementById("5.3EBtnQ5").addEventListener('click', function() {
	let name = parts.getName();
	let dollar = parts.getDollar();
	let food = parts.getFood();
	let number = parts.getNumber();
	let question = 	name+" spent $"+dollar+" on "+food+" every month for "+number+ " days. What is the amount of money "+name+" spent on these "+food+"?";
	printQuestion(question);

});
//question creator Q6
document.getElementById("5.3EBtnQ6").addEventListener('click', function() {
	let name = parts.getName();
	let name2 = parts.getName();
	let dollar = parts.getDollar();
	let number = parts.getNumber();
	let number2 = parts.getNumber();
	let org = parts.getOrg();
	let question = 	name+" will make name tags for each of the "+number+" "+org+ " members and "+number2+" "+org+" sponsors. The materials for each name tag cost $"+dollar+". What is the total cost of the materials "+name+" will use to make these name tags?";
	printQuestion(question);

});