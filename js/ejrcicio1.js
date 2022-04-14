// 1.	Cree un objeto con los siguientes datos: id, nombre, edad, pasatiempos y muestre en html las propiedades o llaves de ese objeto.

var persona = {
    id: 2345, 
    nombre : "alex",
    edad: 25,
    pasatiempos: "deporte",

}
document.write(Object.keys(persona));