// 5.	Llene una tabla de productos en html; pida los siguientes datos del producto: nombre, presentación, valor; guarde los datos en un objeto, y muestre al menos 5 productos en la tabla.

var tabla ="<table border='1'>";
tabla+="<tr>";
tabla+="<th>producto</th>";
tabla+="<th>presentacion</th>";
tabla+="<th>valor</th>";
tabla+="</tr>";

for(var i=0; i<2; i++){
    var nombre = prompt("digite el nombre del producto");
    var presentacion = prompt("ingrese la presentacion");
    var valor = prompt("ingrese el valor");
    var producto = {
        nombre: nombre,
        presentacion: presentacion,
        valor: valor,
    }
    tabla+="<tr>";
    tabla+="<td>"+producto.nombre+"</td>";
    tabla+="<td>"+producto.presentacion+"</td>";
    tabla+="<td>"+producto.valor+"</td>";
    tabla+="</tr>";

    
}
tabla+="</table>";
document.write(tabla);
