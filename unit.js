function temperature(){
   // to convert celcius to farenheit
   //(CEL *9/5) + 32
   var c = document.getElementById("celsius").value;
   var f = (c * 9/5) + 32
   document.getElementById("farenheit").value = f
}


function weight(){
   //To convert kilograms to pounds
   //KG * 2.2
   var kg = document.getElemeentByID("kilo").value;
   var p = kg * 2.2
   document.getElementById("pounds").value = p
}


function distance(){
   //To convert kilometers to miles
   //KM * 0.62137
   var km = document.getElemetByID("km").value;
   var m = km * 0.62137
   document.getElementById(miles).value = m
}
