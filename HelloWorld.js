function fibseq(){
 
    var index = document.getElementById("fibnum").value;
 
    var x = 1;
    var y = 0;
    var temp = 0;
    var count = 0;
 
    while(count < index - 1){
        temp = x;
        x = x + y;
        y = temp;
        count++;
    }
 
    document.getElementById("fibnum2").innerHTML = y;
}



function revealMe(){
    document.getElementById("HM").style.display = 'block';
}

function revealFib(){
    document.getElementById("fibnum2").style.display = 'block';
}   