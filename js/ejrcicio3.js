// 3.	Cree un objeto con los siguientes datos: id, nombre, edad, pasatiempos y una función dentro del objeto que muestre en una ventana el nombre y el pasatiempo que guardo en ese mismo objeto.

var persona = {
    id: 2345, 
    nombre : "alex",
    edad: 25,
    pasatiempos: "deporte",

    mostrar:function(){
        alert("nombre: "+this.nombre+"\n"+"pasatiempo: "+this.pasatiempos);
    }

}
persona.mostrar();