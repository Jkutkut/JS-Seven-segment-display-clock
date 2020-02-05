var totalE = ["G","F","E","D","C","B","A"];
var vertiEid = ["B","C","E","F"], horiEid = ["A","D","G"];//ids de los segmentos

var numerosB = [ /*From de A to the G (ABCDEFG)*/
    1111110,/*0*/
     110000,/*1*/
    1101101,/*2*/
    1111001,/*3*/
     110011,/*4*/
    1011011,/*5*/
    1011111,/*6*/
    1110000,/*7*/
    1111111,/*8*/
    1111011 /*9*/
];


window.onload = function (){
    setInterval(getDate, 1000);
    
    var corto = 10, largo = 6 * corto;
    var idsuf;
    for(var j = 1; j < 3; j++){
        for(var i = 0; i < vertiEid.length; i++){
            idsuf = vertiEid[i]+j;
            console.log(idsuf);
            document.getElementById("H"+idsuf).style.width = corto + "px";
            document.getElementById("H"+idsuf).style.height = largo + "px";
            document.getElementById("M"+idsuf).style.width = corto  + "px";
            document.getElementById("M"+idsuf).style.height = largo  + "px";
            document.getElementById("S"+idsuf).style.width = corto  + "px";
            document.getElementById("S"+idsuf).style.height = largo  + "px";
        }
        for(i = 0; i < horiEid.length; i++){
            idsuf = horiEid[i]+j;
            console.log(idsuf);
            document.getElementById("H"+idsuf).style.width = largo  + "px";
            document.getElementById("H"+idsuf).style.height = corto  + "px";
            document.getElementById("M"+idsuf).style.width = largo  + "px";
            document.getElementById("M"+idsuf).style.height = corto  + "px";
            document.getElementById("S"+idsuf).style.width = largo  + "px";
            document.getElementById("S"+idsuf).style.height = corto  + "px";
        }
    
    }
}


function setState(pre,numero,suf){ //numero 3 in => change 7seg display to 3, p=posi
    var color = "";
    for(var p = 0; p < totalE.length; p++){
        if((parseInt(numerosB[numero], 2) >> p).toString(2) % 2 == 0){ //if the p digit is a 0
            color = "powderblue";//white
        }
        else{
            color = "black";//black
        }
        document.getElementById(pre+totalE[p]+suf).style.backgroundColor = color;
    }
}


function getDate(){
    var time = new Date();
    setState("H", Math.trunc(time.getHours()/10),"1");
    setState("H", time.getHours()%10,"2");
    setState("M", Math.trunc(time.getMinutes()/10),"1");
    setState("M", time.getMinutes()%10,"2");
    setState("S", Math.trunc(time.getSeconds()/10),"1");
    setState("S", time.getSeconds()%10,"2");
}