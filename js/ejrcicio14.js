// 14.	Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma acendente.

var ascendente = [29,5,40,10,35,42,12,22,25,1,3];
for(var i of ascendente.sort((a,b)=> a-b)){
document.write(i+"  ");
}