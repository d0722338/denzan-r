function displayBoth() {
    event.preventDefault();
    kaisuu();
    dennzannprint();
    fontsize();
    displayMultiples();
    displayMultiples2();
}

function dennzannprint() {
    var x = document.getElementById("dennzann");
    x.innerHTML = "田算" +" ";
}

function fontsize() {
    var inputNumber = document.getElementById("inputNumber").value;
    var x = document.getElementById("size");    
    x.innerHTML ="第"+inputNumber+"回";
}

function kaisuu() {
    var inputNumber = parseInt(document.getElementById("inputNumber").value);
    var x = document.getElementById("kaisuu");
    x.innerHTML = " "+"("+(inputNumber*2-1+100)+"~"+(inputNumber*2+100)+")";
}

function displayMultiples() {
    var inputNumber = document.getElementById("inputNumber").value;
    var inputNumber2 = document.getElementById("inputNumber").value;
    var tbody = document.getElementById("multiplesTable").getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    var a=1;
    for (var i = 1; i <= 9; i++) {
        var row = tbody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        if(i==1){
            cell1.innerText = "×" ;
            cell1.className = 'Number';
        }
        else{
            cell1.innerText = i ;
            cell1.className = 'Number';
        }
        cell2.innerText = (inputNumber*2-1+100)*a ;
        if(i==1){
            cell2.className = 'no1'
        }
        else{
            cell2.className = 'right-align'
        }
        if(i==1){
            cell3.innerText = " " ;
            cell3.className = 'Number';
        }
        else{
            cell3.innerText = i ;
            cell3.className = 'Number';
        }
        cell4.innerText = (inputNumber2*2-1+100)*362880/a;
        if(i==1){
            cell4.className = 'no1'
        }
        else{
            cell4.className = 'right-align'
        }
        if(i==1){
            cell5.innerText = "÷" ;
            cell5.className = 'Number2';
        }
        else{
            cell5.innerText = i ;
            cell5.className = 'Number';
        }
        
        a=a*(i+1);

    }
}


function displayMultiples2() {
var inputNumber = parseInt(document.getElementById("inputNumber").value);
var inputNumber2 = parseInt(document.getElementById("inputNumber").value);
var tbody = document.getElementById("multiplesTable2").getElementsByTagName('tbody')[0];
tbody.innerHTML = '';
var a=1;
for (var i = 1; i <= 9; i++) {
    var row = tbody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    if(i==1){
        cell1.innerText = "×" ;
        cell1.className = 'Number';
    }
    else{
        cell1.innerText = i ;
        cell1.className = 'Number';
    }
    cell2.innerText = (inputNumber*2+100) * a ;
    if(i==1){
            cell2.className = 'no1'
        }
        else{
            cell2.className = 'right-align'
        }
    if(i==1){
        cell3.innerText = " " ;
        cell3.className = 'Number';
    }
    else{
        cell3.innerText = i ;
        cell3.className = 'Number';
    }
    cell4.innerText = (inputNumber2*2+100) * 362880 / a;
    if(i==1){
        cell4.className = 'no1'
        }
    else{
        cell4.className = 'right-align'
        }
    if(i==1){
        cell5.innerText = "÷" ;
        cell5.className = 'Number2';
    }
    else{
        cell5.innerText = i ;
        cell5.className = 'Number';
    }

    a=a*(i+1);
    }
        
        
}