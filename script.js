function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return +(a*b).toFixed(5);
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
                elem.style.width="140px";
                elem.style.borderRadius="40px"
                break;
            case i==0&&j==1:
                elem.style.display="none"
                break;
            case i==0&&j==2:
                elem.textContent="+/-";
                elem.classList.add("plus-minus");
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
        display.textContent="ERROR";
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
        if(previousOperation.textContent==="Ans"){
        previousOperation.textContent="";
        fullString="";
    }
        display.textContent=display.textContent.slice(0,display.textContent.length-1);
        let sliced=fullString.slice(-1);
        fullString=fullString.slice(0,fullString.length-1);
        previousOperation.textContent=fullString;
        if(!+sliced){
        operator="";
        count=0;
    }
    
    }
    else if(e.target.textContent==="+/-"){
        if(+display.textContent>=0){
            display.textContent="-"+display.textContent;
            if(operator){
                console.log('wowo')
                console.log(operator);
            fullString=fullString.slice(0,fullString.indexOf(operator)+1)+"-"+fullString.slice(fullString.indexOf(operator)+1);
            previousOperation.textContent=fullString;
            console.log(fullString);

            }else{
            fullString=display.textContent;
            console.log("hjh")
            previousOperation.textContent=fullString;
        }
    }else{
        display.textContent=-+display.textContent;
        if(operator){
            console.log("before",fullString)
            fullString=fullString.slice(0,fullString.indexOf("-"))+fullString.slice(fullString.indexOf("-")+1);
            console.log("ffff",fullString)
            previousOperation.textContent=fullString;
        }else{
            fullString=display.textContent;
            previousOperation.textContent=fullString;
        }

    }
    }
    
    else{
        startOver(e);
        e.stopPropagation();
}
}



let count=0;
let result=0;
function startOver(e){
    if(e.target.textContent==="." && display.textContent.includes(".")){
        console.log("hooola");
        e.target.removeEventListener("click",click);
        e.target.addEventListener("click",click)

    }else{
        fullString+=e.target.textContent;
        previousOperation.textContent=fullString;
        display.textContent+=e.target.textContent;
    }  
    if([...e.target.classList].includes("operator") && fullString.length===0){
        console.log("aaah")
        e.target.removeEventListener("click",click);
        e.target.addEventListener("click",click)
        return;
} 

if([...e.target.classList].includes("operator")){
        count++;
        if(count>1){
            // console.log(fullString);
            firstOperator=+fullString.slice(0,fullString.indexOf(operator));
            secondOperator=fullString.slice(fullString.indexOf(operator)+1,fullString.length-1);
            if(secondOperator==="0"){
                console.log('hi')
                result=Infinity;
                clear();
                return;
            }
            secondOperator=+secondOperator;
            // console.log(secondOperator)
            if(!secondOperator){ 
                if(e.target.textContent==="="){
                fullString=fullString.slice(0,-1);
                previousOperation.textContent=fullString;
                display.textContent="";
                return;
                }else{
                operator=e.target.textContent
                fullString=firstOperator+operator;
                previousOperation.textContent=fullString;
                display.textContent=""
                return}
            }
            result=operate(operator,firstOperator,secondOperator);
            
            // console.log(result);
            display.textContent=result;
            if(e.target.textContent==="="){
                count=0;
                fullString=result;
                previousOperation.textContent="Ans";
            }else{
            operator=e.target.textContent;
            fullString=result+operator;
            previousOperation.textContent=fullString;
            display.textContent="";
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
        }
    }  

}