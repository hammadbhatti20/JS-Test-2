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


//Chapter No: 6

//Q1
// var a = 10;
// document.write(`Result </br> The value of a is: ${a}`);
// ++a;
// document.write(`</br> </br> </br> The value of ++a is: ${a} </br> Now the value of a is: ${a}`);
// a++;
// document.write(`</br> </br> </br> The value of a++ is: 11 </br> Now the value of a is: ${a}`);
// --a;
// document.write(`</br> </br> </br> The value of --a is: ${a} </br> Now the value of a is: ${a}`);
// a--;
// document.write(`</br> </br> </br> The value of a++ is: 11 </br> Now the value of a is: ${a}`);

//Q2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--, result2 = --a, result3 = --a - --b, result4 = --a - --b + ++b, result5 = --a - --b + ++b + b--;
// document.write(`a is ${a} </br> b is ${b} </br> result is ${result} </br> result2 is ${result2} </br> result3 is ${result3} </br> result4 is ${result4} </br> result5 is ${result5}`);

//Q3
// var userFirstName = prompt("Enter Your First Name:");
// var userLastName = prompt("Enter Your Last Name:");
// alert("MR. " +userFirstName + userLastName + " Hello World!")

//Q4/5
// var table = +prompt("Enter Desire Table Number");
// if (table > 0) {
//     document.write("Table of ",table,"</br>",table," * 1 = ",table * 1,"</br>",table," * 2 = ",table * 2,"</br>",table," * 3 = ",table * 3,"</br>",table," * 4 = ",table * 4,"</br>",table," * 5 = ",table * 5,"</br>",table," * 6 = ",table * 6,"</br>",table," * 7 = ",table * 7,"</br>",table," * 8 = ",table * 8,"</br>",table," * 9 = ",table * 9,"</br>",table," * 10 = ",table * 10,);
// } else {
//     document.write("Table of ",5,"</br>",5," * 1 = ",5 * 1,"</br>",5," * 2 = ",5 * 2,"</br>",5," * 3 = ",5 * 3,"</br>",5," * 4 = ",5 * 4,"</br>",5," * 5 = ",5 * 5,"</br>",5," * 6 = ",5 * 6,"</br>",5," * 7 = ",5 * 7,"</br>",5," * 8 = ",5 * 8,"</br>",5," * 9 = ",5 * 9,"</br>",5," * 10 = ",5 * 10,);
// }; 

//Q6
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");
// var totalMarks = 100;
// var obtainedMarksSubject1 = parseFloat(prompt("Enter the obtained marks for " + subject1 + ":"));
// var obtainedMarksSubject2 = parseFloat(prompt("Enter the obtained marks for " + subject2 + ":"));
// var obtainedMarksSubject3 = parseFloat(prompt("Enter the obtained marks for " + subject3 + ":"));
// var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
// var totalPercentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
// document.write("</table>");
// document.write("<br>");
// document.write("Total Obtained Marks: " + totalObtainedMarks + "<br>");
// document.write("Total Percentage: " + totalPercentage.toFixed(2) + "%");


// Chapter 6 (Math Expression II)

//Q1
// var x = 99;
// x = x + 1 ;
// console.log(x);

//Q2
// x = x -1;
// console.log(x);

//Q3
// var x = 50; 
// var y = x++;
// console.log(y);

//Q4
// var y = 50; 
// var z = --y;
// console.log(z);

//Q5
// var num = 60, newNum = --num ;
// console.log(newNum);

//Q6
// var value = 1, newValue = value;
// console.log(newValue);

//Q7
// var value2nd = 2, newValue2nd = value2nd;
// alert(newValue2nd);


// Chapter 7 (Math Expression III)

//Q1
// var calculatedNum = 2 + (2 * 6);
// console.log(calculatedNum);

//Q2
// var calculatedNum2 = (2 + 2) * 6;
// console.log(calculatedNum2);

//Q3
// var calculatedNum3 = (2 + 2) * (4 + 2);
// console.log(calculatedNum3);

//Q4
// var calculatedNum4 = ((2 + 2) * 4) + 2;
// console.log(calculatedNum4);

//Q5
// var calculatedNum5 = (2 + 2) * (4 + 10);
// console.log(calculatedNum5);

//Q6
// var calculatedNum6 = (2 + 2) * (4 + 10);
// console.log(calculatedNum6);

//Q7
// var calculatedNum7 = (4 / 2) * 4;
// console.log(calculatedNum7);


// Chapter 8 (Concatenating Text Strings)

//Q1
// var numStr = "2" + "2";
// console.log(numStr);

//Q2
// var message = ("Hello," + "Dolly");
// console.log(message);

//Q3
// alert("33" + 3);

//Q4
// alert("Pakistan" + "Zindabad");

//Q5
// var Str = "hammadbhatti";
// var Num = 20;
// alert(Str + Num);

//Q6
// var n = "Hammad";
// var sN = " Bhatti";
// var fulName = n + sN;
// console.log(fulName);


// Chapter 9 (Prompts)

//Q1
// var my1stName = prompt("Enter first name");
// alert(my1stName);

//Q2
// var myCountry = prompt("Enter country name","China");
// alert(myCountry);

//Q3
// var yourName = prompt("Enter Your Name");
// alert(yourName);

//Q4
// var myMessage = prompt("Enter Your Message","Hello World!");
// alert(myMessage);

//Q5
// var messageNew = "Please enter your response:";
// var defaultResponse = "Hello World!";
// var userResponse = prompt(messageNew, defaultResponse);
// console.log("User's Response:", userResponse);

//Q6
// alert("User's Response:", userResponse);