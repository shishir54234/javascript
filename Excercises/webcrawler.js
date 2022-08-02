console.log('Welcome to tut 12.js');
let a = document;
a = document.all;
// a = document.body;
// a = document.forms[0];
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
q = document.links;
// use document.images and document.scripts and print the list of images and scripts on an html page
Array.from(q).forEach(element =>{
         console.log(element);
});