// //Chapter No: 4

//Q1
// var name = "Hammad Bhatti", fName = "M.Aslam Bhatti", age = 24;

//Q2
// //legalVariableNames
// var myHobby = "Learning";
// var myScoreInTest123 = 75;
// var _Eduction = "Intermediate";
// var $Dream = "MERN Stack Developer";
// var MYinstitue = "Jawan Pakistan";

// //illegalVariableNames
// //var 123name = "abc";
// //var email@gmail.com = "abc@gmail.com";
// //var class = "myClassName";
// //var father name = "M Aslam";
// //var console.log = "developer tool"

//Q3
// document.write("<h1>Rules for naming JS variables”</h1>","</br>","Variable names can only contain ,numbers, $ and _ .For example <b>$my_1stVariable</b>","</br>","Variables must begin with a letter, $ or _ sign .For example <b>$name, _name, or name</b>","</br>","Variable names are case sensitive","</br>","Variable names should not be JS keywords");


// //Chapter No: 5

// //Q1
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.write(`Sum of ${num1} and ${num2} is`,sum);

//Q2
// var num1 = 3;
// var num2 = 5;
// var sum = ((num1 % num2) + (num1 / num2) - (num1 * num2));
// console.log(sum);

//Q3
// var numValue;
// document.write(`Value after variable declaration is: ${numValue}.`,"<br>");
// numValue = 5;
// document.write(`Initial value: ${numValue}.`,"<br>");
// ++numValue;
// document.write(`Value after increment is: ${numValue}`,"<br>");
// numValue = numValue + 7;
// document.write(`Value after addition is: ${numValue}`,"<br>");
// --numValue;
// document.write(`Value after decrement is: ${numValue}`,"<br>");
// numValue = numValue % 3;
// document.write(`The remainder is : ${numValue}`);

//Q4
// var movieTicket = 600;
// var fiveTickets = 5;
// var totalPrice = movieTicket * fiveTickets;
// document.write(`Total cost to buy ${fiveTickets} tickets to a movie is ${totalPrice}PKR`);

//Q5
// var table = 4;
// document.write("Table of 4","</br>","4 * 1 = ",table * 1,"</br>","4 * 2 = ",table * 2,"</br>","4 * 3 = ",table * 3,"</br>","4 * 4 = ",table * 4,"</br>","4 * 5 = ",table * 5,"</br>","4 * 6 = ",table * 6,"</br>","4 * 7 = ",table * 7,"</br>","4 * 8 = ",table * 8,"</br>","4 * 9 = ",table * 9,"</br>","4 * 10 = ",table * 10,);

//Q6
// var celsiusTemperature = 25;
// var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
// document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F","</br>");
// var fahrenheitTemperature2 = 70;
// var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
// document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");

//Q7
// var priceOfItem1 = 650;
// var priceOfItem2 = 100;
// var orderedQuantityOfItem1 = 3;
// var orderedQuantityOfItem2 = 7
// var shippingCharges = 100
// var totalCost = ((priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2)+ shippingCharges);
// document.write(`<h1>Shoping Cart</h1> </br> </br> </br> Price of item 1 is ${priceOfItem1} </br> Quantity of item 1 is ${orderedQuantityOfItem1} </br> Price of item 2 is ${priceOfItem2} </br> Quantity of item 2 is ${orderedQuantityOfItem2} </br> Shipping charges ${shippingCharges} </br> </br> Total cost of your order is ${totalCost}`);

//Q8
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write(`<h1>Marks Sheet</h1> </br> </br> </br> Total marks: ${totalMarks} </br> Marks obtained: ${marksObtained} </br> Percentage: ${percentage}%`);

//Q9
// var usDollars = 10;
// var saudiRiyals = 25;
// var exchangeRateUSD = 104.80;
// var exchangeRateSAR = 28;
// var totalInPakRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);
// document.write(`<h1>Currency in PKR</h1> </br> </br> </br> Total Currency in PKR: 1748`);

//Q10
// var initialNumber = 8;
// var result = (((initialNumber + 5) * 10) / 2);
// document.write("Result: " + result);

//Q11
// var currentYear = 2024;
// var birthYear = 2000;
// var age = currentYear - birthYear;
// document.write(`<h1>Age Calculator</h1> </br> </br> </br> Current Year: ${currentYear} </br> Birth Year: ${birthYear} </br> Your Age is: ${age}`);

//Q12
// var radius = 20;
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * Math.pow(radius, 2);
// document.write(`<h1>The Geometrizer</h1> </br> </br> </br> Radius of a circle: ${radius} </br> The circumference is: ${circumference.toFixed(2)} </br> The area is: ${area.toFixed(2)}`);

//Q13
// var favoriteSnack = "Chicken Broast"; 
// var currentAge = 24; 
// var maximumAge = 70;
// var snacksPerDay = 1; 
// var yearsRemaining = maximumAge - currentAge;
// var totalSnacksNeeded = yearsRemaining * 365 * snacksPerDay;

// document.write(`<h1>The Lifetime Supply Calculator</h1> </br> </br> </br> Fovurite Snack: ${favoriteSnack} </br> Current age: ${currentAge} </br> Estimated Maximum Age: ${maximumAge} </br> Amount of snacks per day: ${snacksPerDay} </br> You will need ${totalSnacksNeeded} ${favoriteSnack} to last you until the ripe old age of ${maximumAge}`);

