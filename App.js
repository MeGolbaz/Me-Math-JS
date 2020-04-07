

// mouse tracker
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const Element = document.getElementById("point");
function mouseTracker(evt) {
    let x = (evt.clientX - WIDTH)/15 ;
    let y = (evt.clientY - HEIGHT)/15 ;

    let move = `translate(${x}px, ${y}px)`;
    Element.style.transform = move;
}
window.addEventListener("mousemove",mouseTracker);
let Input = document.querySelector("input#num");
let section = document.querySelector("section");



// input



let first = Math.floor(Math.random()*10);
let second = Math.floor(Math.random()*10);
let third = Math.floor(Math.random()*10);

let rancode = [first,second,third]
// let fresult === "result";

// console.log(rancode);
let template = "";

template = `(<span id="num1">${first} </span>+ <span id="num2">${second} </span> ) * <span id="num3">${third}= </span>`
    // console.log(template);

// let result = (first + second) * third;
let random = document.querySelector("div#soheil");
// console.log(random);
random.innerHTML = template;

var result = (first + second) * third;
// console.log( result);

function showsection() {
    console.log( result);
    if (Number(Input.value) === result){
        section.style.display= "flex";
        document.querySelector("form").style.display = "none";
        document.querySelector("body").style.background = "darkred";

    }
}
// showsection(result);



