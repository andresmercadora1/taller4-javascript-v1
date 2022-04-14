// 15.	Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma decendente.

var descendente = [29,5,40,10,35,42,12,22,25,1,3];
for(var i of descendente.sort((a,b)=> b-a)){
document.write(i+"  ");
}