console.log("Learning about how to create objects")

var paragraph=document.createElement('div')
paragraph.className="childul"
paragraph.id="fake"
paragraph.innerHTML="<li>  vrinda </li>"
//var text=document.createTextNode(" Atrocities by humans on other humans would never end ")
paragraph.setAttribute("name","mihir")

//aragraph.appendChild(text)

let fetch=document.querySelector('li.childul')
fetch.append(paragraph)
//console.log(paragraph)

//You can also do this 
fetch.replaceWith(paragraph)
var paragraph1=document.createElement('div')
paragraph1.className="childul"
paragraph1.id="fake2"
paragraph1.innerHTML="<li> loml </li>"
let fetch1=document.getElementById("this")
//fetch1.replaceChild(paragraph, document.getElementById("lolol"))


let pr=paragraph.hasAttribute('href')

console.log(paragraph, pr)

// var heading=document.createElement('div23')
// heading.className="classy"
// heading.id="love"
// heading.innerHTML="PYAAR"
// heading.setAttribute("href", "https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-17/")
// let fetching=document.getElementById("heading")
// fetching.replaceWith(heading)


// This the method on how to create a link
var link=document.createElement("a")
var linktext=document.createTextNode("vrinda <3")

// link.appendChild(linktext)
// link.title="ya"
// link.id="heading"
// link.href="https://www.instagram.com/vrindeshmukhhh/"
// let fetching=document.getElementById("heading")
// fetching.replaceWith(link)
// console.log(link)

console.log("for love <3")

document.getElementById("heading").addEventListener("click", function(e){ 
    alert("you will fall for her");
    variable=e.target;
    variable=e.target.classList
    variable=Array.from(e.target.classList)
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    
    console.log(variable)


});

console.log("this is tut18")

let btn=document.getElementById("btn")
btn.addEventListener("click", func1);

function func1(e){
    console.log("thanks", e)
    e.preventDefault();
}
document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})

// You can always use e.preventDefaulty to prevent the error page from showing up when you submit (cause you havent designed wwhat
//     would happen if you submit)



// The events can be more than just click
// it can be:-

// 1. Double Click (Dblclick)
// 2. MouseMove (mousemover) when you hover it around that area this event happens/ When you move the mouse near the target it gets triggered
// 3. MouseDown (mousedown) when you click any button (right,left,centre) it will respons 


