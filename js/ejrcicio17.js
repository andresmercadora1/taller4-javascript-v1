// 17.	 arreglo 1: [3,5,9,10,35,42,12,22,25], arreglo 2: [9,5,33,12,7,20,22,3,8] de los anteriores arreglos mostrar en forma de (tabla de multiplicar) la suma de los elementos del arraglo 1 con los elementos del arreglo 2 tambien sumar el total de cada arreglo.

var arreglo1 = [3,5,9,10,35,42,12,22,25];
var arreglo2 = [9,5,33,12,7,20,22,3,8];
var sumaarr1 = 0;
var sumaarr2 = 0;
for(var i = 0; i < arreglo1.length; i++){
 document.write("<p>"+ arreglo1 [i]+" + "+ arreglo2 [i]+" = "+ (arreglo1[i]+arreglo2[i])+"</p>"); 
 sumaarr1 += arreglo1[i];
 sumaarr2 += arreglo2[i];  
}
document.write("<p>"+ sumaarr1+" + "+ sumaarr2+" = "+ (sumaarr1 + sumaarr2)+"</p>"); 
 