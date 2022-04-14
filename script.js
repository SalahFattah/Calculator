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
                break;
            case i==0&&j==1:
                elem.textContent=")";
                elem.classList.add("right-parenthesis");
                break;
            case i==0&&j==2:
                elem.textContent="%";
                elem.classList.add("percentage");
                break;
            case i==0&&j==3:
                elem.textContent="AC";
                elem.classList.add("clear");
                break;

            case i==1&&j==0:
                elem.textContent=num;
                // elem.classList.add("seven");
                num++;
                break;
            case i==1&&j==1:
                elem.textContent=num;
                // elem.classList.add("right-parenthesis");
                num++;
                break;
            case i==1&&j==2:
                elem.textContent=num;
                // elem.classList.add("percentage");
                num-=5;
                break;
            case i==1&&j==3:
                elem.textContent="/";
                elem.classList.add("divide");
                break;

            case i==2&&j==0:
                elem.textContent=num;
                // elem.classList.add("left-parenthesis");
                num++;
                break;
            case i==2&&j==1:
                elem.textContent=num;
                // elem.classList.add("right-parenthesis");
                num++;
                break;
            case i==2&&j==2:
                elem.textContent=num;
                num-=5;
                // elem.classList.add("percentage");
                break;
            case i==2&&j==3:
                elem.textContent="x";
                elem.classList.add("multiply");   
                break;

            case i==3&&j==0:
                elem.textContent=num;
                // elem.classList.add("left-parenthesis");
                num++;
                break;
            case i==3&&j==1:
                elem.textContent=num;
                // elem.classList.add("right-parenthesis");
                num++;
                break;
            case i==3&&j==2:
                elem.textContent=num;
                // elem.classList.add("percentage");
                num-=5;
                break;
            case i==3&&j==3:
                elem.textContent="-";
                elem.classList.add("substract");
                break;
                
            case i==4&&j==0:
                elem.textContent=0;
                // elem.classList.add("left-parenthesis");
                break;
            case i==4&&j==1:
                elem.textContent=".";
                elem.classList.add("dot");
                break;
            case i==4&&j==2:
                elem.textContent="=";
                elem.classList.add("equal");
                break;
            case i==4&&j==3:
                elem.textContent="+";
                elem.classList.add("add");
        }
    }
    // elem.textContent=i;

}
}
createElements();