var xname = "hello mars";

console.log( "within script: " + xname);
var yy;

if (yy == undefined)
{
  console.log("aaah yy is UNDEFINDED BABA");
}
else
{
    console.log( "within script: " + yy);
}
 

var textval = "well hello";
textval += " world and mars and venus";
console.log("within script: " + textval);

something = "waka waka";


function doStringWork(somathina)
{
    wakka = somathina || "using defaults here";
    console.log(wakka);
}


doStringWork("fantastiQ");
doStringWork();


var TeslaRocket = new Object();

TeslaRocket.BooseterCount = 4;
TeslaRocket.JetFuelGrade = 1;
TeslaRocket.Stages = 4;
TeslaRocket.Name = "BrutusMuted"


console.log(TeslaRocket);


var Ferrari = { 
               Model:"TestaRoasa", 
               Year:2021, 
               HP:1200, 
               Drive:"RWD" 
              };


console.log(Ferrari["Year"]);

console.log(Ferrari);


console.log("\\\\\\\\\ ARRAYS /////////////")

var someArray = new Array();
someArray[0] = "wawa";
someArray[1] = 2323;
someArray[3] = "do this";
someArray[4] = true;

for(var i = 0; i < someArray.length; i++)
{
  console.log(someArray[i]);
}

//anotehr way to create an array using short hand notation!
var nameList = [];
nameList[0] = "mata hari";


console.log("<<<<<<<<<<<<<<< Exiting the SCript.js")