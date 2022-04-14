// 9.	Crea un array con nombres de frutas e imprime los datos en html por medio de un ciclo.

var frutas = ["manzanas","fresas","peras","bananas","guayavas"];
document.write("listado de frutas:");
for( var i = 0; i < frutas.length; i++){
    document.write("<p>"+frutas [i]+"</p>");
}