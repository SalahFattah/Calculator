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
        elem.style.width=parseInt(getComputedStyle(document.querySelector(".calculator")).getPropertyValue("width"))/4+"px";
        elem.style.height=parseInt(getComputedStyle(document.querySelector(".calculator")).getPropertyValue("width"))/5+"px";
        calcElements.appendChild(elem);
        switch(true){
            case i==0&&j==0:
                elem.textContent="(";
                elem.classList.add("left-parenthesis");
                elem.classList.add("operator");
                break;
            case i==0&&j==1:
                elem.textContent=")";
                elem.classList.add("right-parenthesis");
                elem.classList.add("operator");
                break;
            case i==0&&j==2:
                elem.textContent="%";
                elem.classList.add("percentage");
                elem.classList.add("operator");
                break;
            case i==0&&j==3:
                elem.textContent="AC";
                elem.classList.add("clear");
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
                // elem.classList.add("operator");
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

let display=document.createElement("span");
document.querySelector(".result").appendChild(display);

window.addEventListener("click",click);

function click(e){
    if(e.target.textContent==="AC"){
        display.textContent="";
    }
    else if(e.target.nodeName==="BUTTON"){
        display.textContent+=e.target.textContent;
        storeFirstVariable(e);
        storeOperator(e);
        // storeSecondVariable(e);
    }if(e.target.textContent=="="){
        console.log("hhh");
        let first=storeFirstVariable(e);
        let opr=storeOperator(e);
        let second=storeSecondVariable(e);
        console.log(first,opr,second);
        display.textContent=operate(opr,first,second);
    }
}

let firstOperator="";
let operator="";
let secondOperator="";

function storeFirstVariable(e){
    firstOperator+=e.target.textContent;
    return parseInt(firstOperator);
}

function storeOperator(e){
    
    
    if([...e.target.classList].includes("operator")){
        operator=e.target.textContent;
        display.textContent="";
    }
        // e.target.classList.add("active-operator");
        return  operator
    
}

function storeSecondVariable(e){
    secondOperator=display.textContent;
    if([...e.target.classList].includes("equal")){
        display.textContent="";
    }
    // console.log(parseInt(secondOperator));
        return parseInt(secondOperator);
    
}