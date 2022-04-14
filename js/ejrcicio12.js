// Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cuales y cuantos son los numeros pares y los impares.

var arreglo = [3,5,9,10,35,42,12,22,25,];
var pares = "";
var impares = "";
var numpares = "";
var numimpares = "";
for(var i = 0; i < arreglo.length; i++){
    if(arreglo [i] %2 == 0){
        pares += arreglo[i] +"  ";
        numpares ++;
    }
    else{ impares += arreglo[i] +"  ";
    numimpares ++;}
}
document.write("<p> numeros pares "+pares+", hay "+numpares+" numeros pares</p>");
document.write("<p> numeros impares "+impares+", hay "+numimpares+" numeros impares</p>");