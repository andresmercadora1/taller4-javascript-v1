// 4.	Cree un listado de empleados, pida los siguientes datos al usuario: nombre, cargo, salario; guarde los datos en un objeto, y muestre el listado de al menos 5 empleados en html.



for(var i=0; i<5; i++){
    var nombre = prompt("digite su nombre");
    var cargo = prompt("digite su cargo");
    var salario = prompt("digite su salario");
    var empleado1 = {
        nombre: nombre,
        cargo: cargo,
        salario: salario,
    }
    document.write("<p>nombre: "+empleado1.nombre+"</p>");
    document.write("<p>cargo: "+empleado1.cargo+"</p>");
    document.write("<p>salario: "+empleado1.salario+"</p>");
    document.write("<p></p>");
}
