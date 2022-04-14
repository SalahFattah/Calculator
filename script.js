function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator,a,b){
    switch(operator){
        case "add":
            return add(a,b);
            
        case "substract":
            return substract(a,b);
            
        case "multiply":
            return multiply(a,b);
            
        case "divide":
            return divide(a,b);
            
    }

}

//Creating elements
let calcElements=document.querySelector(".operators");
function createElements(){
    for(let i=0;i<20;i++){
        let elem=document.createElement("div");
        elem.classList.add("elem");
        elem.style.width=parseInt(getComputedStyle(document.querySelector(".calculator")).getPropertyValue("width"))/4+"px";
        elem.style.height=parseInt(getComputedStyle(document.querySelector(".calculator")).getPropertyValue("width"))/5+"px";

        calcElements.appendChild(elem);
    }
}
createElements();