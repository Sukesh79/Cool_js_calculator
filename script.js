function clearAll(){
    document.getElementById("result").value = "";
}

function deleteLast(){
    let result = document.getElementById("result").value;
    result = result.slice(0,-1);
    document.getElementById("result").value = result;
}


function eval2(){
    let result = document.getElementById("result").value;
    let calculatedResult = eval(result);
    document.getElementById("result").value = calculatedResult;
}

function appendAtLast(value){
    document.getElementById("result").value += value;
}