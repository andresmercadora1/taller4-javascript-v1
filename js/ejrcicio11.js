// 11.	Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cual es el primer numero, el ultimo, el del centro.

var arreglo = [3,5,9,10,35,42,12,22,25,];
var centro = Math.floor(arreglo.length / 2);
document.write("<p>el valor del vector en la primera posicion es: "+arreglo[0]+"</p>");
document.write("<p>el valor del vector en la posicion del centro es: "+arreglo[centro]+"</p>");
document.write("<p>el valor del vector en la ultima posicion es: "+arreglo[arreglo.length - 1]+"</p>"); 
