let btn = document.getElementById('button');
btn.addEventListener('click', calcu);

function calcu(){
    let operators = document.getElementById("operators").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1=Number(num1);
    num2=Number(num2);

    switch(operators){
        case '+':
            result.innerHTML = num1 + num2;
            break;
        case '-':
            result.innerHTML = num1 - num2;
            break;   
        case '*':
            result.innerHTML = num1 * num2;
            break; 
        case '/':
            result.innerHTML = num1 / num2;
        default:
            result.innerHTML = "ERROR"
    }

}