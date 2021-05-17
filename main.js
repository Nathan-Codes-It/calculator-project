// const num1 = 0;

// let num2 = 0;

// let operation = "";
const num1 = document.querySelector("num1");
const num2 = document.querySelector("num2");
const button = document.querySelector("addition");
let answerDiv = document.querySelector("answer");

function runit(){

 num1 = Number (prompt("Enter the first number. "));

 num2 = Number (prompt("Enter the second number. "));

 operation = prompt("Enter the operation you wnat to perform(+ - * / **). ");

 console.log(callOperation());

}

function callOperation(){

 if (operation == "+"){

 return addition();

 }
 else if(operation == "-"){
   return subtraction();
 }
 else if(operation == "*"){
   return multiplication();
 }
 else if(operation == "/"){
   return division();
 }

}

function addition(){

 return num1 + num2;

}

function subtraction(){

 return num1 - num2;

}

function multiplication(){

 return num1 * num2;

}

function division(){

 return num1 / num2;

}

function exponent(){

 return num1 ** num2;

}

runit();    