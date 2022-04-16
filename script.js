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
    return +(a/b).toFixed(5);
}

function operate(operator,a,b){
    switch(operator){
        case "+":
            return add(a,b);
            
        case "-":
            return substract(a,b);
            
        case "x":
            return multiply(a,b);
            
        case "/":
            return divide(a,b);
            
    }

}



//Creating elements
let calcElements=document.querySelector(".operators");
function createElements(){
    let num=7;
    for(let i=0;i<5;i++){
        for(let j=0;j<4;j++){
        let elem=document.createElement("button");
        elem.classList.add("elem");
        elem.style.width=parseInt(getComputedStyle(document.querySelector(".calculator")).getPropertyValue("width"))/5+"px";
        elem.style.height=parseInt(getComputedStyle(document.querySelector(".calculator")).getPropertyValue("width"))/5+"px";
        calcElements.appendChild(elem);
        switch(true){
            case i==0&&j==0:
                elem.textContent="AC";
                elem.classList.add("clear");
                // elem.classList.add("operator");
                break;
            case i==0&&j==1:
                elem.textContent="+/-";
                elem.classList.add("plus-minus");
                // elem.classList.add("operator");
                break;
            case i==0&&j==2:
                elem.textContent="%";
                elem.classList.add("percentage");
                elem.classList.add("operator");
                break;
            case i==0&&j==3:
                elem.textContent="C";
                elem.classList.add("delete");
                break;

            case i==1&&j==0:
                elem.textContent=num;
                num++;
                break;
            case i==1&&j==1:
                elem.textContent=num;
                num++;
                break;
            case i==1&&j==2:
                elem.textContent=num;
                num-=5;
                break;
            case i==1&&j==3:
                elem.textContent="/";
                elem.classList.add("divide");
                elem.classList.add("operator");
                break;

            case i==2&&j==0:
                elem.textContent=num;
                num++;
                break;
            case i==2&&j==1:
                elem.textContent=num;
                num++;
                break;
            case i==2&&j==2:
                elem.textContent=num;
                num-=5;
                break;
            case i==2&&j==3:
                elem.textContent="x";
                elem.classList.add("multiply");  
                elem.classList.add("operator"); 
                break;

            case i==3&&j==0:
                elem.textContent=num;
                num++;
                break;
            case i==3&&j==1:
                elem.textContent=num;
                num++;
                break;
            case i==3&&j==2:
                elem.textContent=num;
                num-=5;
                break;
            case i==3&&j==3:
                elem.textContent="-";
                elem.classList.add("substract");
                elem.classList.add("operator");
                break;
                
            case i==4&&j==0:
                elem.textContent=0;
                break;
            case i==4&&j==1:
                elem.textContent=".";
                elem.classList.add("dot");
                break;
            case i==4&&j==2:
                elem.textContent="=";
                elem.classList.add("equal");
                elem.classList.add("operator");
                break;
            case i==4&&j==3:
                elem.textContent="+";
                elem.classList.add("add");
                elem.classList.add("operator");
        }
    }

}
}
createElements();

const display=document.createElement("span");
document.querySelector(".result").appendChild(display);

const previousOperation=document.createElement("div");
previousOperation.classList.add("previous");
document.querySelector(".result").insertBefore(previousOperation,display);


document.querySelectorAll(".elem").forEach(elem=>elem.addEventListener("click",click));

let firstOperator="";
let operator="";
let secondOperator="";
let fullString="";
function clear(){
    if(result===Infinity){
        display.textContent="Can't divide by 0";
    }else{
    display.textContent="";
    }
    previousOperation.textContent="";
    fullString="";
    firstOperator="";
    operator="";
    secondOperator="";
    count=0;
    result=0;
}

function click(e){
    if(e.target.textContent==="AC"){
        clear();
    }else if(e.target.textContent==="C"){
        fullString=fullString.slice(0,fullString.length-1);
        previousOperation.textContent=fullString;
        operator="";
        count=0;
    }else{
        startOver(e);
        e.stopPropagation();
}
}



let count=0;
let result=0;
function startOver(e){
    fullString+=e.target.textContent;
    previousOperation.textContent=fullString;
    if([...e.target.classList].includes("operator")){
        count++;
        if(count>1){
            console.log(fullString);
            firstOperator=+fullString.slice(0,fullString.indexOf(operator));
            secondOperator=+fullString.slice(fullString.indexOf(operator)+1,fullString.length-1);
            if(!secondOperator){
                
                operator=e.target.textContent
                fullString=firstOperator+operator;
                previousOperation.textContent=fullString;
                return
            }
            result=operate(operator,firstOperator,secondOperator);
            console.log(result);
            if(result===Infinity){
                clear();
                return;
            }else{
            display.textContent=result;
            }
            if(e.target.textContent==="="){
                count=0;
                fullString=result;
                previousOperation.textContent="Ans";
            }else{
            operator=e.target.textContent;
            fullString=result+operator;
            previousOperation.textContent=fullString;
            }
            

        }else{
            if(e.target.textContent==="="){
                count=0;
                fullString=fullString.slice(0,fullString.indexOf("="));
                display.textContent=fullString;
                return;
            }
        operator=e.target.textContent;
        display.textContent="";
        console.log("capture first operator",operator);
        }
            
    }
}