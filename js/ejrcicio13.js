//  13.	 Del siguiente arreglo [tomate,banano,manzana,pera,cebolla,papa,fresas,Ajo,Sandia] mostrar 
// en html en cual  posicion se encuentras las frutas y en cual posicion las verduras.

var vector = ["tomate","banano","manzana","pera","cebolla","papa","fresas","Ajo","Sandia"];
var frutas = ["banano","manzana","pera","fresas","Sandia"];
var verduras = ["tomate","cebolla","papa","Ajo"];
document.write("frutas: ");
for(var i = 0; i < vector.length; i++){
    for(var j = 0; j < frutas.length; j++){
        if(vector [i] === frutas [j]){
           document.write(vector[i]+": posicion "+i+"  "); 
        }
    }
}
document.write("<br>verduras: ");
for(var i = 0; i < vector.length; i++){
    for(var j = 0; j < verduras.length; j++){
        if(vector [i] === verduras [j]){
           document.write(vector[i]+": posicion "+i+"  "); 
        }
    }
}


