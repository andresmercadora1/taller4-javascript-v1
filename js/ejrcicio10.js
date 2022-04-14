// 10.	Cree un array con 3 elementos inicialmente y despues agregue 2 elementos mas, imprima en html todo los elementos.

var numeros = [2,3,4];
var agregar1 = parseInt(prompt("agregue un numero"));
var agregar2 = parseInt(prompt("agregue un numero"));
numeros.push(agregar1,agregar2);
for(var i = 0; i < numeros.length; i++){
    document.write("<p>"+numeros [i]+"</p>");
}
