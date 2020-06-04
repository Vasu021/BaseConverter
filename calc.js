
var InNum= null;
var InBase= 2;
var OutBase=2;
var clickedButton= null;
var clickedList=null;

document.getElementById("buttonAns").addEventListener("click",showAns);      //the answer button
var myAns=document.getElementById("myAns");                                  //the alert where the answer is displayed



var In= document.querySelector("#input1");
In.addEventListener("click",getInputBase,false);

var Out= document.querySelector("#out1");                               //output base button
Out.addEventListener("click",getValues,false);                          //call function getValues on output button click

function getValues(e){
    if(e.target !== e.currentTarget){
        InNum=Number(document.getElementById('inNum').value);
        clickedButton=e.target.id;
        if(clickedButton=="one"){
            OutBase=1;
        }
        if(clickedButton=="two"){
            OutBase=2;
        }
        if(clickedButton=="three"){
            OutBase=3;
        }
        if(clickedButton=="four"){
            OutBase=4;
        }
        if(clickedButton=="five"){
            OutBase=5;
        }
        if(clickedButton=="six"){
            OutBase=6;
        }
        if(clickedButton=="seven"){
            OutBase=7;
        }
        if(clickedButton=="eight"){
            OutBase=8;
        }
        if(clickedButton=="nine"){
            OutBase=9;
        }
        if(clickedButton=="ten"){
            OutBase=10;
        }
        if(clickedButton=="eleven"){
            OutBase=11;
        }
        if(clickedButton=="twelve"){
            OutBase=12;
        }
        if(clickedButton=="thirteen"){
            OutBase=13;
        }
        if(clickedButton=="fourteen"){
            OutBase=14;
        }
        if(clickedButton=="fifteen"){
            OutBase=15;
        }
        if(clickedButton=="sixteen"){
            OutBase=16;
        }
    }

}

function getInputBase(a){
    if(a.target !== a.currentTarget){
        clickedList=a.target.id;
        if(clickedList=="ione"){
            InBase=1;
        }
        if(clickedList=="itwo"){
            InBase=2;
        }
        if(clickedList=="ithree"){
            InBase=3;
        }
        if(clickedList=="ifour"){
            InBase=4;
        }
        if(clickedList=="ifive"){
            InBase=5;
        }
        if(clickedList=="isix"){
            InBase=6;
        }
        if(clickedList=="iseven"){
            InBase=7;
        }
        if(clickedList=="ieight"){
            InBase=8;
        }
        if(clickedList=="inine"){
            InBase=9;
        }
        if(clickedList=="iten"){
            InBase=10;
        }
        if(clickedList=="ieleven"){
            InBase=11;
        }
        if(clickedList=="itwelve"){
            InBase=12;
        }
        if(clickedList=="ithirteen"){
            InBase=13;
        }
        if(clickedList=="ifourteen"){
            InBase=14;
        }
        if(clickedList=="ififteen"){
            InBase=15;
        }
        if(clickedList=="isixteen"){
            InBase=16;
        }
    }
}

function showAns(){
    alert("entered no.= "+InNum+", Input base="+InBase +", output base="+OutBase);
    var num=InNum;
    var dec=0;
    var i=0;
    //inDigits=new Array();     //array not needed till base 10
    while(num!==0){
        dec=dec+(num%10)*Math.pow(InBase,(i));
        num=Math.floor(num/10);
        i=i+1;
    }
    //got the decimal value of the input 
    //now convert in the required base
    var out=0;
    var j=0;
    while(dec!==0){
        out=out+(dec%OutBase)*Math.pow(10,j);
        j=j+1;
        dec=Math.floor(dec/OutBase);
    }
    

    myAns.textContent=out;
}