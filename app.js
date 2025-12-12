alert("Welcome to JavaScript!");


let userName = prompt("What is your name?");
alert("Hello " + userName + "! Nice to meet you ");


let color = prompt("What is your favorite color?");
alert("Wow! " + color + " is a beautiful color! ");


let firstName = "Ali";
let lastName = "Khan";
alert("Your full name is " + firstName + " " + lastName);

let city = "Karachi";
alert("You live in " + city);


let hobby = "painting";
alert("Your hobby is " + hobby + "! That sounds fun ");


var num = 8;
if (num > 0 && num % 2 === 0) {
  alert("The number is positive and even");
}

      let num1 = 10;
        let num2 = 20;
        let sum = num1 + num2;
        alert("The sum of " + num1 + " and " + num2 + " is " + sum); // Q1

        let marks = 65;
        if (marks >= 50) {
            alert("Pass"); // Q2
        } else {
            alert("Fail");
        }

        let age = 20;
        if (age > 18) {
            alert("You are above 18 years old"); // Q3
        } else {
            alert("You are 18 or younger");
        }
var mark = 75;
if (marks >= 50 && marks <= 100) {
  alert("Valid Marks");
}

var num = 12;
var num = 4;

var product = num1 * num2;
var quotient = num1 / num2;
var remainder = num1 % num2;

alert("Product: " + product);
alert("Quotient: " + quotient);
alert("Remainder: " + remainder);


var number = 7;
number++;

alert("After increment: " + number);



var num = 10;
var num = 5;
var num = 2;

var result1 = (num1 + num2) * num3;
alert("Q1 Result: " + result1);

var a = 6;
var b = 3;
var c = 2;

var result2 = a + b * c - 1;
alert("Q2 Final Result: " + result2);


var x = 8;
var y = 4;
var z = 2;

var result3 = ((x + y) * z) / 2;
alert("Q3 Result after parentheses: " + result3);



       
        let favoriteColor = prompt("What is your favorite color?");
        if(favoriteColor !== null && favoriteColor !== "") {
            alert("Your favorite color is " + favoriteColor);
        }
    
        let ag = prompt("What is your age?");
        if(age !== null && age !== "") {
            alert("Your age is " + age);
        }

        let favoriteFruit = prompt("What is your favorite fruit?");
        if(favoriteFruit !== null && favoriteFruit !== "") {
            alert("Your favorite fruit is " + favoriteFruit);
        }





let num = Number(prompt("Enter first number:"));
let num = Number(prompt("Enter second number:"));

alert(num1 + " > " + num2 + " : " + (num1 > num2));

if(num1 == num2){
    alert("Numbers are equal");
} else {
    alert("Numbers are not equal");
}

alert(num1 + " <= " + num2 + " : " + (num1 <= num2));






var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
alert(fruits);

var numbers = [10, 20, 30, 40, 50];
alert("First number: " + numbers[0]);
alert("Last number: " + numbers[numbers.length - 1]);

var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
alert(colors);
















// Q3: Check if number is divisible by 3 and 5
var number = 30;
if (number % 3 === 0 && number % 5 === 0) {
  alert("The number is divisible by 3 and 5");
}
