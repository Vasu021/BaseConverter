
var InNum= null;
var InBase= null;

document.getElementById("buttonAns").addEventListener("click",showAns);
var myAns=document.getElementById("myAns");

document.getElementById("two").addEventListener("click",getValues);
document.getElementById("two").addEventListener("click",InBase=2);

document.getElementById("one").addEventListener("click",getValues);         //output bases buttons
document.getElementById("one").addEventListener("click",InBase=1);          //set the base simultaneously



document.getElementById("three").addEventListener("click",getValues);
document.getElementById("three").addEventListener("click",InBase=3);

document.getElementById("four").addEventListener("click",getValues);
document.getElementById("four").addEventListener("click",InBase=4);
document.getElementById("five").addEventListener("click",getValues);
document.getElementById("five").addEventListener("click",InBase=5);
document.getElementById("six").addEventListener("click",getValues);
document.getElementById("six").addEventListener("click",InBase=6);
document.getElementById("seven").addEventListener("click",getValues);
document.getElementById("seven").addEventListener("click",InBase=7);
document.getElementById("eight").addEventListener("click",getValues);
document.getElementById("eight").addEventListener("click",InBase=8);
document.getElementById("nine").addEventListener("click",getValues);
document.getElementById("nine").addEventListener("click",InBase=9);
document.getElementById("ten").addEventListener("click",getValues);
document.getElementById("ten").addEventListener("click",InBase=10);
document.getElementById("eleven").addEventListener("click",getValues);
document.getElementById("eleven").addEventListener("click",InBase=11);
document.getElementById("twelve").addEventListener("click",getValues);
document.getElementById("twelve").addEventListener("click",InBase=12);
document.getElementById("thirteen").addEventListener("click",getValues);
document.getElementById("thirteen").addEventListener("click",InBase=13);
document.getElementById("fourteen").addEventListener("click",getValues);
document.getElementById("fourteen").addEventListener("click",InBase=14);
document.getElementById("fifteen").addEventListener("click",getValues);
document.getElementById("fifteen").addEventListener("click",InBase=15);
document.getElementById("sixteen").addEventListener("click",getValues);
document.getElementById("sixteen").addEventListener("click",InBase=16);


function getValues(){
    InNum=document.getElementById('inNum').value;
}


function showAns(){
    alert("enter "+InNum+" base "+InBase);
    myAns.textContent="changed";
}