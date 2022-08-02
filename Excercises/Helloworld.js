//console.log('Hello world!');
var num1=34;
var num2=35;
console.log(num1+num2);
console.log("get rekt bitch")
//4. Data types in JavaScript

//Strings
var str1='This is a string';
var str2="hahaha nigga i love vrinda and her ass";

//  Objects 
var marks={
    ravi: 34,
    shubham: 78,
    harry: 99.99997
};
// console.log(marks);

//Booleans

var a=true;
var b=false;
// console.log(str1, str2);
// console.log(a, b);

// any element is undefined only from the start or you can define it to be undefined 
var und= undefined;

/*
    At a very high level, there are two types of data types in JavaScript 
    1. Primitive data types: undefined, null, number, string, boolean, symbol
    2. Reference data types: Arrays and Objects 
*/
 var arr=[1,2,3,5,5,undefined]; // be a nigga and be proud of ur heritage 

 //Operators in JavaScript 
 // What happens here is:-
 // Addition, Subtraction, And Operator, Etc etc


 //Functions in JavaScript 

 function avg(a, b)
 {
    return (a+b)/2;
 }
 c=avg(4, 6);
 c2= avg(10, 14);
 console.log(c, c2);

 // if-else ladder

 var age=56;

 if(age>32)
 {
    console.log("i love u vrinda sm im ngl i love u i love u");
 }
 else if(age>2)
 {
    console.log("sorry ur not my type-- vrinda ");
 }

 // LOoops in JavaScript

 var arr=[1,2,3,4,5,6]
 console.log(arr)
 for(var i=0;i<arr.length;i++)
 {
    console.log(arr[i]);
 }
 let j=0;
 while(j<arr.length)
 {
    console.log("vrinda");
    j++;
 }



 // Array Methods 
 //if you do arr_name.pop() the last element will get popped from the array
// if you do arr_name.push("Harry") it will add this at the last 
//arr_name.shift --> removes the first element from the array 
//arr_name.unshift("harry")--> adds at the start
let myArr=["Fan", "Camera", 34, null, true];

console.log(myArr.length);
const newLen= myArr.unshift("Harry");
console.log(newLen);
console.log(myArr);


//DOM manipulation
//Adding Elements to the page
const body=document.body
body.append("hello world")//You will see at the site that this is addded, you can add strings,elements, tags etc through this
//body.appendChild("Hello world")// You can't add strings using this only the other stuff you can
//You can only append one thing at a time in appendChild 


